"use client";

import { ARROW_RIGHT } from '@/utils/constants/assets';
import React from 'react';

const ContactForm = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto my-10">
            <h2 className="text-3xl text-gray-900 text-center mb-7">¿Lámpara Creativa? Hablemos y<br />hagámoslo realidad.</h2>
            <div className="flex flex-wrap -mx-3 mb-6 w-full font-family-jost">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <div className="relative">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none peer bg-inherit w-full"
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-gray-900"
                        >
                            Nombre
                        </label>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <div className="relative">
                        <input
                            id="reason"
                            name="reason"
                            type="text"
                            className="border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none peer bg-inherit w-full"
                        />
                        <label
                            htmlFor="reason"
                            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-gray-900"
                        >
                            Motivo
                        </label>
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
                            className="border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none peer bg-inherit w-full resize-none"
                            placeholder=" "
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-gray-900"
                        >
                            Mensaje
                        </label>
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

export default ContactForm;
