"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ARROW_RIGHT, ARROW_RIGHT_GRAY } from '@/utils/constants/assets';

const Newsletter = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const modalRef = useRef<any>(null);

    const isEmailValid = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    const handleSubscribe = async () => {
        if (!isEmailValid(email)) {
            toast.error('Por favor, ingresa un correo electrónico válido.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const apiUrl = '/api/user-emails';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailUser: email,
                    ecommerceName: 'D-pastel',
                }),
            });

            if (response.ok) {
                setShowModal(false);
                setEmail('');
                toast.success('¡Tu correo ha sido registrado exitosamente! 🎉 Bienvenido al newsletter de D-pastel 🛋', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                throw new Error('Error al subscribir al newsletter');
            }
        } catch (error) {
            console.error('Error al subscribir al newsletter:', error);
            toast.error('Hubo un problema al intentar registrarte. Por favor, inténtalo de nuevo más tarde.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };



    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showModal, modalRef]);

    return (
        <div className="flex justify-center items-center py-10 lg:py-20 px-4 lg:px-0" data-aos="fade-up">
            <ToastContainer position="top-center" />
            <div className="w-full lg:w-3/5 rounded-3xl bg-gray-900 py-12">
                <h2 className="text-3xl lg:text-4xl text-white mb-4 text-center">¿Quieres unirte a D-pastel?</h2>
                <p className="font-family-jost text-center text-gray-300 mb-4">La belleza de un diseño radica en la atención al detalle.<br />Conéctate con nosotros.</p>
                <button onClick={() => setShowModal(true)} className="mx-auto text-lg bg-gold-500 mt-8 gap-2 font-family-jost text-white font-medium rounded-2xl py-4 px-5 flex items-center">
                    Subscribirse al Newsletter
                    <img src={ARROW_RIGHT_GRAY} alt="Newsletter" className='w-3' />
                </button>
            </div>

            {showModal && (
                <div className="fixed font-family-jost inset-0 backdrop-blur-sm flex justify-center items-center transition-opacity duration-500 ease-in-out">
                    <div ref={modalRef} data-aos="fade-up" className="bg-white p-8 rounded-lg animate-fade-in-up">
                        <h3 className="text-xl mb-4">Ingresa tu correo electrónico 💌</h3>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            className="border p-2 rounded w-full mb-4"
                        />
                        <button onClick={handleSubscribe} className="bg-gray-900 w-full flex justify-center gap-2 font-family-jost text-white font-medium rounded-2xl py-4 px-5 items-center">
                            Subscribirse
                            <img src={ARROW_RIGHT} alt="Contact" className='w-3' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Newsletter;