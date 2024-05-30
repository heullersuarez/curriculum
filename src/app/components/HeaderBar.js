"use client";

import '@/app/styles/headerBar.css';
import { useEffect, useRef, useState } from 'react';

export default function HeaderBar() {

    const divRef = useRef(null);
    const textRef = useRef(null);
    
    const [divWidth, setDivWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    const initialText = 'Desenvolvimento web / React / Node /';
    const [dynamicText, setDynamicText] = useState(initialText);

    useEffect(() => {
        if(divRef.current && textRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            setTextWidth(textRef.current.offsetWidth);

            const repeatText = Math.floor(divWidth / textWidth);
            let multiplicateText = initialText;

            for (let index = 0; index < repeatText; index++) {
                multiplicateText += initialText;
            }
            console.log(multiplicateText)
            setDynamicText(multiplicateText)
        }
    }, [divWidth, textWidth])

    return (
        <div className="bg-dark text-white overflow-hidden whitespace-nowrap inline-block" ref={divRef}>
            <p className="scroll-animation py-4 text-lg uppercase font-semibold">
                <span ref={textRef}>{dynamicText}</span>
                <span ref={textRef}>{dynamicText}</span>
            </p>
        </div>
    )
}

