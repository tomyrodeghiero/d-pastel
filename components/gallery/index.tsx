"use client";

import React, { useState, useEffect } from 'react';
import { NAVIGATE } from '@/utils/constants/assets';
import Link from 'next/link';
import { formatPriceARS } from '@/utils/functions';

const GalleryItemPlaceholder = () => (
    <div className="w-full">
        <div>
            <span className="placeholder rounded lg:h-[30rem] object-cover w-full"></span>
            <div className="mt-2 pl-2 lg:pl-0">
                <span className="placeholder-text"></span>
                <span className="placeholder-text"></span>
            </div>
        </div>
    </div>
);

const GalleryItem = ({ src, title, category, id, lowestPrice, inlineStyles }: any) => {
    return (
        <Link className='w-full' href={`/shop/${id}`}>
            <div>
                <img src={src} alt={title} className={`${inlineStyles} h-[15rem] rounded lg:h-[30rem] object-cover w-full`} />
                <div className="lg:text-center lg:p-4 mt-2 pl-2 lg:pl-0 flex flex-col lg:flex-row justify-between lg:items-center">
                    <div className='text-left'>
                        <p className="text-2xl text-gray-900">{title}</p>
                        <p className="text-gray-500 text-xl font-family-jost">{category}</p>
                        <p className="text-gray-700 text-lg font-medium font-family-jost">{`$${formatPriceARS(lowestPrice)}`}</p>
                    </div>
                    <div className='mt-2 lg:mt-0 mx-auto lg:mx-0'>
                        <img src={NAVIGATE} alt="Navigate" className='h-10 lg:h-12' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Gallery = () => {
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
                    };
                });
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
            <div className="lg:mx-auto max-w-6xl py-5 lg:pt-0">
                <div className="grid grid-cols-2 gap-4 lg:gap-10 mt-5">
                    {[...Array(4)].map((_, index) => (
                        <GalleryItemPlaceholder key={index} />
                    ))}
                </div>
            </div>
        );
    }


    return (
        <>
            <div className="lg:mx-auto max-w-6xl py-5 lg:pt-0 px-4 lg:px-0" data-aos="fade-up">
                <div className='w-full lg:text-center'>
                    <h2 className='text-gray-900 text-3xl lg:text-4xl mb-2' data-aos="fade-right">Descubre nuestros Diseños</h2>
                    <p className='text-gray-500 text-lg font-family-jost w-[90%] lg:w-[75%] lg:mx-auto leading-7' data-aos="fade-up">Es un hecho conocido que el contenido claro y atractivo en una página captura la atención del lector.<br />Descubre cómo nuestros diseños de lámparas transforman los espacios.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:gap-10 mt-5">
                    {products.map((product: any, index) => (
                        <GalleryItem key={index} {...product} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Link
                    href="/shop"
                    className="bg-white border text-xl font-family-jost border-gold-500 hover:bg-gold-900 p-3 my-8 lg:mb-8 px-8 font-medium hover:text-white focus:outline-none focus:ring-1 focus:ring-gold-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 text-gold-900 py-3"
                >
                    Ver más en la Tienda
                </Link>
            </div>
        </>
    );
};

export default Gallery;
