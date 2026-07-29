import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Milestones from "@/components/Milestones";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Publications />
        <Milestones />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
