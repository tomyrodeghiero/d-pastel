import React from 'react';

const QuoteCard = ({ author, quote }: any) => {
    return (
        <div className='w-full flex justify-center' data-aos="fade-up">
            <div className="relative text-center mt-10 inline-flex justify-center w-[90%] lg:w-full">
                <div className="relative flex flex-col justify-center border-[0.75rem] border-orange-100 py-5 px-10 items-center rounded-[2.5rem]">
                    <div className='bg-white justify-center h-[115%] w-[70%] absolute' />
                    <div className="text-4xl text-gray-900 z-10">“</div>
                    <p className="text-gray-900 text-2xl italic z-10">
                        Prefiero un interior que despierte sensaciones.<br />No quiero simplemente entrar a un lugar y<br />saber que es solo eso, un lugar.</p>
                    <p className="text-gray-500 text-center text-base font-family-jost uppercase mt-4 z-10">- Irene Arias</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;
