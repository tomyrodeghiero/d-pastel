import { NAVIGATE, NO_RESULTS } from '@/utils/constants/assets';
import { CATEGORIES } from '@/utils/constants/constants';
import { formatPriceARS } from '@/utils/functions';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const GalleryItemPlaceholder = () => (
    <div className="w-full flex flex-col">
        <div className={`w-full overflow-hidden rounded-lg h-72 lg:h-[30rem]`}>
            <span className="placeholder rounded-lg w-full h-full object-cover"></span>
        </div>
        <div className="text-center p-4 mt-4 flex justify-between items-center">
            <div className='text-left'>
                <span className="placeholder-text block w-3/4 h-6 mb-2"></span>
                <span className="placeholder-text block w-1/2 h-6"></span>
            </div>
            <span className="placeholder h-12 w-12"></span>
        </div>
    </div>
);


const GalleryItem = ({ src, title, id, category, lowestPrice }: any) => {
    const imageHeight = 'h-72 lg:h-[30rem]';
    return (
        <Link className="w-full flex flex-col" href={`/shop/${id}`}>
            <div className={`w-full overflow-x-auto rounded-lg ${imageHeight}`}>
                <img src={src} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center p-4 lg:mt-2 flex justify-between items-center">
                <div className='text-left'>
                    <p className="text-2xl text-gray-900">{title}</p>
                    <p className="text-gray-500 text-xl font-family-jost">{category}</p>
                    <p className="text-gray-700 text-lg font-medium font-family-jost">{`$${formatPriceARS(lowestPrice)}`}</p>
                </div>
                <img src={NAVIGATE} alt="Navigate" className='hidden lg:h-12' />
            </div>
        </Link>
    );
};

const GalleryShop = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const [activeCategory, setActiveCategory] = useState<any>(null);
    const [activeSubcategory, setActiveSubcategory] = useState('Todas');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const tabsRef = useRef<any>(null);

    useEffect(() => {
        if (!isAutoScrollEnabled) {
            return;
        }

        const interval = setInterval(() => {
            if (tabsRef.current) {
                tabsRef.current.scrollLeft += 1;
            }
        }, 20);

        return () => clearInterval(interval);
    }, [isAutoScrollEnabled]);

    const handleTabClick = (tab: any) => {
        if (activeCategory && activeCategory.name === tab.name) {
            setActiveCategory(null);
            setActiveTab(null);
            setActiveSubcategory('Todas');
            localStorage.removeItem('activeCategory');
            localStorage.removeItem('activeSubcategory');
        } else {
            setActiveTab(tab);
            setActiveCategory(tab);
            setActiveSubcategory('Todas');
        }
        setIsAutoScrollEnabled(false);
    };

    const handleSubcategoryClick = (subcategory: any) => {
        setActiveSubcategory(subcategory);
    };

    const renderSubcategoryTabs = () => {
        if (activeCategory?.subcategories && activeCategory?.subcategories?.length > 0) {
            return (
                <div className="flex font-family-jost overflow-x-auto scroll-smooth whitespace-nowrap items-center w-full lg:rounded-2xl bg-white border border-gray-500 mt-4" style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}>
                    <style>
                        {`
                        .flex::-webkit-scrollbar {
                          display: none;
                        }
                        `}
                    </style>
                    {activeCategory.subcategories.map((subcategory: any) => (
                        <button
                            key={subcategory}
                            className={`flex-grow min-w-[20%] text-lg font-medium py-2 lg:py-3 px-4 rounded-xl ${activeSubcategory === subcategory ? 'bg-orange-100 text-gray-900' : 'text-gray-900'} focus:outline-none transition-colors duration-150 ease-in-out flex-shrink-0`}
                            onClick={() => handleSubcategoryClick(subcategory)}
                        >
                            {subcategory}
                        </button>
                    ))}

                </div>
            );
        }
        return null;
    };

    // Function to fetch products
    async function getProducts() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(`/api/products?page=1&limit=200`, requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const transformedProducts = data.products
                .filter((product: any) => product.username === "dpastel")
                .map((product: any, index: number) => {
                    const measurements = product.measurements || [];

                    const prices = measurements.map((measurement: any) => parseFloat(measurement.price));

                    const lowestPrice = prices.length > 0 ? Math.min(...prices) : 'N/A';

                    return {
                        src: product.mainImageUrl,
                        title: product.name,
                        category: product.category,
                        id: product._id,
                        inlineStyles: index % 4 === 0 ? "rounded-tr-[4.5rem]" :
                            index % 4 === 1 ? "rounded-tl-[4.5rem]" :
                                index % 4 === 2 ? "rounded-br-[4.5rem]" :
                                    "rounded-bl-[4.5rem]",
                        lowestPrice,
                        subcategory: product.lightTone,
                    };
                });


            setProducts(transformedProducts);
        } catch (error) {
            console.error("error", error);
        } finally {
            setIsLoading(false);
        }
    }

    const filteredProducts = useMemo(() => {
        if (!activeCategory) {
            return products;
        } else {
            return products.filter((product: any) => {
                const matchesCategory = activeCategory?.name === product.category;
                const matchesSubcategory = activeSubcategory === 'Todas' || product.subcategory === activeSubcategory;
                return matchesCategory && matchesSubcategory;
            });
        }
    }, [products, activeCategory, activeSubcategory]);

    useEffect(() => {
        getProducts();
    }, [activeCategory, activeSubcategory]);

    useEffect(() => {
        const savedCategory = localStorage.getItem('activeCategory');
        const savedSubcategory = localStorage.getItem('activeSubcategory');
        if (savedCategory) {
            const parsedCategory = JSON.parse(savedCategory);
            setActiveCategory(parsedCategory);
            setActiveTab(parsedCategory);
        }
        if (savedSubcategory) {
            setActiveSubcategory(savedSubcategory);
        }
    }, []);

    useEffect(() => {
        if (activeCategory) {
            localStorage.setItem('activeCategory', JSON.stringify(activeCategory));
            setActiveTab(activeCategory);
        } else {
            localStorage.removeItem('activeCategory');
            setActiveTab(null);
        }
        localStorage.setItem('activeSubcategory', activeSubcategory);
    }, [activeCategory, activeSubcategory]);

    const resetSearch = () => {
        setActiveCategory(null);
        setActiveTab(null);
        setActiveSubcategory('Todas');
        localStorage.removeItem('activeCategory');
        localStorage.removeItem('activeSubcategory');
        getProducts();
    };

    if (isLoading) {
        return (
            <>
                <div
                    className="flex overflow-x-auto scroll-smooth items-center w-full lg:rounded-2xl bg-white border border-gold-500"
                    ref={tabsRef}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style>
                        {`
                ::-webkit-scrollbar {
                  display: none;
                }
            `}
                    </style>
                    {CATEGORIES.map(tab => (
                        <button
                            key={tab.name}
                            className={`flex-none lg:w-1/3 lg:flex-grow text-lg font-medium py-2 lg:py-3 px-4 rounded-xl ${activeTab === tab ? 'bg-gold-500 text-white' : 'text-gray-900'} focus:outline-none transition-colors duration-150 ease-in-out font-family-jost`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="mx-auto max-w-6xl py-4 px-2">
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        {[...Array(4)].map((_, index) => (
                            <GalleryItemPlaceholder key={index} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-grow">
                <div
                    className="flex overflow-x-auto scroll-smooth items-center w-full lg:rounded-2xl bg-white border border-gold-500"
                    ref={tabsRef}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    <style>
                        {`
                        ::-webkit-scrollbar {
                          display: none;
                        }
                    `}
                    </style>
                    {CATEGORIES.map(tab => (
                        <button
                            key={tab.name}
                            className={`flex-none lg:w-1/3 lg:flex-grow text-lg font-medium py-2 lg:py-3 px-4 rounded-xl ${activeTab === tab ? 'bg-gold-500 text-white' : 'text-gray-900'} focus:outline-none transition-colors duration-150 ease-in-out font-family-jost`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            {renderSubcategoryTabs()}
            {filteredProducts.length > 0 ? <div className="mx-auto max-w-6xl py-4 px-2">
                <div className="grid grid-cols-2 gap-4 mt-5">
                    {filteredProducts.map((lamp: any, index) => (
                        <GalleryItem key={index} {...lamp} />
                    ))}
                </div>
            </div> :
                <div className='w-full font-family-jost'>
                    <div className="flex px-4 lg:px-0 mx-auto flex-col justify-center items-center">
                        <img className="h-60" src={NO_RESULTS} alt={"Without results"} />
                        <p className="font-medium text-xl text-center">
                            No se encontraron productos que coincidan con los criterios de búsqueda.
                        </p>
                        <p className="mt-4 text-lg text-center">
                            Por favor, intenta recortar o reformular su búsqueda 🔎
                        </p>
                        <button
                            onClick={resetSearch}
                            className="bg-white border py-2 mb-8 font-medium px-8 border-black rounded mt-7 uppercase"
                        >
                            Restablecer Búsqueda
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default GalleryShop;
