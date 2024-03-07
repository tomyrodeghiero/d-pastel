"use client";

import React, { useState } from 'react';

const tabs = [
    'Lámpara de Techo',
    'Lámparas de Mesa',
    'Lámparas de Pie',
    'Iluminación de Cocina',
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="flex flex-grow">
            <div className="flex justify-between items-center w-full rounded-2xl bg-white border border-gold-500">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`flex-grow text-lg font-medium py-2 rounded-xl ${activeTab === tab
                            ? 'bg-gold-500 text-white'
                            : 'text-gray-900'
                            } focus:outline-none transition-colors duration-150 ease-in-out
                            font-family-jost
                        `}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
