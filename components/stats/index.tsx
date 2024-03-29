import React from 'react';

const StatsCard = ({ stats }: any) => {
    return (
        <div className="flex flex-wrap justify-center items-center bg-beige-100 p-4" data-aos="fade-right">
            {stats.map((stat: any, index: number) => (
                <div
                    key={stat.label}
                    className={`text-center px-4 md:px-14 py-4 lg:py-2 ${index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gold-500' : ''} w-full md:w-auto`}
                >
                    <p className="text-gold-500 text-5xl md:text-7xl">{stat.value}</p>
                    <p className="text-gray-700 font-family-jost text-xl">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

const Stats = () => {
    const stats = [
        { label: 'Años de Experiencia', value: 15 },
        { label: 'Lámparas Creadas', value: 85 },
        { label: 'Nuevos Diseños', value: 30 },
        { label: 'Clientes Felices', value: 205 }
    ];

    return (
        <div className="lg:py-20 flex justify-center bg-orange-100 items-center">
            <StatsCard stats={stats} />
        </div>
    );
};

export default Stats;
