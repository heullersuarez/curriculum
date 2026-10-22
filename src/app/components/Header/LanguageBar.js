import "@/app/assets/styles/language.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/app/redux/slices/languageSlice";

export default function LanguageBar() {

    const language = useSelector((state) => state.languageSlice.value);
    const dispatch =  useDispatch();

    useEffect(() => {
      document.documentElement.lang = language === "PT" ? "pt-BR" : "en";
    }, [language]);

    return(
        <nav aria-label={language === "PT" ? "Selecionar idioma" : "Select language"} className="bg-dark text-light shadow-sm flex justify-end items-center px-4 md:px-20 py-3 text-lg fixed inset-x-0 top-0 z-50">
          <button 
            className={`buttonLanguage ${language == "PT" ? "activeLanguage": ""}`}
            aria-pressed={language === "PT"}
            onClick={() => {
              dispatch(setLanguage('PT'));
            }}>PT-BR</button> | 
            <button 
              className={`buttonLanguage ${language == "EN" ? "activeLanguage": ""}`}
              aria-pressed={language === "EN"}
              onClick={() => {
                dispatch(setLanguage('EN'));
              }}
              >EN</button>
        </nav>
    )
}

