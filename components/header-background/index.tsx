import React from "react";
import Image from "next/image";
import { DROP_RIGHT } from "@/utils/constants/assets";

const HeaderBackground = ({ background, title, subtitle }: any) => {
    const subtitleParts = subtitle.split("-");

    return (
        <div className="relative w-screen h-52">
            <img src={background} className="h-full w-full object-cover object-bottom" alt="Background" />

            <div className="absolute w-full bottom-0 text-center">
                <div className="flex-col items-center inline-flex bg-white px-10 py-5 rounded-t-3xl">
                    <h1 className="text-xl lg:text-3xl text-gray-900">{title}</h1>
                    <div className="flex gap-2 font-family-jost text-gray-700 lg:text-lg mt-1">
                        {subtitleParts.map((part: string, index: number) => (
                            <React.Fragment key={index}>
                                <span>{part.trim()}</span>
                                {index !== subtitleParts.length - 1 && ("/")}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBackground;
