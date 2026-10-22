import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

export default function BottomBar() {

    const initialText = ' Desenvolvimento de software / React / React Native / Node JS /';
    const initialTextEN = ' Software development / React / React Native / Node JS /';
    const [dynamicText, setDynamicText] = useState(initialText.repeat(3));
    const language = useSelector((state) => state.languageSlice.value);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const text = language === "PT" ? initialText : initialTextEN;
        const copies = Math.max(2, Math.ceil(windowWidth / 460) + 1);
        setDynamicText(text.repeat(copies));
    }, [windowWidth, language]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            };
    }, []);

    return (
        <div className="bg-dark text-white overflow-hidden flex">
             <motion.div
                className="flex w-max flex-none"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
                <p className="flex-none py-4 text-sm uppercase font-semibold whitespace-nowrap">
                    {dynamicText}
                </p>
                <p aria-hidden="true" className="flex-none py-4 text-sm uppercase font-semibold whitespace-nowrap">
                    {dynamicText}
                </p>
            </motion.div>
        </div>
    )
}
