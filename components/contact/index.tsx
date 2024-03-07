import { ARROW_RIGHT, CONTACT_BANNER, PHONE } from '@/utils/constants/assets';
import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between px-5 lg:p-5">
                <div className="flex-1 lg:pt-8">
                    <h2 className="text-4xl lg:text-5xl text-gray-900 leading-[3.5rem]" data-aos="fade-right">Iluminamos con <br />Arte y Estilo</h2>
                    <p className="text-gray-500 font-family-jost text-lg my-5 w-[87.5%]" data-aos="fade-up">
                        Cada espacio habla de quien lo habita, y la luz es fundamental en esa conversación. Nuestras
                        lámparas, son más que fuentes de luz al utilizar declaraciones de diseño que elevan y definen
                        cada entorno.
                    </p>
                    <div className='flex items-center' data-aos="fade-right">
                        <img src={PHONE} alt="Phone" className='h-16' />
                        <div className='flex flex-col font-family-jost ml-4 text-gray-700'>
                            <span className="font-bold text-lg">+54 9 11 4091-9655</span>
                            <p className='font-normal text-gray-500 text-lg'>Contáctanos cuando quieras</p>
                        </div>
                    </div>
                    <button className="bg-gray-900 mt-5 lg:mt-8 gap-2 font-family-jost text-white font-semibold rounded-2xl py-4 px-5 flex items-center" data-aos="fade-up">
                        Obtener Presupuesto
                        <img src={ARROW_RIGHT} alt="Contact" className='w-3' />
                    </button>
                </div>
                <div className="flex-1 mt-8 lg:mt-0" data-aos="fade-left">
                    <img
                        src={CONTACT_BANNER}
                        alt="Contact banner"
                        className="rounded-tr-[16rem] rounded-bl-[8rem] h-[90%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
