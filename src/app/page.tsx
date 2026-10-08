import About from "./about";
import Certificates from "./certificates";
import Education from "./education";
import Footer from "./footer";
import Header from "./header";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <main className="max-w-3xl mx-auto px-6 py-10 sm:py-16 space-y-16 sm:space-y-20">
        <Header />
        <Profile />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Footer />
      </main>
    </div>
  );
}
