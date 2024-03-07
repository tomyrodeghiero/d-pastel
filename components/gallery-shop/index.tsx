// Importaciones de React y Next.js
import { GALLERY_SHOP_01, GALLERY_SHOP_03, GALLERY_SHOP_04, GALLERY_SHOP_05, GALLERY_SHOP_06, GALLERY_SHOP_07, GALLERY_SHOP_08, NAVIGATE } from '@/utils/constants/assets';
import Link from 'next/link';
import React from 'react';

const GalleryItem = ({ src, title, description }: any) => {
    const imageHeight = 'h-72 lg:h-[30rem]';
    return (
        <div className="w-full flex flex-col">
            <div className={`w-full overflow-hidden rounded-lg ${imageHeight}`}>
                <img src={src} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center p-4 mt-4 flex justify-between items-center">
                <div className='text-left'>
                    <p className="text-2xl text-gray-900">{title}</p>
                    <p className="text-gray-500 text-xl font-family-jost">{description}</p>
                </div>
                <Link href="/shop/123">
                    <img src={NAVIGATE} alt="Navigate" className='h-12' />
                </Link>
            </div>
        </div>
    );
};

// Componente de React para la galería completa
const GalleryShop = () => {
    const lamps = [
        { src: GALLERY_SHOP_01, title: 'Modern Kitchan 01', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_04, title: 'Modern Kitchan 02', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_03, title: 'Modern Kitchan 03', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_04, title: 'Modern Kitchan 04', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_05, title: 'Modern Kitchan 01', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_06, title: 'Modern Kitchan 02', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_07, title: 'Modern Kitchan 03', description: 'Decor / Architecture' },
        { src: GALLERY_SHOP_08, title: 'Modern Kitchan 04', description: 'Decor / Architecture' },
    ];

    return (
        <div className="mx-auto max-w-6xl py-4 px-2">
            <div className="grid grid-cols-2 gap-4 mt-5">
                {lamps.map((lamp, index) => (
                    <GalleryItem key={index} {...lamp} />
                ))}
            </div>
        </div>
    );
};

export default GalleryShop;
