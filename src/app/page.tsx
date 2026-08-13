
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
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center selection:bg-primary/20 selection:text-primary">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <main className="w-full max-w-4xl relative">
        <Header />
        <div className="flex flex-col gap-10 md:gap-16 pb-20">
            <Profile />
            <About />
            <Education />
            <Projects />
            <Certificates />
            <Skills />
        </div>
        <Footer/>
      </main>
    </div>
  );
}
