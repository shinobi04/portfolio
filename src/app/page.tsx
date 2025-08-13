import Header from "@/components/Header";
import DotsBackground from "@/components/DotsBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <DotsBackground />
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
