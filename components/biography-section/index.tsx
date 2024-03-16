"use client";

import { VIEW_LESS, VIEW_MORE } from "@/utils/constants/assets";
import { useState } from "react";

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
                Desde mi infancia, he estado fascinada por los colores y las formas, llevándome por el camino del arte y el diseño. Mi nombre es Irene Arias, fundadora de D-pastel, donde cada pieza de decoración es una expresión de arte, elegancia y estilo. Con una pasión por transformar espacios comunes en ambientes únicos, he dedicado mi vida a la decoración de interiores, ofreciendo a mis clientes diseños personalizados que cuentan historias y generan emociones.
                <br /><br />
                Nuestro enfoque en D-pastel no se limita solo a la estética; buscamos crear ambientes que reflejen la personalidad y el estilo de vida de cada cliente, convirtiendo cada espacio en un lugar donde deseen estar. Nuestra tienda en línea está disponible 24/7, con envíos a todo el país, porque creemos que la belleza y el confort deben estar al alcance de todos.
            </p>
            <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-16 mt-5'>
                <div className='w-full lg:w-1/2'>
                    <h2 className="text-2xl font-bold mb-4 lg:mb-6 text-gray-900">Arte, Elegancia & Estilo</h2>
                    <p className="text-gray-500 font-family-jost">
                        En D-pastel, cada diseño es una pieza de arte. Mi equipo y yo trabajamos incansablemente para asegurar que cada proyecto refleje un equilibrio perfecto entre funcionalidad y estética. Ofrecemos una amplia gama de productos, desde muebles hasta accesorios decorativos, todos diseñados con un enfoque en la calidad y la sostenibilidad. Ya sea que busques una renovación completa o simplemente quieras añadir un toque de frescura a tu espacio, en D-pastel encontrarás todo lo necesario para crear el ambiente perfecto.
                        <br /><br />
                        Te invitamos a explorar nuestro catálogo en línea y a descubrir por qué D-pastel es sinónimo de arte, elegancia y estilo en el mundo de la decoración de interiores.
                    </p>
                </div>

                <div id="faq" className="bg-white w-full lg:w-1/2 mx-auto">
                    <div className='mb-4'>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Preguntas & Respuestas</h2>
                        <p className="text-gray-500 font-family-jost">
                            ¿Tienes curiosidad sobre cómo podemos transformar tu espacio? Aquí respondemos algunas de las preguntas más frecuentes sobre nuestros servicios y productos.
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
                                ¿Por qué elegir D-pastel para tu decoración?
                            </button>
                            <img src={openDropdown === 1 ? VIEW_LESS : VIEW_MORE} alt='Questions & Answers' className='h-7' />
                        </div>
                        <div style={openDropdown === 1 ? visibleStyle : hiddenStyle} className="text-gray-500 rounded-xl">
                            <div className="p-4">
                                Elegir D-pastel significa optar por una experiencia personalizada y detallada. Nuestro enfoque se centra en entender tus necesidades y deseos para crear espacios que no solo sean estéticamente agradables, sino también funcionales y confortables. Contamos con una amplia experiencia y una pasión por el diseño que nos permite ofrecer soluciones únicas y creativas.
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
                                ¿Cómo puedo personalizar mi pedido?
                            </button>
                            <img src={openDropdown === 2 ? VIEW_LESS : VIEW_MORE} alt='Questions & Answers' className='h-7' />
                        </div>
                        <div style={openDropdown === 2 ? visibleStyle : hiddenStyle} className="text-gray-500 rounded-xl">
                            <div className="p-4">
                                Personalizar tu pedido es fácil. Puedes comenzar explorando nuestro catálogo en línea y, si algo capta tu atención, no dudes en contactarnos. Nuestro equipo está listo para trabajar contigo en ajustes de color, tamaño o diseño para asegurarnos de que el producto final sea exactamente lo que buscas.
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
                                ¿Ofrecen envíos a todo el país?
                            </button>
                            <img src={openDropdown === 3 ? VIEW_LESS : VIEW_MORE} alt='Questions & Answers' className='h-7' />
                        </div>
                        <div style={openDropdown === 3 ? visibleStyle : hiddenStyle} className="text-gray-500 rounded-xl">
                            <div className="p-4">
                                Sí, en D-pastel estamos comprometidos con llevar arte y estilo a cada rincón del país. Ofrecemos envíos a todo el territorio nacional, asegurando que tu pedido llegue de forma segura y a tiempo. Para más detalles sobre nuestros procesos de envío y tarifas, por favor contáctanos a través de nuestro correo electrónico o visita nuestra tienda en línea.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiographySection;
