"use client";
import { useSelector } from "react-redux";

export default function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    const language = useSelector((state) => state.languageSlice.value);

    return(
        <footer
            className="min-h-12 px-3 py-3 bg-dark text-center text-light
            flex items-center justify-center font-bold text-xs sm:text-sm">
                {
                    language == "PT" ?
                    `Direitos autorais © ${year} - Todos os direitos reservados por Héuller`:
                    `Copyright © ${year} - All rights reserved by Héuller`
                }
        </footer>
    );
}
