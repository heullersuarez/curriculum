import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Header from "./views/Header";


export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <Projects/>
    </main>
  );
}
