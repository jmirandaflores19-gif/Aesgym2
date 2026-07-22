import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Branches } from "@/components/sections/Branches";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Branches />
      </main>
      <Footer />
    </div>
  );
}
