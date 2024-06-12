import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";


export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}
