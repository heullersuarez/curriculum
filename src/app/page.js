import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  );
}
