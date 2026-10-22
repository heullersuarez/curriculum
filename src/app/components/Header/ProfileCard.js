"use client";

import Image from "next/image";
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function ProfileCard() {
    const language = useSelector((state) => state.languageSlice.value);

    return (
        <article className="relative w-full max-w-[15rem] overflow-hidden rounded-2xl bg-black px-3 py-4 text-center text-white shadow-xl sm:max-w-[21rem] sm:px-9 sm:py-9">
            <div className="relative mx-auto mb-3 aspect-[3/4] w-full max-w-44 overflow-hidden rounded-2xl bg-orange-600 sm:mb-5 sm:max-w-64">
                <Image
                    src="/profile_picture.jpg"
                    alt="Retrato de Héuller Soares"
                    fill
                    sizes="(max-width: 640px) 15rem, 16rem"
                    className="object-cover"
                    priority
                />
            </div>

            <div className="mx-auto mt-2 mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white sm:my-4" aria-hidden="true">
                <FaCode />
            </div>
            <p className="mx-auto max-w-xs text-base font-medium leading-snug text-gray-200">
                {language === "PT"
                    ? "Apaixonado por resolver problemas com tecnologia"
                    : "Passionate about solving problems with technology"}
            </p>

            <nav aria-label={language === "PT" ? "Redes sociais" : "Social media"} className="relative mt-7 flex items-center justify-center gap-7 text-2xl text-white">
                <a
                    href="https://github.com/heullersuarez"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub de Héuller Soares"
                    className="transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/heuller-soares/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn de Héuller Soares"
                    className="transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
                    <FaLinkedin />
                </a>
                <a
                    href="https://instagram.com/heuller.suarez"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram de Héuller Soares"
                    className="transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600">
                    <FaInstagram />
                </a>
            </nav>
        </article>
    );
}
