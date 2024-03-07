"use client";

import React, { useState } from 'react';
import { ARROW_RIGHT } from '@/utils/constants/assets';

const ContactForm = () => {
    // Estados para almacenar los valores de los inputs
    const [username, setUsername] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const whatsappMessage = `Hola, mi nombre es ${username}. Me pongo en contacto por el motivo de ${reason}. ${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

        const phoneNumber = '5491140919655';

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto my-10" data-aos="fade-up">
            <h2 className="hidden lg:block text-3xl lg:text-4xl text-gray-900 text-center mb-7">¿Lámpara Creativa? Hablemos y<br />hagámoslo realidad.</h2>
            <h2 className="lg:hidden text-3xl lg:text-4xl text-gray-900 text-center mb-7">¿Lámpara Creativa? Hablemos y hagámoslo realidad.</h2>
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
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
