"use client";

import GalleryShop from '@/components/gallery-shop';
import HeaderBackground from '@/components/header-background'
import { BG_SHOP } from '@/utils/constants/assets'
import React from 'react'

const ShopPage = () => {
    return (
        <>
            <HeaderBackground
                background={BG_SHOP}
                title="Nuestra Tienda"
                subtitle="Inicio - Tienda"
                focusPosition='center'
            />
            <h2 data-aos="fade-right" className="text-4xl w-full text-center py-5 lg:py-10 text-gray-900 leading-[3.5rem]">Explora por Categorías</h2>
            <div data-aos="fade-up" className='max-w-5xl mx-auto'>
                <GalleryShop />
            </div>
        </>
    )
}

export default ShopPage