import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

export default function BottomBar() {

    const initialText = ' Desenvolvimento de software / React / React Native / Node JS /';
    const initialTextEN = ' Software development / React / React Native / Node JS /';
    const [dynamicText, setDynamicText] = useState(initialText);
    const language = useSelector((state) => state.languageSlice.value);
    const [isMounted, setIsMounted] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const windowWidthSize = window.innerWidth;
        setWindowWidth(windowWidthSize);

        console.log(windowWidthSize);

        const repeatText = Math.floor(windowWidthSize / 460) -1;
        let multiplicateText = "";

        if(language == "PT")
             multiplicateText = initialText;
        else
            multiplicateText = initialTextEN;

        for (let index = 0; index < repeatText; index++) {
            multiplicateText += initialText;
        }

        setDynamicText(multiplicateText);

      }, [windowWidth]);

    useEffect(() => {

        if(isMounted){
            if(language == "EN")
                setDynamicText(dynamicText.replaceAll("Desenvolvimento mobile", "Mobile development"));
            else
                setDynamicText(dynamicText.replaceAll("Mobile development", "Desenvolvimento mobile"));
        }
        else{
            setIsMounted(true);
        }
    
    }, [language])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
            window.removeEventListener('resize',  
                handleResize);
            };
    })

    return (
        <div className="bg-dark text-white overflow-hidden flex">
             <motion.div
                animate={{ x: ['100vw', '-150vw'] }}
                transition={{ ease: "easeInOut", duration: 14, repeat: Infinity }}>
                <p className="py-4 text-sm uppercase font-semibold text-end whitespace-nowrap w-full">
                    <span>
                        {dynamicText.slice(0,-1)}
                    </span>
                </p>
            </motion.div>
        </div>
    )
}