import { MapPin, Mail, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

export default function Profile() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 pt-4">
      {/* Intro info */}
      <div className="flex-1 space-y-3">
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Anshuman Singh
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium">
            CSE Student at NIT Patna · C++ & Full-Stack Developer
          </p>
        </div>

        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl">
          I'm passionate about understanding how computers work under the hood. Most of my work involves low-level systems programming in C++, Linux networking, and building responsive web apps with Next.js and TypeScript.
        </p>

        {/* Status & location metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for internships & roles</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Prayagraj, UP, India</span>
          </div>
        </div>

        {/* Quick Social & Action Links */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <a
            href="/anshuman_resume.pdf"
            download="Anshuman_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-foreground text-background hover:opacity-90 text-xs font-medium transition-opacity bg-clip-padding"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <Link
            href="https://github.com/anshumansingh0010"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/anshumansingh0010/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://codeforces.com/profile/anshumansingh0010"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
          >
            <SiCodeforces className="w-3.5 h-3.5 text-blue-500" />
            <span>Codeforces</span>
          </Link>

          <a
            href="mailto:anshumansingh0010@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline px-2 py-1.5 ml-1"
          >
            <span>View projects</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Clean Avatar */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border/80 shadow-md shrink-0 bg-muted">
        <img
          src="/anshuman.jpg"
          alt="Anshuman Singh"
          className="w-full h-full object-cover dark:hidden"
        />
        <img
          src="/anshuman-dark.jpg"
          alt="Anshuman Singh"
          className="w-full h-full object-cover hidden dark:block"
        />
      </div>
    </section>
  );
}