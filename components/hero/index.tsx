import { GO_TO_SHOP, INTERIOR_DESIGN_BANNER, SCROLL_DOWN } from '@/utils/constants/assets'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative h-[92.5vh]">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="text-2xl pt-16 tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className=''>Iluminando el Arte <br /></span>
                                <span>de Vivir con Estilo</span>
                            </h2>
                            <p className="hero-subtitle font-medium uppercase text-lg tracking-widest mt-1 text-gray-500">
                                Diseño de Interiores
                            </p>
                            <Link href="/shop" className='inline-flex'>
                                <img
                                    className="mt-5 w-44"
                                    src={GO_TO_SHOP}
                                    alt="Go to Shop"
                                />
                            </Link>
                            <div className='w-44 flex justify-center'>
                                <img
                                    className="mt-8 h-16"
                                    src={SCROLL_DOWN}
                                    alt="Scroll down"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <img
                className="object-cover w-[36rem] rounded-l-[5rem] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
                src={INTERIOR_DESIGN_BANNER}
                alt="Interior design banner"
            />
        </div>
    )
}

export default Hero