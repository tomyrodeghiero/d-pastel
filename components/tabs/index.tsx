import React, { useState, useRef, useEffect } from 'react';

const tabs = [
    'Lámpara de Techo',
    'Lámparas de Mesa',
    'Lámparas de Pie',
    'Iluminación de Cocina',
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const tabsRef = useRef<any>(null);

    useEffect(() => {
        if (!isAutoScrollEnabled) {
            return;
        }

        const interval = setInterval(() => {
            if (tabsRef.current) {
                tabsRef.current.scrollLeft += 1;
            }
        }, 20);

        return () => clearInterval(interval);
    }, [isAutoScrollEnabled]);

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
        setIsAutoScrollEnabled(false);
    };

    return (
        <div className="flex flex-grow">
            <div
                className="flex overflow-x-auto scroll-smooth justify-between items-center w-full lg:rounded-2xl bg-white border border-gold-500"
                ref={tabsRef}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <style>
                    {`
                        ::-webkit-scrollbar {
                          display: none;
                        }
                    `}
                </style>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`flex-none lg:flex-grow text-lg font-medium py-2 lg:py-3 px-4 rounded-xl ${activeTab === tab ? 'bg-gold-500 text-white' : 'text-gray-900'} focus:outline-none transition-colors duration-150 ease-in-out font-family-jost`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
