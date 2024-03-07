"use client";

import BiographySection from '@/components/biography-section';
import ContactForm from '@/components/contact-form'
import HeaderBackground from '@/components/header-background'
import { BG_CONTACT, CONTACT, EMAIL, FACEBOOK, INSTAGRAM, PHONE, WORLD } from '@/utils/constants/assets'
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE_NUMBER } from '@/utils/constants/social-media'
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
    const handleClickToWhatsApp = () => {
        window.open(
            `https://wa.me/${PHONE_NUMBER}`,
            "_blank"
        );
    };

    return (
        <>
            <HeaderBackground
                background={BG_CONTACT}
                title="Contáctanos"
                subtitle="Inicio - Contacto"
            />
            <div className='max-w-5xl mx-auto'>
                <div className='flex gap-5 py-14'>
                    <div className='flex w-1/2 mx-auto gap-5'>
                        <img src={CONTACT} className='h-full w-full object-cover rounded-3xl' />
                    </div>


                    <div className="w-1/2 pl-4 mx-auto">
                        <h1 className="text-gray-900 text-4xl">Irene Arias</h1>
                        <h2 className="text-gray-700 text-xl font-family-jost">Diseñadora de Interiores</h2>
                        <p className="text-gray-500 font-family-jost mt-2 text-lg leading-[1.7rem]">
                            Inspirada por la belleza y la funcionalidad, Irene Arias trae una perspectiva única al mundo del diseño de interiores. Con un enfoque en la creación de espacios que no solo son estéticamente agradables sino también profundamente personales, Irene y su equipo en D-pastel se dedican a transformar cualquier ambiente en un refugio de inspiración y confort.
                        </p>
                        <div className="flex flex-col mt-6 space-y-4">
                            <Link href="mailto:d-pastel@gmail.com" className="text-lg flex gap-4 font-family-jost items-center text-gray-500">
                                <img src={EMAIL} alt="E-mail" className='h-10' />
                                d-pastel@gmail.com
                            </Link>
                            <div onClick={handleClickToWhatsApp} className="text-lg flex gap-4 font-family-jost items-center text-gray-500">
                                <img src={PHONE} alt="Phone" className='h-10' />
                                +54 9 11 4091-9655
                            </div>
                            <div onClick={handleClickToWhatsApp} className="text-lg flex gap-4 font-family-jost items-center text-gray-500">
                                <img src={WORLD} alt="World" className='h-10' />
                                www.d-pastel.com
                            </div>
                        </div>
                        <div className="flex font-family-jost items-center mt-6">
                            <Link href={FACEBOOK_URL}>
                                <img
                                    className="hover-lift h-4 mx-2"
                                    src={FACEBOOK}
                                    alt="Facebook Icon"
                                />
                            </Link>
                            <Link href={INSTAGRAM_URL}>
                                <img
                                    className="hover-lift h-4 mx-2"
                                    src={INSTAGRAM}
                                    alt="Instagram Icon"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <BiographySection />
                <ContactForm />
            </div>
        </>
    )
}

export default ContactPage;