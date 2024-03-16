"use client";

import BiographySection from '@/components/biography-section';
import ContactSocialMedia from '@/components/contact-social-media';
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
                <div className='flex flex-col p-4 lg:p-0 lg:pt-16 lg:flex-row gap-5 lg:py-14'>
                    <div className='flex w-full lg:w-1/2 mx-auto gap-5'>
                        <img data-aos="fade-right" src={CONTACT} className='h-3/4 lg:h-full w-full object-cover rounded-3xl' />
                    </div>


                    <div className="w-full lg:w-1/2 lg:pl-4 mx-auto" data-aos="fade-left">
                        <h1 className="text-gray-900 text-4xl">Irene Arias</h1>
                        <h2 className="text-gray-700 text-xl font-family-jost">Diseñadora de Interiores</h2>
                        <p className="text-gray-500 font-family-jost mt-2 text-lg leading-[1.7rem]">
                            Inspirada por la belleza y la funcionalidad, Irene Arias trae una perspectiva única al mundo del diseño de interiores. Con un enfoque en la creación de espacios que no solo son estéticamente agradables sino también profundamente personales, Irene y su equipo en D-pastel se dedican a transformar cualquier ambiente en un refugio de inspiración y confort.
                        </p>
                        <div className="hidden lg:flex flex-col mt-6 space-y-4">
                            <Link href="mailto:infod.pastel@gmail.com" className="text-lg flex gap-4 font-family-jost items-center text-gray-500">
                                <img src={EMAIL} alt="E-mail" className='h-10' />
                                infod.pastel@gmail.com
                            </Link>
                            <div onClick={handleClickToWhatsApp} className="text-lg cursor-pointer flex gap-4 font-family-jost items-center text-gray-500">
                                <img src={PHONE} alt="Phone" className='h-10' />
                                +54 9 11 4091-9655
                            </div>
                            <div onClick={handleClickToWhatsApp} className="text-lg flex gap-4 font-family-jost items-center text-gray-500">
                                <img src={WORLD} alt="World" className='h-10' />
                                https://www.artedpastel.com
                            </div>
                        </div>
                        <div className="hidden lg:flex font-family-jost items-center mt-6">
                            <Link href={FACEBOOK_URL} target='_blank'>
                                <img
                                    className="hover-lift h-4 mx-2"
                                    src={FACEBOOK}
                                    alt="Facebook Icon"
                                />
                            </Link>
                            <Link href={INSTAGRAM_URL} target='_blank'>
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
                <ContactSocialMedia />
                <div data-aos="fade-up" className="w-full h-[27.5rem] p-4 lg:p-0 border-none rounded-3xl mb-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105227.70992317649!2d-58.91690824999999!3d-34.49360605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9cb6643d2003%3A0xa8da0402f634b636!2sPilar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1709808253490!5m2!1ses-419!2sar" width="600" height="450" loading="lazy"
                        className='rounded-3xl w-full h-full'
                    />
                </div>
            </div>
        </>
    )
}

export default ContactPage;