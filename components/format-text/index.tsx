"use client";

import React, { useEffect, useState } from "react";

export const FormatText = ({ text, className }: any) => {
    const [cleanedText, setCleanedText] = useState<string | null>(text || "");

    useEffect(() => {
        setCleanedText(text);
    }, [text]);

    return (
        <div className={className}>
            {cleanedText &&
                cleanedText.split("<p>").map((paragraph: string, i: number) => {
                    if (paragraph.trim() === "") return null;
                    return (
                        <p className="text-gray-900 font-family-jost text-xl leading-7" key={i}>
                            <span dangerouslySetInnerHTML={{ __html: paragraph }} />
                        </p>
                    );
                })}
        </div>
    );
};
