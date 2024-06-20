"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

export default function BottomBar() {

    const divRef = useRef(null);
    const textRef = useRef(null);
    
    const [divWidth, setDivWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    const initialText = ' Desenvolvimento web / React / Node /';
    const [dynamicText, setDynamicText] = useState(initialText);

    useEffect(() => {
        if(divRef.current && textRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            setTextWidth(textRef.current.offsetWidth);

            const repeatText = Math.floor(divWidth / textWidth) -1;
            let multiplicateText = initialText;

            for (let index = 0; index < repeatText; index++) {
                multiplicateText += initialText;
            }

            setDynamicText(multiplicateText)
        }
    }, [divWidth, textWidth])

    return (
        <div className="bg-dark text-white overflow-hidden flex" ref={divRef}>
             <motion.div
                animate={{ x: ['100vw', '5vw', '-105vw'] }}
                transition={{ ease: "backOut", duration: 15, repeat: Infinity }}>
                <p className="py-4 text-sm  md:text-lg uppercase font-semibold text-end whitespace-nowrap w-full">
                    <span ref={textRef} className={textWidth ? "text-white": "text-black"}>
                        {dynamicText.slice(0,-1)}
                    </span>
                </p>
            </motion.div>
        </div>
    )
}