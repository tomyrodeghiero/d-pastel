"use client";

import ColorCircle from '@/components/color-circle';
import { FormatText } from '@/components/format-text';
import HeaderBackground from '@/components/header-background';
import { useCart } from '@/context/CartContext';
import { BG_SHOP_ID, FACEBOOK, GALLERY_SHOP_03, GALLERY_SHOP_04, GALLERY_SHOP_05, INSTAGRAM, STARS, ZOOM_IMAGE } from '@/utils/constants/assets';
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants/social-media';
import { formatPriceARS } from '@/utils/functions';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ProductPage = ({ params }: { params: { id: string } }) => {
    const [productAdded, setProductAdded] = useState(false);
    const [stock, setStock] = useState<number>(1);
    const [product, setProduct] = useState<any>(null)
    const [selectedMeasure, setSelectedMeasure] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedColor, setSelectedColor] = useState<any>({});
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const decrement = () => quantity > 1 && setQuantity(quantity - 1);
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            toast.warning(
                `No hay más stock de este producto. Solo quedan ${stock} unidades.`,
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }
    };

    const showAddedToCart = () => {
        return toast.success(
            `El Producto ${product.name} ha sido añadido a su carrito! 🛍️`,
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            }
        );
    };

    async function getProductID(): Promise<any> {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await fetch(`/api/product/${params.id}`, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else if (
                !response.headers.get("Content-Type")?.includes("application/json")
            ) {
                throw new Error(
                    `Invalid content type. Expected application/json but received ${response.headers.get(
                        "Content-Type"
                    )}`
                );
            }

            const productDB = await response.json();

            if (productDB.mainImageUrl && productDB.mainImageUrl.startsWith('blob:')) {
                try {
                    const response = await fetch(productDB.mainImageUrl);
                    const blob = await response.blob();
                    productDB.mainImageUrl = URL.createObjectURL(blob);
                } catch (error) {
                    console.error("Error al convertir blob URL:", error);
                }
            }

            setProduct(productDB);
            setStock(productDB.stock);

            setProduct(productDB);
            setStock(productDB.stock);

            if (productDB) {
                const { measurements, colors } = productDB;
                setSelectedMeasure(measurements[0].measure);
                setSelectedPrice(measurements[0].price);
                setSelectedColor(colors[0]);
            }

            // Parse the color data if it exists
            if (productDB.colors && Array.isArray(productDB.colors)) {
                const parsedColors = productDB.colors.map((color: any) => {
                    try {
                        return JSON.parse(color);
                    } catch (e) {
                        console.error("Failed to parse color:", color, e);
                        return color;
                    }
                });

                productDB.colors = parsedColors;
            }

        } catch (error) {
            console.error("error", error);
            throw error;
        }
    }

    useEffect(() => {
        getProductID();

        return () => {
            if (product && product.mainImageUrl && product.mainImageUrl.startsWith('blob:')) {
                URL.revokeObjectURL(product.mainImageUrl);
            }
        };
    }, []);

    return (
        <>
            <HeaderBackground
                background={BG_SHOP_ID}
                title="Ilumina tu Espacio"
                subtitle="Inicio - Tienda - Lámpara"
            />

            <div className='max-w-5xl mx-auto'>
                <div className='flex px-5 lg:px-0 flex-col-reverse lg:flex-row py-12 mx-auto gap-5'>
                    <div className='w-full lg:w-2/5 h-auto text-xl order-last lg:order-none' data-aos="fade-right">
                        <div className='pb-5 border-b border-gray-200'>
                            <div className="space-y-4 bg-orange-100 p-10 rounded-2xl">
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-32">Categoría</span>
                                    <span className='text-gray-500 font-family-jost'>{product?.category}</span>
                                </div>
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-32">Tono de Luz</span>
                                    <span className='text-gray-500 font-family-jost'>{product?.lightTone}</span>
                                </div>
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-32">Stock</span>
                                    <span className='text-gray-500 font-family-jost'>{stock > 0 ? "Disponible ahora" : "Agotado"}</span>
                                </div>
                                <div className="flex text-gray-900">
                                    <span className="font-medium w-32">Tienda</span>
                                    <span className='text-gray-500 font-family-jost'>artedpastel.com</span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="flex font-family-jost items-center">
                            <h2 className="my-4 text-lg font-medium text-gray-500">Contacto : &nbsp;</h2>
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

                    <div className="w-full lg:w-3/5 font-family-jost lg:pl-5 mx-auto order-first lg:order-none" data-aos="fade-left">
                        <div>
                            <h1 className="text-4xl text-gray-900 mb-2">{product?.name}</h1>
                            {formatPriceARS(selectedPrice) != "0,00" && (
                                <h2 className="text-xl font-family-jost text-gray-500 font-medium mb-4">
                                    $ {formatPriceARS(selectedPrice)}
                                </h2>
                            )}

                            <p dangerouslySetInnerHTML={{ __html: product?.description }} />

                            <img src={STARS} alt="Stars" className="w-28 my-4" />

                            {product?.measurements && product.measurements?.length > 0 && (
                                <div className="flex flex-col gap-2 mt-5">
                                    <h2 className="text-xl text-gray-500 ">Tamaño</h2>
                                    <div className="flex gap-3">
                                        {product.measurements.map((measure: any) => (
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

                            {product?.colors &&
                                product?.colors[0] != "#8B4513" &&
                                product.colors?.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-5">
                                        <h2 className="text-xl text-gray-500 ">Color</h2>
                                        <div className="flex gap-3">
                                            {product.colors.map((color: any, index: number) => (
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

                            <div data-aos="fade-up" className="flex items-center my-7 justify-start gap-4">
                                <div className="flex w-28 h-12 text-gray-900 justify-between rounded-lg border border-gray-300 items-center gap-2 p-2">
                                    <button
                                        onClick={decrement}
                                        disabled={quantity === 1}
                                        className="px-3 h-full rounded hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center">{quantity}</span>
                                    <button
                                        onClick={increment}
                                        className="px-3 h-full rounded hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        const isColorSelected = selectedColor && selectedColor.hex ? true : false;
                                        const isSizeSelected = selectedMeasure ? true : false;

                                        if (isColorSelected && isSizeSelected) {
                                            addToCart(
                                                product._id,
                                                product.name,
                                                selectedPrice,
                                                product.mainImageUrl,
                                                quantity,
                                                selectedMeasure,
                                                selectedColor.name,
                                                selectedMeasure
                                            );
                                            setProductAdded(true);
                                            showAddedToCart();
                                        } else {
                                            const messages = [];
                                            if (!isSizeSelected)
                                                messages.push("tamaño");
                                            if (!isColorSelected)
                                                messages.push("color");

                                            toast.warning(
                                                `Selecciona un ${messages.join(" y un ")} antes de añadir al carrito.`,
                                                {
                                                    position: "top-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                }
                                            );
                                        }
                                    }}
                                    className={`bg-green-900 text-lg hover:bg-green-700 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:shadow-md hover:-translate-y-1 text-white h-12 w-full`}
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='relative group mb-16 lg:mb-24 px-5 lg:px-0'>
                    <img
                        src={product?.mainImageUrl}
                        alt="Descripción"
                        className='w-full h-[25rem] lg:h-[50rem] object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:scale-105'
                    />
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
