"use client";

import HeaderBackground from "@/components/header-background";
import { BG_HOW_TO_BUY, HOW_TO_BUY_01, HOW_TO_BUY_02, HOW_TO_BUY_03, HOW_TO_BUY_04, HOW_TO_BUY_05 } from "@/utils/constants/assets";
import { handleClickToWhatsApp } from "@/utils/functions";
import React from "react";

const HowToBuyPage = () => {
    const steps = [
        { number: 1, image: HOW_TO_BUY_01, text: "Navega por nuestra tienda online" },
        { number: 2, image: HOW_TO_BUY_02, text: "Añade los productos a tu bolsa de compras" },
        { number: 3, image: HOW_TO_BUY_03, text: "Presiona «Comprar por WhatsApp» dentro del carrito" },
        { number: 4, image: HOW_TO_BUY_04, text: "Conversemos sobre cómo te gustaría pagar tu compra y cómo quisieras recibirla" },
        { number: 5, image: HOW_TO_BUY_05, text: "Disfruta de tu lámpara en el lugar que lo desees" },
    ];

    return (
        <div>
            <HeaderBackground
                background={BG_HOW_TO_BUY}
                title="Guía de compra"
                subtitle="Inicio - Cómo comprar"
            />

            <div className="flex flex-col text-black p-4 lg:py-10 lg:px-72">
                <h1 data-aos="fade-right" className="text-2xl font-medium lg:text-3xl lg:text-center mb-5">
                    Mi Compra en Sencillos Pasos
                </h1>
                <div data-aos="fade-up" className="font-family-jost text-xl text-gray-700">
                    <p className="mt-2 mb-5">
                        En nuestra tienda en línea puedes encontrar modelos y tamaños establecidos, a los que
                        accedes con un simple click, pero también puedes ponerte en&nbsp;
                        <span className="font-medium cursor-pointer text-gold-900 underline" onClick={handleClickToWhatsApp}>
                            contacto
                        </span> con nosotros y
                        encontrar el producto que necesitas, en el tamaño que prefieras y el material que te sirva...
                    </p>

                    <p className="mb-5">
                        Tené en cuenta que (en ambos casos) son productos hechos especialmente para vos, por lo
                        que el tiempo de producción es de <span className="font-medium">30 a 45 días a partir de la compra.</span>
                    </p>

                    <p className="mb-5">
                        <span className="font-medium">-&nbsp;&nbsp;&nbsp;</span>Los <span className="font-medium">envíos</span> son acordados con el comprador, quien asume los costos correspondientes. Los productos van bien protegidos y
                        embalados para que lleguen en perfecto estado.
                    </p>
                    <p>
                        <span className="font-medium">-&nbsp;&nbsp;&nbsp;CAMBIOS Y DEVOLUCIONES:</span> Si por alguna razón necesitas hacer algún cambio o devolución,
                        nos contactamos y lo resolvemos. Recordar los tiempos de producción, si? Los gastos de
                        transporte en este caso corren por cuenta del cliente.
                    </p>
                </div>
            </div>

            <div data-aos="fade-up" className="flex flex-wrap mx-auto justify-center items-center px-4 max-w-6xl mb-10 font-family-jost">
                {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center px-2 mb-4 w-1/2 md:w-1/3">
                        <div className="mb-2 text-2xl text-blue-900 font-medium">{step.number}</div>
                        <img
                            src={step.image}
                            alt={`Step ${step.number}`}
                            className="max-w-xs mb-2 h-36"
                        />
                        <p className="text-center lg:text-base text-gray-900">{step.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowToBuyPage;
