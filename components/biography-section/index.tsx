"use client";

import { VIEW_LESS, VIEW_MORE } from '@/utils/constants/assets';
import React, { useState } from 'react';

const BiographySection = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownId: any) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    };

    const hiddenStyle = {
        maxHeight: '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-out',
    };

    const visibleStyle = {
        maxHeight: '500px',
        transition: 'max-height 0.5s ease-in',
    };


    return (
        <div className="container mx-auto p-4" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4 lg:mb-6 text-gray-900">Biografía</h1>
            <p className="text-gray-500 font-family-jost">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sem vitae turpis maximus posuere. Contrary to popular belief, there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                <br /><br />
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-16 mt-5'>
                <div className='w-full lg:w-1/2'>
                    <h2 className="text-2xl font-bold mb-4 lg:mb-6 text-gray-900">Arte, Elegancia & Estilo</h2>
                    <p className="text-gray-500 font-family-jost">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sem vitae turpis maximus posuere. Contrary to popular belief, there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                        <br /><br />
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </p>
                </div>

                <div id="faq" className="bg-white w-full lg:w-1/2 mx-auto">
                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Preguntas & Respuestas</h2>
                        <p className="text-gray-500 font-family-jost">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sem vitae turpis maximus posuere. Contrary to popular belief, there are many variations of passages.
                        </p>
                    </div>
                    {/* Acordeón 1 */}
                    <div
                        onClick={() => toggleDropdown(1)}
                        className={`${openDropdown === 1 && "bg-orange-100"} cursor-pointer mb-2 border border-gold-500 rounded-xl font-family-jost`}>
                        <div className='flex justify-between w-full px-4 items-center'>
                            <button
                                className={`py-3 w-full text-left font-medium text-gray-900`}
                            >
                                ¿Por qué soy una Diseñadora de Lámparas?
                            </button>
                            <img src={openDropdown === 1 ? VIEW_LESS : VIEW_MORE} alt='Questions & Answers' className='h-7' />
                        </div>
                        <div style={openDropdown === 1 ? visibleStyle : hiddenStyle} className="text-gray-500 rounded-xl">
                            <div className="p-4">
                                Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.
                            </div>
                        </div>
                    </div>
                    {/* Acordeón 2 */}
                    <div
                        onClick={() => toggleDropdown(2)}
                        className={`${openDropdown === 2 && "bg-orange-100"} cursor-pointer mb-2 mt-5 border border-gold-500 rounded-xl font-family-jost`}>
                        <div className='flex justify-between w-full px-4 items-center'>
                            <button
                                className={`py-3 w-full text-left font-medium text-gray-900`}
                            >
                                ¿Qué tan fácil es realizar una lámpara?
                            </button>
                            <img src={openDropdown === 2 ? VIEW_LESS : VIEW_MORE} alt='Questions & Answers' className='h-7' />
                        </div>
                        <div style={openDropdown === 2 ? visibleStyle : hiddenStyle} className="text-gray-500 rounded-xl">
                            <div className="p-4">
                                Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.
                            </div>
                        </div>
                    </div>
                    {/* Acordeón 3 */}
                    <div
                        onClick={() => toggleDropdown(3)}
                        className={`${openDropdown === 3 && "bg-orange-100"} cursor-pointer mt-5 border border-gold-500 rounded-xl font-family-jost`}>
                        <div className='flex justify-between w-full px-4 items-center'>
                            <button
                                className={`py-3 w-full text-left font-medium text-gray-900`}
                            >
                                ¿Cuentas con Experiencia Internacional?
                            </button>
                            <img src={openDropdown === 3 ? VIEW_LESS : VIEW_MORE} alt='Questions & Answers' className='h-7' />
                        </div>
                        <div style={openDropdown === 3 ? visibleStyle : hiddenStyle} className="text-gray-500 rounded-xl">
                            <div className="p-4">
                                Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiographySection;
