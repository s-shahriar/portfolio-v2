import About from "@/components/About";
import CodingActivity from "@/components/CodingActivity";
import Contact from "@/components/Contact";
import DevelopmentRoadmap from "@/components/DevelopmentRoadmap";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <CodingActivity />
        <DevelopmentRoadmap />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
