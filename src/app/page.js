import Image from "next/image";

import BottomBar from "./components/HeaderBottomBar";
import LanguageBar from "./components/HeaderLanguageBar";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

import '@/app/styles/headerSocialIcons.css';

export default function Home() {
  return (
    <main>
      <header className="bg-light bg-opacity-50 h-screen w-screen flex flex-col text-dark">
        <LanguageBar/>
        <div className="grow flex flex-col md:flex-row md:items-center justify-center gap-20 md:justify-evenly px-10 py-4 md:px-0">
          <div className="flex flex-col justify-center">
            <p className="text-6xl md:text-8xl font-bold">Héuller</p>
            <p className="text-xl md:text-3xl font-extralight">Desenvolvedor web full-stack</p>
            <div className="pt-8 flex gap-6 social-icons">
              <a href=""><FaLinkedin size={30}/></a>
              <a href=""><FaInstagram size={30}/></a>
              <a href=""><FaGithub size={30}/></a>
            </div>
          </div>
          <div className="w-40 h-40 md:w-72 md:h-72 relative">
            <Image
            src="/profile-pic.png"
            objectFit="cover"
            layout="fill"
            alt="Picture of the author"
            >
            </Image>
          </div>
        </div>
        <BottomBar/>
      </header>
    </main>
  );
}
