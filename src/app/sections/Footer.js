"use client";
import { useSelector } from "react-redux";

export default function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    const language = useSelector((state) => state.languageSlice.value);

    return(
        <div 
            className="h-12 bg-dark text-center text-light 
            flex items-center justify-center font-bold text-sm">
                {
                    language == "PT" ?
                    `Direitos autorais © ${year} - Todos os direitos reservados por Héuller`:
                    `Copyright © ${year} - All right reserved by Héuller`
                }
        </div>
    );
}