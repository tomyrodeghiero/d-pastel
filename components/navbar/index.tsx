"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { ARGENTINA, ARROW_CIRCLE, ARROW_RIGHT, CLOSE_MENU, DELIVERY_BOX, DROP_RIGHT, D_PASTEL_LOGOTYPE, EMPTY_CART, HISTORY, HOME, HOW_TO_BUY, MENU, SEARCH, SHOPPING_CART, WHATSAPP_CART } from "@/utils/constants/assets";
import { useCart } from "@/context/CartContext";
import { PHONE_NUMBER } from "@/utils/constants/social-media";

export default function Navbar() {
    const [additionalMessage, setAdditionalMessage] = useState<any>("");
    const [discountCode, setDiscountCode] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
    const { cart, removeFromCart } = useCart();

    const applyDiscount = () => {
        if (discountCode === "DESCUENTO10" && !isDiscountApplied && cart.length > 0) {
            setIsDiscountApplied(true);
            setDiscountPercentage(10);
        } else {
            alert("Código inválido, ya aplicado o carrito vacío");
        }
    };

    // Calcular el total con descuento
    const calculateTotalWithDiscount = (cartItems: any) => {
        const total = cartItems.reduce((total: any, currentItem: any) => total + currentItem.price * currentItem.quantity, 0);
        const discountValue = (total * discountPercentage) / 100; // Calcula el valor del descuento
        return total - discountValue; // Resta el valor del descuento del total
    };

    // Luego, usa esta función para calcular el total con descuento solo si el descuento ha sido aplicado
    let totalWithDiscount = 0;
    if (isDiscountApplied) {
        totalWithDiscount = calculateTotalWithDiscount(cart);
    }



    const generateWhatsAppLink = (cartItems: any, additionalMessage = "") => {
        let baseURL = `https://wa.me/${PHONE_NUMBER}`;
        let message = "Hola! Me gustaría realizar el siguiente pedido:\n\n";

        let total = cartItems.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
        let discountValue = isDiscountApplied ? (total * discountPercentage) / 100 : 0;
        let totalWithDiscountValue = total - discountValue;

        cartItems.forEach((item: any, index: number) => {
            message += `${index + 1}. *Producto:* ${item.name}, *Cantidad:* ${item.quantity}, *Precio:* $${item.price}\n`;
        });

        message += `\n*Total:* $${total.toFixed(2)}`;

        if (isDiscountApplied) {
            message += `\n*Descuento (${discountPercentage}%):* -$${discountValue.toFixed(2)}`;
            message += `\n*Total con Descuento:* $${totalWithDiscountValue.toFixed(2)}`;
        }

        if (additionalMessage.trim() !== "") {
            message += `\n\n*Mensaje adicional:* ${additionalMessage}`;
        }

        message = encodeURIComponent(message);

        return `${baseURL}?text=${message}`;
    };

    const toggleCartDrawer = () => {
        setCartDrawerOpen(!cartDrawerOpen);
    };

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
        setCartDrawerOpen(false);
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

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            // Establece overflow a "hidden" si el menú o el carrito están abiertos, de lo contrario a "unset"
            document.body.style.overflow = isOpen || cartDrawerOpen ? "hidden" : "unset";
        }

        // Limpiar el event listener cuando el componente se desmonte o cuando isOpen/cartDrawerOpen cambien
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen, cartDrawerOpen]); // Agregar cartDrawerOpen a las dependencias


    if (isMobile) {
        return (
            <nav className="navbar flex flex-wrap justify-between items-center py-2 lg:py-5 px-4 lg:hidden relative z-50">
                <Link href="/">
                    <img src={D_PASTEL_LOGOTYPE} alt="Logo" data-aos="fade-right" className="h-20" />
                </Link>

                {!isOpen && (
                    <div className="flex gap-4 items-center">
                        <div className="relative cursor-pointer">
                            <img
                                className="h-6"
                                src={SHOPPING_CART}
                                alt="Shopping cart"
                                onClick={toggleCartDrawer}
                            />
                            {cart.length > 0 && (
                                <div className="absolute top-[0.7rem] left-[0.7rem] text-[0.9rem] h-5 w-5 rounded-full border border-yellow-900 bg-gold-500 flex items-center justify-center text-white shadow">
                                    {cart.length}
                                </div>
                            )}
                        </div>
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
                                <img src={D_PASTEL_LOGOTYPE} alt="Logo" data-aos="fade-right" className="h-20" />
                            </Link>
                            <div className="flex items-center gap-4">
                                <div className="relative cursor-pointer mt-[-0.3rem] mr-3">
                                    <img
                                        className="h-6"
                                        src={SHOPPING_CART}
                                        alt="Shopping cart"
                                        onClick={toggleCartDrawer}
                                    />
                                    {cart.length > 0 && (
                                        <div className="absolute top-[0.7rem] left-[0.7rem] text-[0.9rem] h-5 w-5 rounded-full border border-yellow-900 bg-gold-500 flex items-center justify-center text-white shadow">
                                            {cart.length}
                                        </div>
                                    )}
                                </div>
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
                                <h1 className="text-2xl mb-6 text-gray-900">Navegación</h1>
                                <img className="h-6 cursor-pointer" src={ARGENTINA} alt="Argenetina" />
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="flex justify-between border-b border-gray-400 py-7 items-center"
                                    onClick={(event) => handleLinkClick(event, "/")}
                                >
                                    <div className="flex gap-4">
                                        <img className="h-6 cursor-pointer" src={HOME} alt="Home" />
                                        <h2 className="text-xl">Inicio</h2>
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
                                        <img className="h-6 cursor-pointer" src={DELIVERY_BOX} alt="About" />
                                        <h2 className="text-xl">Tienda</h2>
                                    </div>
                                    <img
                                        className="h-4 cursor-pointer"
                                        src={DROP_RIGHT}
                                        alt="Drop right"
                                    />
                                </div>
                                <div
                                    className="flex justify-between border-b border-gray-400 py-7 items-center"
                                    onClick={(event) => handleLinkClick(event, "/how-to-buy")}
                                >
                                    <div className="flex gap-4">
                                        <img className="h-6 cursor-pointer" src={HOW_TO_BUY} alt="About" />
                                        <h2 className="text-xl">¿Cómo comprar?</h2>
                                    </div>
                                    <img
                                        className="h-4 cursor-pointer"
                                        src={DROP_RIGHT}
                                        alt="Drop right"
                                    />
                                </div>
                                <div
                                    className="flex justify-between border-b border-gray-400 py-7 items-center"
                                    onClick={(event) => handleLinkClick(event, "/about")}
                                >
                                    <div className="flex gap-4">
                                        <img className="h-6 cursor-pointer" src={HISTORY} alt="History" />
                                        <h2 className="text-xl">Nuestra Historia</h2>
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

                {cartDrawerOpen && (
                    <>
                        <div className="overlay" onClick={toggleCartDrawer}></div>
                        <div className="fixed z-50 border-l border-black font-family-jost top-0 right-0 w-[90%] h-full shadow-lg bg-white overflow-y-auto">
                            <div className="relative h-full">
                                <div className="relative h-full">
                                    <div className="flex justify-between items-center border-b p-4">
                                        <h2 className="text-xl font-medium">Carrito de Compras</h2>
                                        <img
                                            className="h-4 cursor-pointer"
                                            src={CLOSE_MENU}
                                            alt="Close Menu"
                                            onClick={toggleCartDrawer}
                                        />
                                    </div>

                                    {/* Map over the cart items here */}
                                    {cart.length > 0 ? <div className="px-4">
                                        {cart.map((item: any, index: number) => (
                                            <div key={index} className="flex mt-4 justify-between items-center border-b pb-4">
                                                <img
                                                    src={item.mainImageUrl}
                                                    alt={item.name}
                                                    className="w-20 h-20 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <span className="text-lg font-bold">{item.name}</span>
                                                    <span>Cantidad ({item.quantity})</span>
                                                    <span className="font-bold">${item.price}</span>
                                                </div>
                                                <button className="underline" onClick={() => removeFromCart(item.productId)}>
                                                    Remover
                                                </button>
                                            </div>
                                        ))}

                                        <div className="flex justify-between items-center border-b py-4">
                                            <span className="text-lg">Total</span>
                                            <span className="text-lg font-bold">
                                                ${cart.reduce((total: any, currentItem: any) => total + currentItem.price * currentItem.quantity, 0).toFixed(2)}
                                            </span>
                                        </div>

                                        <div className="my-4">
                                            <label htmlFor="additionalMessage" className="block mb-2 font-medium text-gray-900">Mensaje adicional antes de la compra</label>
                                            <textarea
                                                id="additionalMessage"
                                                rows={5}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Si tienes algo más que quieras decirnos, por favor, escribe tu mensaje aquí..."
                                                value={additionalMessage}
                                                onChange={(e) => setAdditionalMessage(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            Ofrecemos envío estándar gratuito a nivel nacional.
                                        </div>

                                    </div> : <div className="h-3/4 flex items-center">
                                        <div className="flex-col w-full justify-center text-center items-center">
                                            <img className="h-80 w-full" src={EMPTY_CART} alt="Empty cart" />
                                            <h1 className="mt-8 text-[1.5rem]">Su Carrito está Vacío</h1>
                                            <p className="font-medium text-gray-500 mt-4">
                                                Parece que aún no has añadido Productos a tu Carrito
                                            </p>

                                            <Link href="/shop" className="w-full flex justify-center items-center mt-8">
                                                <button onClick={() => setCartDrawerOpen(false)} className="bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-6 py-3">
                                                    Ir a la Tienda
                                                </button>
                                            </Link>
                                        </div>
                                    </div>}

                                    <Link
                                        href={generateWhatsAppLink(cart)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full cursor-pointer flex gap-3 justify-center items-center absolute bottom-0 bg-green-700 text-white py-4"
                                    >
                                        <Image
                                            alt="WhatsApp"
                                            src={WHATSAPP_CART}
                                            width={30}
                                            height={30}
                                        />
                                        <h2 className="font-medium text-lg">Comprar por WhatsApp</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        );
    }

    return (
        <nav className="navbar flex justify-between items-center px-40 my-4 bg-white">
            <Link href="/">
                <img src={D_PASTEL_LOGOTYPE} alt="Logo" data-aos="fade-right" className="h-28" />
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
                <Link href="/how-to-buy" className="navlink">
                    Cómo comprar
                </Link>
                <Link href="/contact" className="navlink">
                    Contacto
                </Link>

                <div className="space-x-5 flex items-center">
                    {/* <img src={SEARCH} alt="Search" onClick={() => setSearchOpen(true)} className="h-5 cursor-pointer" /> */}

                    <div className="relative cursor-pointer">
                        <img
                            className="h-6"
                            src={SHOPPING_CART}
                            alt="Shopping cart"
                            onClick={toggleCartDrawer}
                        />
                        {cart.length > 0 && (
                            <div className="absolute top-[0.7rem] left-[0.7rem] text-[0.9rem] h-5 w-5 rounded-full border border-yellow-900 bg-gold-500 flex items-center justify-center text-white shadow">
                                {cart.length}
                            </div>
                        )}
                    </div>

                    <img src={ARGENTINA} alt="Argentina Flag" className="h-6" />
                </div>
            </div>

            {searchOpen && (
                <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
                    <div className="bg-white w-full py-8 px-10 flex justify-between items-center">
                        <Link href="/">
                            <img src={D_PASTEL_LOGOTYPE} alt="Logo" data-aos="fade-right" className="h-28" />
                        </Link>
                        <h5
                            data-aos="fade-left"
                            className="text-xl hover:underline cursor-pointer"
                            onClick={() => setSearchOpen(false)}
                        >
                            Cerrar
                        </h5>
                    </div>
                    <div className="bg-white w-full top-0 pb-8 px-10 flex gap-5 items-center">
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

            {cartDrawerOpen && (
                <>
                    <div className="overlay" onClick={toggleCartDrawer}></div>
                    <div className="fixed bottom-0 z-50 border-l border-black font-family-jost top-0 right-0 w-[28rem] h-screen shadow-lg bg-white overflow-y-auto">
                        <div className="relative h-screen">
                            <div className="relative h-screen">
                                <div className="flex justify-between items-center border-b p-4">
                                    <h2 className="text-xl font-medium">Carrito de Compras</h2>
                                    <img
                                        className="h-4 cursor-pointer"
                                        src={CLOSE_MENU}
                                        alt="Close Menu"
                                        onClick={toggleCartDrawer}
                                    />
                                </div>

                                {/* Map over the cart items here */}
                                {cart.length > 0 ? <div className="px-4">
                                    {cart.map((item: any, index: number) => (
                                        <div key={index} className="flex mt-4 justify-between items-center border-b pb-4">
                                            <img
                                                src={item.mainImageUrl}
                                                alt={item.name}
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className="text-lg font-bold">{item.name}</span>
                                                <span>Cantidad ({item.quantity})</span>
                                                <span className="font-bold">${item.price}</span>
                                            </div>
                                            <button className="underline" onClick={() => removeFromCart(item.productId)}>
                                                Remover
                                            </button>
                                        </div>
                                    ))}

                                    <div className="flex justify-between items-center border-b py-4">
                                        <span className="text-lg">Total</span>
                                        <span className="text-lg font-bold">
                                            ${cart.reduce((total: any, currentItem: any) => total + currentItem.price * currentItem.quantity, 0).toFixed(2)}
                                        </span>
                                    </div>

                                    {isDiscountApplied && (
                                        <>
                                            <div className="flex justify-between items-center py-4">
                                                <span className="text-lg">Descuento (10%)</span>
                                                <span className="text-lg font-bold">-${((cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0) * discountPercentage) / 100).toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-t py-4">
                                                <span className="text-lg">Total con Descuento</span>
                                                <span className="text-lg font-bold">${totalWithDiscount.toFixed(2)}</span>
                                            </div>
                                        </>
                                    )}

                                    <div className="my-4">
                                        <label htmlFor="additionalMessage" className="block mb-2 text-sm font-medium text-gray-900">Mensaje adicional antes de la compra</label>
                                        <textarea
                                            id="additionalMessage"
                                            rows={5}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Si tienes algo más que quieras decirnos, por favor, escribe tu mensaje aquí..."
                                            value={additionalMessage}
                                            onChange={(e) => setAdditionalMessage(e.target.value)}
                                        />
                                    </div>

                                    <div className="text-sm mb-4">
                                        Ofrecemos envío estándar gratuito a nivel nacional.
                                    </div>

                                </div> : <div className="h-3/4 flex items-center">
                                    <div className="flex-col w-full justify-center text-center items-center">
                                        <img className="h-80 w-full" src={EMPTY_CART} alt="Empty cart" />
                                        <h1 className="mt-8 text-[1.5rem]">Su Carrito está Vacío</h1>
                                        <p className="font-medium text-gray-500 mt-4">
                                            Parece que aún no has añadido Productos a tu Carrito
                                        </p>

                                        <div className="w-full flex justify-center items-center mt-8">
                                            <button onClick={() => setCartDrawerOpen(false)} className="bg-green-900 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 rounded-[40px] text-white px-6 py-3">
                                                Ir a la Tienda
                                            </button>
                                        </div>
                                    </div>
                                </div>}

                                {/* Input para el cupón de descuento */}
                                {cart.length > 0 && <div className="flex px-4">
                                    <input
                                        type="text"
                                        className="p-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-lg flex-1"
                                        placeholder="Cupón de Descuento"
                                        value={discountCode}
                                        onChange={(e) => setDiscountCode(e.target.value)}
                                    />
                                    <button
                                        onClick={applyDiscount}
                                        className="bg-black text-white px-6 py-2 rounded-r-lg border-t border-b border-r border-gray-300"
                                    >
                                        Aplicar
                                    </button>
                                </div>}


                                <Link
                                    href={generateWhatsAppLink(cart)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full cursor-pointer flex gap-3 justify-center items-center absolute bottom-0 bg-green-700 text-white py-4"
                                >
                                    <Image
                                        alt="WhatsApp"
                                        src={WHATSAPP_CART}
                                        width={30}
                                        height={30}
                                    />
                                    <h2 className="font-medium text-lg">Comprar por WhatsApp</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </nav >
    );
}