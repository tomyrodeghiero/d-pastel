import { ARROW_RIGHT } from '@/utils/constants/assets';
import React from 'react';

const Services = () => {
    return (
        <div className="flex items-center pt-8 py-16 justify-center">
            <div className="space-x-12 flex justify-around w-full max-w-6xl">
                <div className="text-center">
                    <h3 className="text-xl">Plan de Iluminación</h3>
                    <p className="mt-2 text-gray-500 services-description">
                        Cada lámpara es una obra de arte, creada para llevar luz y estilo a tu espacio con piezas únicas.
                    </p>
                    <div className='flex gap-4 items-center justify-center mt-5'>
                        <a href="#" className="font-medium font-family-jost text-lg text-black-700">
                            Ver Más
                        </a>
                        <img
                            className="h-4"
                            src={ARROW_RIGHT}
                            alt="Go to Shop"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-xl">Arte y Misión</h3>
                    <p className="mt-2 text-gray-500 services-description">
                        Nuestras lámparas no solo iluminan, sino qu combinann funcionalidad con belleza artesanal.
                    </p>
                    <div className='flex gap-4 items-center justify-center mt-5'>
                        <a href="#" className="font-medium font-family-jost text-lg text-black-700">
                            Ver Más
                        </a>
                        <img
                            className="h-4"
                            src={ARROW_RIGHT}
                            alt="Go to Shop"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-xl">Proyectos Completados</h3>
                    <p className="mt-2 text-gray-500 services-description">
                        Mira nuestros proyectos finalizados y cómo nuestras lámparas artesanales han dado vida a diversos interiores.
                    </p>
                    <div className='flex gap-4 items-center justify-center mt-5'>
                        <a href="#" className="font-medium font-family-jost text-lg text-black-700">
                            Ver Más
                        </a>
                        <img
                            className="h-4"
                            src={ARROW_RIGHT}
                            alt="Go to Shop"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
