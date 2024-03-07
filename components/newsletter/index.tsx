import { ARROW_RIGHT_GRAY } from '@/utils/constants/assets';
import React from 'react';

const Newsletter = () => {
    return (
        <div className="flex justify-center items-center py-10 lg:py-20 px-4 lg:px-0">
            <div className="w-full lg:w-3/5 rounded-3xl bg-gray-900 py-12">
                <h2 className="text-3xl lg:text-4xl text-white mb-4 text-center">¿Quieres unirte a D-pastel?</h2>
                <p className="font-family-jost text-center text-gray-300 mb-4">La belleza de un diseño radica en la atención al detalle.<br />Conéctate con nosotros.</p>
                <button className="mx-auto text-lg bg-gold-500 mt-8 gap-2 font-family-jost text-white font-medium rounded-2xl py-4 px-5 flex items-center">
                    Subscribirse al Newsletter
                    <img src={ARROW_RIGHT_GRAY} alt="Newsletter" className='w-3' />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
