// Importaciones de React y Next.js
import { NAVIGATE } from '@/utils/constants/assets';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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


const GalleryItem = ({ src, title, id, category }: any) => {
    const imageHeight = 'h-72 lg:h-[30rem]';
    return (
        <Link className="w-full flex flex-col" href={`/shop/${id}`}>
            <div className={`w-full overflow-hidden rounded-lg ${imageHeight}`}>
                <img src={src} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center p-4 mt-4 flex justify-between items-center">
                <div className='text-left'>
                    <p className="text-2xl text-gray-900">{title}</p>
                    <p className="text-gray-500 text-xl font-family-jost">{category}</p>
                </div>
                <img src={NAVIGATE} alt="Navigate" className='h-12' />
            </div>
        </Link>
    );
};

// Componente de React para la galería completa
const GalleryShop = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            console.log("data", data)

            const transformedProducts = data.products
                .filter((product: any) => product.username === "dpastel")
                .map((product: any, index: number) => ({
                    src: product.mainImageUrl,
                    title: product.name,
                    category: product.category,
                    id: product._id,
                    // You can adjust the inlineStyles based on index or any other logic here
                    inlineStyles: index % 4 === 0 ? "rounded-tr-[4.5rem]" :
                        index % 4 === 1 ? "rounded-tl-[4.5rem]" :
                            index % 4 === 2 ? "rounded-br-[4.5rem]" :
                                "rounded-bl-[4.5rem]",
                }));

            setProducts(transformedProducts);
        } catch (error) {
            console.error("error", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading) {
        return (
            <div className="mx-auto max-w-6xl py-4 px-2">
                <div className="grid grid-cols-2 gap-4 mt-5">
                    {[...Array(4)].map((_, index) => (
                        <GalleryItemPlaceholder key={index} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl py-4 px-2">
            <div className="grid grid-cols-2 gap-4 mt-5">
                {products.map((lamp: any, index) => (
                    <GalleryItem key={index} {...lamp} />
                ))}
            </div>
        </div>
    );
};

export default GalleryShop;
