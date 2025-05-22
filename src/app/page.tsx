import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anurag - Mobile App Developer & UI/UX Designer",
  description:
    "Portfolio of Anurag, a mobile app developer specializing in modern UI frameworks and beautiful user experiences.",
  keywords: [
    "mobile app developer",
    "UI/UX design",
    "portfolio",
    "React",
    "Flutter",
    "Kotlin",
  ],
};

export default function Home() {
  return (
    <main
      id="main-content"
      className="min-h-screen relative overflow-hidden scroll-smooth"
      tabIndex={-1}
    >
      <AnimatedBackground />

      {/* Fixed elements */}
      <Header />
      <ScrollToTop />

      {/* Scroll snap container */}
      <div className="snap-y snap-mandatory">
        <div className="snap-start">
          <Hero />
        </div>

        <div className="snap-start">
          <Projects />
        </div>

        <div className="snap-start">
          <Experience />
        </div>

        <div className="snap-start">
          <About />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
