import Image from "next/image";

import '@/app/styles/home.css';
import HeaderBar from "./components/HeaderBar";

export default function Home() {
  return (
    <main>
      <header className="bg-light bg-opacity-50 h-screen w-screen flex flex-col text-dark">
        <div className="bg-light opacity-90 shadow-sm h-10 flex justify-end items-center md:px-20 py-8 text-lg">
          <button className="btn-language">PT</button> | <button className="btn-language">EN</button>
        </div>
        <div className="grow flex flex-col md:flex-row md:items-center justify-evenly px-10 md:px-0">
          <div className="flex flex-col justify-center">
            <p className="text-7xl md:text-8xl font-bold">Héuller</p>
            <p className="text-2xl md:text-3xl font-extralight">Desenvolvedor web full-stack</p>
          </div>
          <div>
            <Image
            src="/profile-pic.png"
            width={300}
            height={300}
            alt="Picture of the author"
            >
            </Image>
          </div>
        </div>
        <HeaderBar/>
      </header>
    </main>
  );
}
