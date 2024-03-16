"use client";

import React, { useState } from 'react';
import { ARROW_RIGHT, EMAIL_WHITE, FACEBOOK, INSTAGRAM, PHONE_WHITE, WORLD_WHITE } from '@/utils/constants/assets';
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants/social-media';
import Link from 'next/link';
import { handleClickToWhatsApp } from '@/utils/functions';

const ContactSocialMedia = () => {
    const [username, setUsername] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        // Construye el mensaje
        const whatsappMessage = `Hola! Mi nombre es ${username}. Me pongo en contacto por el motivo de ${reason}. ${message}`;

        // Codifica el mensaje para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Cambia el número al que quieras enviar el mensaje
        const phoneNumber = '5491140919655';

        // Abre el enlace de WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };


    return (
        <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto my-4 lg:my-10" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl text-gray-900 text-center mb-7">Amamos conocer nuevas personas<br />para iluminar sus espacios</h2>

            <div className='flex flex-col lg:flex-row w-full p-4 lg:p-0'>
                <div className='w-full lg:w-3/5 h-auto text-xl order-last lg:order-none'>
                    <div className='h-full items-center'>
                        <div className="space-y-4 bg-orange-100 py-8 mt-7 lg:mt-0 flex px-2 h-full items-center rounded-2xl">
                            <div className="flex flex-col space-y-4 items-center">
                                <Link href="mailto:infod.pastel@gmail.com" className="text-lg flex gap-4 w-full pl-4 lg:pl-8 font-family-jost items-center text-gray-500">
                                    <img src={EMAIL_WHITE} alt="E-mail" className='h-10' />
                                    infod.pastel@gmail.com
                                </Link>
                                <div onClick={handleClickToWhatsApp} className="text-lg flex gap-4 w-full pl-4 lg:pl-8 font-family-jost items-center text-gray-500">
                                    <img src={PHONE_WHITE} alt="Phone" className='h-10' />
                                    +54 9 11 4091-9655
                                </div>
                                <div onClick={handleClickToWhatsApp} className="text-lg flex gap-4 w-full pl-4 lg:pl-8 font-family-jost items-center text-gray-500">
                                    <img src={WORLD_WHITE} alt="World" className='h-10' />
                                    https://www.artedpastel.com
                                </div>
                                <div className='flex flex-start pl-4 lg:pl-8 pt-4 w-full'>
                                    <Link href={FACEBOOK_URL} target='_blank'>
                                        <img
                                            className="hover-lift h-5 mx-2"
                                            src={FACEBOOK}
                                            alt="Facebook Icon"
                                        />
                                    </Link>
                                    <Link href={INSTAGRAM_URL} target='_blank'>
                                        <img
                                            className="hover-lift h-5 mx-2"
                                            src={INSTAGRAM}
                                            alt="Instagram Icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full lg:ml-10'>
                    <div className="flex flex-wrap -mx-3 mb-6 w-full font-family-jost">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <div className="relative">
                                <input
                                    className="border-b-2 placeholder-gray-500 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none bg-inherit w-full"
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Nombre"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <div className="relative">
                                <input
                                    className="border-b-2 placeholder-gray-500 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none bg-inherit w-full"
                                    id="reason"
                                    name="reason"
                                    type="text"
                                    placeholder="Motivo"
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
                                    className="border-b-2 placeholder-gray-500 border-gray-300 py-1 focus:border-b-2 focus:border-gold-500 transition-colors focus:outline-none bg-inherit w-full resize-none"
                                    name="message"
                                    rows={5}
                                    placeholder="Hola, quisiera consultarles acerca de ..."
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-end'>
                        <button className="bg-gray-900 mx-auto lg:mx-0 lg:mt-8 gap-2 font-family-jost text-white font-semibold rounded-2xl py-3 px-8 flex items-center">
                            Enviar
                            <img src={ARROW_RIGHT} alt="Contact" className='w-3' />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ContactSocialMedia;
