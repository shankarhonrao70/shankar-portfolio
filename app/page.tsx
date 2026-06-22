import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Background from "@/components/Background";
import CursorGlow from "@/components/CursorGlow";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <CursorGlow />
      <Background />

      <Navbar />
     <Hero />
<About />
<Skills />
<Experience />
<Achievements />
<Projects />
<Contact />
<AIAssistant />
    </main>
  );
}