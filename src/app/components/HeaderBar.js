"use client";

import '@/app/styles/headerBar.css';
import { useEffect, useRef, useState } from 'react';

export default function HeaderBar() {

    const divRef = useRef(null);
    const textRef = useRef(null);
    
    const [divWidth, setDivWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    const [dynamicText, setDynamicText] = useState(' Desenvolvimento web / React / Node /');

    useEffect(() => {
        if(divRef.current) {
            setDivWidth(divRef.current.offsetWidth);
        }

        if(textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }

        if(divRef.current && textRef.current){
            console.log("aqui")
            const repeatText = Math.floor(divWidth / textWidth);
            let multiplicateText = dynamicText;

            for (let index = 0; index < repeatText; index++) {
                multiplicateText += dynamicText;
            }
            setDynamicText("oi")
        }

    })

    return (
        <div className="bg-dark text-white overflow-hidden whitespace-nowrap py-4 text-lg uppercase font-semibold text-end" ref={divRef}>
            <p className="scroll-animation">
                <span ref={textRef}>{dynamicText}</span>
            </p>
        </div>
    )
}

