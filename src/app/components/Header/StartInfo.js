import Image from "next/image";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

export default function StartInfo(){

    const language = useSelector((state) => state.languageSlice.value);

    return (
        <div className="flex-1 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none md:min-h-[500px]">
            <div className="flex p-3 md:pl-40 items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -20 }}
                    transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
                    <div className="pt-5">
                        <h1 className="text-6xl xl:text-8xl font-bold">Héuller</h1>
                        <h2 className="text-xl xl:text-3xl font-extralight">{language == "PT" ? "Desenvolvedor de software full-stack": "Full-stack software developer"}</h2>
                    </div>
                </motion.div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-56 h-56 md:w-52 md:h-52 xl:w-80 xl:h-80 relative" >
                    <Image
                        className="w-full h-full"
                        src="/profile_picture.png"
                        width={715}
                        height={715}
                        style={{objectFit: 'cover'}}
                        alt="Picture of the author">
                    </Image>
                </div> 
            </div>
        </div>
    )
}