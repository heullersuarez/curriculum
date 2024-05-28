"use client";

import { useEffect, useRef, useState } from "react";


export default function HeaderBar() {

    const divRef = useRef();
    const textRef = useRef();
    
    const [divWidth, setDivWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    const [dynamicText, setDynamicText] = useState('Desenvolvimento web / React / Node /');

    useEffect(() => {
        if(divRef.current) {
            setDivWidth(divRef.current.offsetWidth);
        }

        if(textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }

        if(divWidth && textWidth){
            const repeatText = divWidth / textWidth;
            console.log(repeatText)
        }

        
        {/*for (let index = 0; index < repeatText; index++) {
            setDynamicText(dynamicText + dynamicText);
        }*/}
    })

    
    return (
        <div className="bg-dark text-white overflow-x-hidden h-10 flex items-center">
          <div className="text-update text-xl">
              <div className="w-screen" ref={divRef}>
                <span ref={textRef}>{dynamicText}</span>
              </div> 
          </div>
        </div>
    )
}

