import React from 'react';

const StatsCard = ({ stats }: any) => {
    return (
        <div className="flex justify-center items-center bg-beige-100 p-4">
            {stats.map((stat: any, index: number) => (
                <div
                    key={stat.label}
                    className={`text-center px-14 ${index !== stats.length - 1 ? 'border-r border-gold-500' : ''}`}
                >
                    <p className="text-gold-500 text-7xl">{stat.value}</p>
                    <p className="text-gray-700 font-family-jost text-xl">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

const Stats = () => {
    const stats = [
        { label: 'Años de Experiencia', value: 12 },
        { label: 'Lámparas Creadas', value: 85 },
        { label: 'Nuevos Diseños', value: 15 },
        { label: 'Clientes Felices', value: 205 }
    ];

    return (
        <div className="py-20 flex justify-center bg-orange-100 items-center">
            <StatsCard stats={stats} />
        </div>
    );
};

export default Stats;
