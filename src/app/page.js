import Image from "next/image";

import '@/app/styles/home.css';

export default function Home() {

  return (
    <main>
      <header className="bg-light bg-opacity-50 h-screen w-screen flex flex-col text-dark">
        <div className="bg-light opacity-90 shadow-sm h-10 flex justify-end items-center px-20 py-8 text-lg">
          <button className="btn-language">PT</button> | <button className="btn-language">EN</button>
        </div>
        <div className="grow flex items-center justify-evenly">
          <div className="flex flex-col justify-center">
            <span className="text-8xl font-bold">Héuller</span>
            <span className="text-3xl font-extralight">Desenvolvedor web full-stack</span>
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
        <div className="bg-dark py-4 text-white overflow-x-hidden w-auto">
          <div className="text-update text-xl">
              <span>Desenvolvimento web / React / Node &nbsp;&nbsp;•</span> 
              <span>Desenvolvimento web / React / Node &nbsp;&nbsp;•</span> 
              <span>Desenvolvimento web / React / Node &nbsp;&nbsp;•</span> 
              <span>Desenvolvimento web / React / Node &nbsp;&nbsp;•</span> 
              <span>Desenvolvimento web / React / Node &nbsp;&nbsp;•</span> 
          </div>
        </div>
      </header>
    </main>
  );
}
