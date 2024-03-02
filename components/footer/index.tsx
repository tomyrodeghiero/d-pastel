import React from "react";
import Link from "next/link";
import { ARROW_RIGHT, D_PASTEL_LOGOTYPE, FACEBOOK, INSTAGRAM } from "@/utils/constants/assets";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/utils/constants/social-media";

const Footer = () => {
    return (
        <footer className="w-full mx-auto">
            <div className="max-w-5xl mx-auto flex justify-between pb-10">
                <div className="mb-8 md:mb-0">
                    <Link href="/">
                        <img className="h-20" src={D_PASTEL_LOGOTYPE} alt="D-pastel" />
                    </Link>
                    <p className="font-family-jost text-gray-500 leading-5 w-[65%]">La atención al detalle es lo que define nuestros espacios.</p>

                    <div className="flex gap-4 mt-4">
                        <Link href={FACEBOOK_URL}>
                            <img className="hover-lift h-5" src={FACEBOOK} alt="Icon 2" />
                        </Link>
                        <Link href={INSTAGRAM_URL} target="_blank">
                            <img className="hover-lift h-5" src={INSTAGRAM} alt="Icon 2" />
                        </Link>
                    </div>
                </div>

                <div className="flex w-full justify-end gap-8 lg:flex">
                    <div className="w-1/2 md:w-auto mr-10">
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

                    <div className="w-1/2 md:w-auto">
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

            <div className="mb-8 max-w-5xl mx-auto border-t border-gray-300">
                <p className="inline-flex flex-col md:flex-row mt-2 items-start md:items-center font-family-jost">
                    <span className="font-medium cursor-default">
                        © 1989 - 2024 D-pastel, Iluminando con Estilo.
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
