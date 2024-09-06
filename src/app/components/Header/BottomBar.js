import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

export default function BottomBar() {

    const initialText = ' Desenvolvimento mobile / React Native / Node JS /';
    const [dynamicText, setDynamicText] = useState(initialText);

    const language = useSelector((state) => state.languageSlice.value);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {

            const windowWidthSize = window.innerWidth;

            const repeatText = Math.floor(windowWidthSize / 400) -1;
            let multiplicateText = initialText;

            for (let index = 0; index < repeatText; index++) {
                multiplicateText += initialText;
            }

            setDynamicText(multiplicateText);
      }, []);

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

    return (
        <div className="bg-dark text-white overflow-hidden flex">
             <motion.div
                animate={{ x: ['100vw', '-100vw'] }}
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