import { ARROW_RIGHT } from '@/utils/constants/assets';
import React from 'react';

const Services = () => {
    return (
        <div className="flex flex-wrap items-center pt-8 py-8 lg:py-16 justify-center">
            <div className="flex flex-wrap justify-around w-full max-w-6xl px-4">
                <div className="text-center px-4 w-full sm:w-1/2 md:w-1/3 py-4 lg:py-0 border border-gray-200 lg:border-none rounded-2xl" data-aos="fade-up">
                    <h3 className="text-xl">Plan de Iluminación</h3>
                    <p className="mt-2 text-gray-500 services-description">
                        Cada lámpara es una obra de arte, creada para llevar luz y estilo a tu espacio con piezas únicas.
                    </p>
                    <div className='flex gap-4 lg:py-2 items-center justify-center mt-5'>
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

                <div className="text-center px-4 w-full sm:w-1/2 md:w-1/3 py-4 lg:py-0 border border-gray-200 lg:border-none rounded-2xl mt-5 lg:mt-0" data-aos="fade-up">
                    <h3 className="text-xl">Arte y Misión</h3>
                    <p className="mt-2 text-gray-500 services-description">
                        Nuestras lámparas no solo iluminan, sino que combinan funcionalidad con belleza artesanal.
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

                <div className="text-center px-4 w-full sm:w-1/2 md:w-1/3 py-4 lg:py-0 border border-gray-200 lg:border-none rounded-2xl mt-5 lg:mt-0" data-aos="fade-up">
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
