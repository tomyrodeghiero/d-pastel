"use client";

import React from "react";
import { WHATSAPP } from "@/utils/constants/assets";
import { PHONE_NUMBER } from "@/utils/constants/social-media";
import { useProductContext } from '@/context/ProductContext';

const WhatsApp = () => {
    const { productName } = useProductContext();

    const defaultMessage = "Hola, estoy interesado en un producto de iluminación. ¿Podrían darme más información?";
    const message = productName
        ? `Hola, estoy interesado en el producto ${productName}. ¿Podrían darme más información?`
        : defaultMessage;

    const handleClick = () => {
        window.open(
            `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="fixed bottom-4 right-4 z-40" data-aos="fade-left">
            <img
                className="hover-lift h-16 cursor-pointer"
                src={WHATSAPP}
                alt="WhatsApp"
                onClick={handleClick}
            />
        </div>
    );
};

export default WhatsApp;
