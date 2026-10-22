import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Héuller Soares",
    url: "https://www.heuller.com.br",
    jobTitle: "Desenvolvedor de software full stack",
    image: "https://www.heuller.com.br/profile_picture.jpg",
    sameAs: ["https://github.com/heullersuarez", "https://www.linkedin.com/in/heuller-soares/"],
  };

  return (
    <main className="w-full min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  );
}
