import React from "react";
import Link from "next/link";
import { D_PASTEL_LOGOTYPE, FACEBOOK, INSTAGRAM } from "@/utils/constants/assets";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/utils/constants/social-media";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full mx-auto font-family-jost px-4">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between pb-10">
                <div className="mb-4 lg:mb-0 w-full" data-aos="fade-right">
                    <Link href="/">
                        <img src={D_PASTEL_LOGOTYPE} alt="Logo" data-aos="fade-right" className="h-28" />
                    </Link>
                    <p className="text-gray-500 leading-5 text-center lg:text-left text-xl lg:text-lg">La atención al detalle es lo que<br />define nuestros espacios.</p>

                    <div className="flex gap-4 mt-4 w-full justify-center lg:justify-start">
                        <Link href={FACEBOOK_URL} target='_blank'>
                            <img className="hover-lift h-6" src={FACEBOOK} alt="Facebook Icon" />
                        </Link>
                        <Link href={INSTAGRAM_URL} target="_blank">
                            <img className="hover-lift h-6" src={INSTAGRAM} alt="Instagram Icon" />
                        </Link>
                    </div>
                </div>

                <div data-aos="fade-left" className="flex mt-4 lg:mt-0 lg:w-full justify-between w-3/4 mx-auto gap-16 lg:justify-end lg:gap-8">
                    <div className="md:w-auto lg:mr-10">
                        <p className="text-gray-900 mb-8 text-xl">Enlaces</p>
                        <div className="flex flex-col gap-8 text-gray-500 font-family-jost text-lg">
                            <Link href="/">
                                <span className="navlink">Inicio</span>
                            </Link>
                            <Link href="/shop">
                                <span className="navlink">Tienda</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-auto">
                        <p className="text-gray-900 mb-8 text-xl">Contacto</p>
                        <div className="flex flex-col gap-8 text-gray-500 font-family-jost text-lg">
                            <Link href="/">
                                <span className="navlink">55 Pilar, Argentina</span>
                            </Link>
                            <Link href="/shop">
                                <span className="navlink">d-pastel@gmail.com</span>
                            </Link>
                            <Link href="/shop">
                                <span className="navlink">+54 9 11 4091-9655</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="mb-8 max-w-5xl mx-auto text-center">
                <p className="inline-flex flex-col md:flex-row lg:mt-2 items-center font-family-jost">
                    <span className="font-medium cursor-default">
                        © 2009 - 2024 D-pastel, Iluminando con Estilo.
                    </span>
                    <span className="md:ml-2 mt-2 md:mt-0">
                        Todos los derechos reservados.
                    </span>
                </p>
            </div>

            <div className="border-t py-5">
                <p className="flex font-family-poppins items-center justify-center gap-2 text-center text-gray-700">
                    Desarrollado por
                    <span className="font-semibold">💻 Tomás Rodeghiero.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
