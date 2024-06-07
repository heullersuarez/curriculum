import BottomBar from "./components/HeaderBottomBar";
import LanguageBar from "./components/HeaderLanguageBar";
import AboutMe from "./components/AboutMe";
import StartInfo from "./components/StartInfo";


export default function Home() {
  return (
    <main>
      <header className="bg-light bg-opacity-50 h-screen flex flex-col text-dark">
        <LanguageBar/>
        <StartInfo/>
        <BottomBar/>
      </header>
      <div className="h-screen">
        <AboutMe/>
        <section
          className="h-screen bg-dark"
        ></section>
      </div>
    </main>
  );
}
