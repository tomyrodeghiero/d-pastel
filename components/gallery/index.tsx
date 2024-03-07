// Importaciones de React y Next.js
import { GALLERY_01, GALLERY_02, GALLERY_03, GALLERY_04, NAVIGATE } from '@/utils/constants/assets';
import Image from 'next/image';
import React from 'react';

// Componente de React para un elemento individual de la galería
const GalleryItem = ({ src, title, description, inlineStyles }: any) => {
    return (
        <div className="w-full">
            <div>
                <img src={src} alt={title} className={`${inlineStyles} w-full`} />
                <div className="text-center p-4 mt-4 flex justify-between items-center">
                    <div className='text-left'>
                        <p className="text-2xl text-gray-900">{title}</p>
                        <p className="text-gray-500 text-xl font-family-jost">{description}</p>
                    </div>
                    <div className="mt-4">
                        <img src={NAVIGATE} alt="Navigate" className='h-12' />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente de React para la galería completa
const Gallery = () => {
    const lamps = [
        { src: GALLERY_01, title: 'Modern Kitchan 01', description: 'Decor / Architecture', inlineStyles: "rounded-tr-[4.5rem]" },
        { src: GALLERY_02, title: 'Modern Kitchan 02', description: 'Decor / Architecture', inlineStyles: "rounded-tl-[4.5rem]" },
        { src: GALLERY_03, title: 'Modern Kitchan 03', description: 'Decor / Architecture', inlineStyles: "rounded-br-[4.5rem]" },
        { src: GALLERY_04, title: 'Modern Kitchan 04', description: 'Decor / Architecture', inlineStyles: "rounded-bl-[4.5rem]" },
    ];

    return (
        <div className="mx-auto max-w-6xl py-5 lg:pt-0" data-aos="fade-up">
            <div className='w-full text-center'>
                <h2 className='text-gray-900 text-3xl lg:text-4xl mb-2'>Descubre nuestras Lámparas</h2>
                <p className='text-gray-500 text-lg font-family-jost w-[90%] lg:w-[75%] mx-auto leading-7'>Es un hecho conocido que el contenido claro y atractivo en una página captura la atención del lector.<br />Descubre cómo nuestros diseños de lámaparas transforman los espacios.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-10 mt-5">
                {lamps.map((lamp, index) => (
                    <GalleryItem key={index} {...lamp} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
