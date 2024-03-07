"use client";

import ColorCircle from '@/components/color-circle';
import { FormatText } from '@/components/format-text';
import HeaderBackground from '@/components/header-background';
import { BG_SHOP_ID, FACEBOOK, GALLERY_SHOP_03, GALLERY_SHOP_04, GALLERY_SHOP_05, INSTAGRAM, STARS, ZOOM_IMAGE } from '@/utils/constants/assets';
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants/social-media';
import { formatPriceARS } from '@/utils/functions';
import Link from 'next/link';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProductPage = () => {
    // Datos ficticios para el producto
    const productID: any = {
        name: 'Lámpara Elegante',
        additionalInformation: 'Una lámpara moderna y elegante para iluminar tu espacio.',
        measurements: [
            { _id: 'm1', measure: 'Pequeña', price: 1000 },
            { _id: 'm2', measure: 'Mediana', price: 2000 },
            { _id: 'm3', measure: 'Grande', price: 3000 },
        ],
        colors: [
            { hex: '#FF6347' },
            { hex: '#7FFFD4' },
            { hex: '#4682B4' },
        ],
        mainImageUrl: 'path_to_main_image',
        _id: 'product123'
    };

    // Valores seleccionados
    const [selectedPrice, setSelectedPrice] = useState(productID.measurements[0].price);
    const [selectedMeasure, setSelectedMeasure] = useState(productID.measurements[0].measure);
    const [selectedColor, setSelectedColor] = useState(productID.colors[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <HeaderBackground
                background={BG_SHOP_ID}
                title="Ilumina tu Espacio Tienda"
                subtitle="Inicio - Tienda - Lámpara"
            />

            <div className='max-w-5xl mx-auto'>
                <div className='flex py-12 mx-auto gap-5'>
                    <div className='w-2/5 h-auto text-xl'>
                        <div className='pb-5 border-b border-gray-200'>
                            <div className="space-y-4 bg-orange-100 p-10 rounded-2xl">
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-28">Categoría</span>
                                    <span className='text-gray-500 font-family-jost'>Interiors</span>
                                </div>
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-28">Etiquetas</span>
                                    <span className='text-gray-500 font-family-jost'>Diseño, Hogar</span>
                                </div>
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-28">Stock</span>
                                    <span className='text-gray-500 font-family-jost'>Disponible ahora</span>
                                </div>
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-28">Link</span>
                                    <span className='text-gray-500 font-family-jost'>http://bibliofe.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex font-family-jost items-center">
                            <h2 className="my-4 text-lg font-medium text-gray-500">Contacto : &nbsp;</h2>
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


                    <div className="w-3/5 font-family-jost pl-4 mx-auto">
                        <div>
                            <h1 className="text-4xl text-gray-900 mb-2">{productID?.name}</h1>
                            {formatPriceARS(selectedPrice) != "0,00" && (
                                <h2 className="text-xl font-family-jost text-gray-500 font-medium mb-4">
                                    $ {formatPriceARS(selectedPrice)}
                                </h2>
                            )}

                            <img src={STARS} alt="Stars" className="w-28 mb-4" />
                            <FormatText text={productID.additionalInformation} />

                            {productID.measurements && productID.measurements.length > 0 && (
                                <div className="flex flex-col gap-2 mt-5">
                                    <h2 className="text-xl text-gray-500 ">Tamaño</h2>
                                    <div className="flex gap-3">
                                        {productID.measurements.map((measure: any) => (
                                            <button
                                                key={measure._id}
                                                className={`py-2 px-3 rounded ${selectedMeasure === measure.measure
                                                    ? "bg-gold-900 text-white transition ease-in-out duration-300"
                                                    : "bg-orange-200 text-black transition ease-in-out duration-300"
                                                    }`}
                                                onClick={() => {
                                                    setSelectedMeasure(measure.measure);
                                                    setSelectedPrice(measure.price);
                                                }}
                                            >
                                                {measure.measure}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {productID.colors &&
                                productID.colors[0] != "#8B4513" &&
                                productID.colors.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-5">
                                        <h2 className="text-xl text-gray-500 ">Color</h2>
                                        <div className="flex gap-3">
                                            {productID.colors.map((color: any, index: number) => (
                                                <ColorCircle
                                                    key={index}
                                                    color={color.hex}
                                                    selected={selectedColor === color}
                                                    onClick={() => setSelectedColor(color)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                            <div className="flex items-center my-7 justify-start gap-4">
                                <div className="flex w-28 h-12 text-gray-900 justify-between rounded-lg border border-gray-300 items-center gap-2 p-2">
                                    <button
                                        // onClick={decrement}
                                        className="px-3 h-full rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center">{quantity}</span>
                                    <button
                                        // onClick={increment}
                                        className="px-3 h-full rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        const hasColorOptions =
                                            Array.isArray(productID.colors) &&
                                            productID.colors.length > 0;
                                        const hasSizeOptions =
                                            Array.isArray(productID.sizes) &&
                                            productID.sizes.length > 0;

                                        const isColorSelected = hasColorOptions
                                            ? selectedColor
                                            : true;
                                        // const isSizeSelected = hasSizeOptions ? selectedSize : true;

                                        // if (isColorSelected && isSizeSelected) {
                                        // addToCart(
                                        //     productID._id,
                                        //     productID.name,
                                        //     selectedPrice,
                                        //     productID.mainImageUrl,
                                        //     quantity,
                                        //     selectedMeasure,
                                        //     selectedColor ? selectedColor.name : null
                                        // );
                                        // setProductAdded(true);
                                        // showAddedToCart();
                                        // } else {
                                        //     const messages = [];
                                        //     if (!isSizeSelected && hasSizeOptions)
                                        //         messages.push("tamaño");
                                        //     if (!isColorSelected && hasColorOptions)
                                        //         messages.push("color");

                                        //     toast.warning(
                                        //         `Selecciona un ${messages.join(
                                        //             " y un "
                                        //         )} antes de añadir al carrito.`,
                                        //         {
                                        //             position: "top-right",
                                        //             autoClose: 5000,
                                        //             hideProgressBar: false,
                                        //             closeOnClick: true,
                                        //             pauseOnHover: true,
                                        //             draggable: true,
                                        //             progress: undefined,
                                        //             theme: "light",
                                        //         }
                                        //     );
                                        // }
                                    }}
                                    className={`bg-green-900 text-lg hover:bg-green-700 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 text-white h-12 w-full`}
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative group mb-24'>
                    <img src={GALLERY_SHOP_03} alt="Descripción" className='w-full h-[40rem] object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:scale-105' />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <img src={ZOOM_IMAGE} alt="Zoom" className="w-40 transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0" />
                    </div>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )
}

export default ProductPage;