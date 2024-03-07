"Use client";

import { ARROW_PAGINATION } from '@/utils/constants/assets';
import React, { useState } from 'react';

const Pagination = ({ totalPages }: any) => {
    const [activePage, setActivePage] = useState(1);

    const goToPage = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setActivePage(pageNumber);
    };

    return (
        <div className="flex items-center justify-center space-x-4">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={`w-12 h-12 rounded-full border ${activePage === index + 1 ? 'border-orange-100 bg-orange-100' : 'border-gold-500'} flex items-center justify-center`}
                >
                    <span className={`text-lg font-family-jost text-gray-900`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </button>
            ))}
            <button
                onClick={() => goToPage(activePage + 1)}
                disabled={activePage === totalPages}
                className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center text-gray-500 hover:border-gold-500 hover:text-gold-500 disabled:hover:border-gray-300 disabled:hover:text-gray-500"
            >
                <img src={ARROW_PAGINATION} alt="Contact" className='w-2' />
            </button>
        </div>
    );
};

const GalleryPagination = () => {
    return (
        <div className="bg-white py-5 rounded-lg flex justify-center">
            <Pagination totalPages={1} />
        </div>
    );
};

export default GalleryPagination;
