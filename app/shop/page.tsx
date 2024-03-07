"use client";

import ContactForm from '@/components/contact-form'
import GalleryShop from '@/components/gallery-shop';
import HeaderBackground from '@/components/header-background'
import GalleryPagination from '@/components/pagination-shop';
import QuoteCard from '@/components/quote-card'
import SectionCard from '@/components/section-card'
import Tabs from '@/components/tabs'
import { BG_SHOP, SECTION_CARD_01 } from '@/utils/constants/assets'
import React from 'react'

const ShopPage = () => {
    return (
        <>
            <HeaderBackground
                background={BG_SHOP}
                title="Nuestra Tienda"
                subtitle="Inicio - Tienda"
            />
            <h2 className="text-4xl w-full text-center py-10 text-gray-900 leading-[3.5rem]">Explora por Categorías</h2>
            <div className='max-w-5xl mx-auto'>
                <Tabs />
                <GalleryShop />
                <GalleryPagination />
            </div>
        </>
    )
}

export default ShopPage