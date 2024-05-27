import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-dark h-screen flex flex-col text-light">
        <div className="bg-dark-contrast h-10 flex justify-end items-center px-20 py-8 text-lg">
          <button className="btn-language">PT</button> | <button className="btn-language">EN</button>
        </div>
        <div className="grow flex items-center justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <span className="text-9xl satisfy-regular">Héuller</span>
            <span className="text-3xl">Desenvolvedor web full-stack</span>
          </div>
          <div>
            <Image
            src="/profile-pic.png"
            width={350}
            height={350}
            alt="Picture of the author"
            >
            </Image>
          </div>
        </div>
        <div className="bg-white py-8 px-10">

</div>
      </header>
    </main>
  );
}
