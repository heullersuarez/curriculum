import { motion } from "framer-motion";
import { Passion_One } from "next/font/google";
import ProfileCard from "./ProfileCard";

import { useSelector } from "react-redux";

const passionOne = Passion_One({ weight: "700", subsets: ["latin"] });

export default function StartInfo(){

    const language = useSelector((state) => state.languageSlice.value);

    return (
        <div className="flex-1 grid grid-rows-[auto_auto] gap-1 pt-14 pb-8 md:gap-0 md:py-0 md:grid-cols-2 md:grid-rows-none md:min-h-[30rem]">
            <div className="flex px-6 pt-8 pb-0 md:py-8 md:pl-10 lg:pl-20 xl:pl-40 items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -20 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div className="pt-5">
                        <h1 className={`${passionOne.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[clamp(4.5rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-[0.01em]`}>
                            <span className="block">Héuller</span>
                            <span className="block text-[#858585] opacity-50">Soares</span>
                        </h1>
                        <p className="text-lg xl:text-3xl font-extralight">{language == "PT" ? "Desenvolvedor de software full stack": "Full stack software developer"}</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex justify-center items-center px-5 py-0 md:px-8 md:py-8">
                <ProfileCard />
            </div>
        </div>
    )
}
