export default function Home() {
  return (
    <main>
      <header className="bg-dark h-screen flex flex-col">
        <div className="bg-dark-contrast h-10 flex justify-end items-center px-20 text-lg">
          PT | EN
        </div>
        <div className="grow flex flex-col justify-center items-center">
          {/* ADD PHOTO HERE */}
          <span className="text-8xl jacquard-12-regular">Héuller</span>
          <span className="text-3xl">Desenvolvedor web full-stack</span>
        </div>
      </header>
    </main>
  );
}
