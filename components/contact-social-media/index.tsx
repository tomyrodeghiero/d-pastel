"use client";

import React from 'react';
import { ARROW_RIGHT } from '@/utils/constants/assets';

const ContactSocialMedia = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto my-10">
            <h2 className="text-3xl lg:text-4xl text-gray-900 text-center mb-7">Amamos conocer nuevas personas para iluminar sus espacios</h2>
            <div className="flex flex-wrap -mx-3 mb-6 w-full font-family-jost">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <div className="relative">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Nombre"
                            className="border-b-2 placeholder-gray-500 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none bg-inherit w-full"
                            required
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <div className="relative">
                        <input
                            id="reason"
                            name="reason"
                            type="text"
                            placeholder="Motivo"
                            className="border-b-2 placeholder-gray-500 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none bg-inherit w-full"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 font-family-jost">
                <div className="w-full px-3">
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="border-b-2 placeholder-gray-500 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none bg-inherit w-full resize-none"
                            placeholder="Hola, quisiera consultarles acerca de ..."
                            required
                        ></textarea>
                    </div>
                </div>
            </div>
            <button className="bg-gray-900 mx-auto mt-8 gap-2 font-family-jost text-white font-semibold rounded-2xl py-3 px-8 flex items-center">
                Enviar
                <img src={ARROW_RIGHT} alt="Contact" className='w-3' />
            </button>
        </form>
    );
}

export default ContactSocialMedia;
