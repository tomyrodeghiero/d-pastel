import { ARROW_RIGHT } from '@/utils/constants/assets';
import React from 'react';

const SectionCard = ({ title, description, buttonText, buttonLink, imageSrc, imagePosition }: any) => {
    const isImageLeft = imagePosition === 'left';
    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between my-10">
            {isImageLeft && (
                <img src={imageSrc} alt="" className="w-full md:w-1/2 rounded-3xl" />
            )}
            <div className={`${isImageLeft ? 'md:ml-10' : 'md:mr-10'}`}>
                <h2 className="text-4xl text-gray-900 leading-[3.5rem]">{title}</h2>
                <p className="text-gray-500 font-family-jost text-lg my-5 w-[87.5%]">
                    {description}
                </p>
                <button className="bg-gray-900 mt-8 gap-2 font-family-jost text-white font-semibold rounded-2xl py-4 px-5 flex items-center">
                    {buttonText}
                    <img src={ARROW_RIGHT} alt="Contact" className='w-3' />
                </button>
            </div>
            {!isImageLeft && (
                <img src={imageSrc} alt="" className="w-full md:w-1/2 rounded-3xl" />
            )}
        </div>
    );
};

export default SectionCard;