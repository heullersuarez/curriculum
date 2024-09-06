import "@/app/assets/styles/language.css";

import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/app/redux/slices/languageSlice";

export default function LanguageBar() {

    const language = useSelector((state) => state.languageSlice.value);
    const dispatch =  useDispatch();

    return(
        <div className="bg-light shadow-sm flex justify-end items-center md:px-20 py-3 text-lg fixed w-screen z-10">
          <button 
            className={`buttonLanguage ${language == "PT" ? "activeLanguage": ""}`}
            onClick={() => {
              dispatch(setLanguage('PT'));
            }}>PT</button> | 
            <button 
              className={`buttonLanguage ${language == "EN" ? "activeLanguage": ""}`}
              onClick={() => {
                dispatch(setLanguage('EN'));
              }}
              >EN</button>
        </div>
    )
}

