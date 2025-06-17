import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Formation from "./pages/Formation";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import ConstellationBackground from "./components/ConstellationBackground";
import { Contact as ContactIcon } from "lucide-react";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ConstellationBackground />
      <div className="dark text-foreground font-sans relative z-10">
        <Navbar />
        <main className="pt-20">
          <About />
          <Competences />
          <Formation />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
