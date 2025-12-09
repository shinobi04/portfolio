import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
