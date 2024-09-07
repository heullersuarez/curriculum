"use client";

import BottomBar from "../components/Header/BottomBar";
import LanguageBar from "../components/Header/LanguageBar";
import StartInfo from "../components/Header/StartInfo";

export default function Header() {
    return (
        <header className="bg-light bg-opacity-50 min-h-screen flex flex-col text-dark">
            <LanguageBar/>
            <StartInfo/>
            <BottomBar/>
        </header>
    );
}