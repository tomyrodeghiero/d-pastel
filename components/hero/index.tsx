"use client";

import { GO_TO_SHOP, INTERIOR_DESIGN_BANNER, SCROLL_DOWN } from '@/utils/constants/assets'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <div className="relative h-screen lg:h-[92.5vh]">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="text-5xl md:text-6xl pt-4 lg:pt-16 tracking-tight text-gray-900 sm:text-5xl " data-aos="fade-up">
                                <span>El Arte de Vivir<br /></span>
                                <span>Con Estilo</span>
                            </h2>
                            <p className="hero-subtitle uppercase font-medium text-lg tracking-widest mt-1 text-gray-500" data-aos="fade-up" data-aos-delay="100">
                                Irene Arias - Diseñadora
                            </p>
                            <Link href="/shop" className='flex lg:inline-flex justify-center' data-aos="fade-up" data-aos-delay="200">
                                <img
                                    className="mt-5 w-48"
                                    src={GO_TO_SHOP}
                                    alt="Go to Shop"
                                />
                            </Link>
                            <div className='w-full lg:w-44 flex justify-center' data-aos="fade-up" data-aos-delay="300">
                                <img
                                    className="mt-5 h-16"
                                    src={SCROLL_DOWN}
                                    alt="Scroll down"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <img
                className="object-cover w-full lg:h-[87.5vh] p-4 rounded-3xl lg:p-0 lg:rounded-l-[5rem] lg:absolute lg:inset-y-0 lg:right-0 lg:w-auto"
                src={INTERIOR_DESIGN_BANNER}
                alt="Interior design banner"
                data-aos="fade-left"
            />
        </div>
    )
}

export default Hero
