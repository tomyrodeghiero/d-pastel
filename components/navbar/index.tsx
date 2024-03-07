"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { ARGENTINA, CLOSE_MENU, DROP_RIGHT, D_PASTEL_LOGOTYPE, HOME, MENU, SEARCH } from "@/utils/constants/assets";

export default function Navbar() {
    const router = useRouter();

    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = (e: any) => {
        e.preventDefault();
        router.push(`/shop?search=${searchQuery}`);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            handleSearch(e);
        }
    };

    const [isMobile, setMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : false
    );
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (e: any, href: string) => {
        e.preventDefault();

        if (isMobile) {
            setIsOpen(false);
        }

        router.push(href);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", () => {
                setMobile(window.innerWidth < 768);
            });
            isOpen
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset");
        }
    }, [isOpen]);

    if (isMobile) {
        return (
            <nav className="navbar flex flex-wrap justify-between items-center py-5 px-4 lg:hidden relative z-50">
                <Link href="/">
                    <img className="h-8" src={D_PASTEL_LOGOTYPE} alt="D-pastel" />
                </Link>

                {!isOpen && (
                    <div className="flex gap-4 items-center">
                        <img className="h-4" src={MENU} alt="Menu" onClick={toggleMenu} />
                    </div>
                )}

                <div
                    className={`fixed top-0 left-0 w-full h-full bg-white transition-transform transform ease-in-out duration-300 ${isOpen ? "translate-y-0" : "translate-y-full"
                        } flex flex-col justify-between space-y-4 z-40 p-5 overflow-auto`}
                >
                    <div>
                        <div className="flex justify-between items-center">
                            <Link href="/">
                                <img className="h-8" src={D_PASTEL_LOGOTYPE} alt="Sophilum" />
                            </Link>
                            <div className="flex items-center gap-4">
                                <div onClick={toggleMenu}>
                                    <img
                                        className="h-5 cursor-pointer"
                                        src={CLOSE_MENU}
                                        alt="Close Menu"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            <div className="flex justify-between">
                                <h1 className="text-xl mb-6">Navegación</h1>
                                <img className="h-6 cursor-pointer" src={ARGENTINA} alt="Argenetina" />
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="flex justify-between border-b border-gray-400 py-7 items-center"
                                    onClick={(event) => handleLinkClick(event, "/")}
                                >
                                    <div className="flex gap-4">
                                        <img className="h-6 cursor-pointer" src={HOME} alt="Home" />
                                        <h2 className="text-xl">Home</h2>
                                    </div>
                                    <img
                                        className="h-4 cursor-pointer"
                                        src={DROP_RIGHT}
                                        alt="Drop right"
                                    />
                                </div>
                                <div
                                    className="flex justify-between border-b border-gray-400 py-7 items-center"
                                    onClick={(event) => handleLinkClick(event, "/shop")}
                                >
                                    <div className="flex gap-4">
                                        <h2 className="text-xl">Tienda</h2>
                                    </div>
                                    <img
                                        className="h-4 cursor-pointer"
                                        src={DROP_RIGHT}
                                        alt="Drop right"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={(e) => handleLinkClick(e, "/contact")}
                        className="bg-white border py-3 text-[0.85rem] font-medium px-10 border-black rounded mt-12 uppercase"
                    >
                        Contacto
                    </button>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar flex justify-between items-center px-40 my-4 bg-white">
            <Link href="/">
                <Image src={D_PASTEL_LOGOTYPE} alt="Logo" data-aos="fade-right" width={80} height={80} />
            </Link>

            <div className="space-x-12 flex font-normal text-xl items-center" data-aos="fade-left">
                <Link href="/" className="navlink">
                    Inicio
                </Link>
                <Link href="/shop" className="navlink">
                    Tienda
                </Link>
                <Link href="/about" className="navlink">
                    Nosotros
                </Link>
                <Link href="/contact" className="navlink">
                    Contacto
                </Link>

                <div className="space-x-5 flex items-center">
                    <img src={SEARCH} alt="Search" onClick={() => setSearchOpen(true)} className="h-5 cursor-pointer" />
                    <img src={ARGENTINA} alt="Argentina Flag" className="h-6" />
                </div>
            </div>

            {searchOpen && (
                <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
                    <div className="bg-white w-full py-8 px-10 flex justify-between items-center">
                        <Link href="/">
                            <img
                                className="h-20"
                                src={D_PASTEL_LOGOTYPE}
                                alt="D-pastel Logotype"
                            />
                        </Link>
                        <h5
                            className="text-xl hover:underline cursor-pointer"
                            onClick={() => setSearchOpen(false)}
                        >
                            Cerrar
                        </h5>
                    </div>
                    <div className="bg-white w-full top-0 py-8 px-10 flex gap-5 items-center">
                        <input
                            type="text"
                            className="w-4/5 border border-black p-3"
                            placeholder="Buscar"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            onClick={handleSearch}
                            className="w-1/5 border border-black p-3 hover:bg-black hover:text-white"
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}