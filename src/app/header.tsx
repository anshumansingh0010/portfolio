"use client";

import { ThemeToggle } from "./toggletheme";

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-6 border-b border-border/40">
      <a
        href="#"
        className="font-semibold text-xl sm:text-4xl tracking-tight text-foreground hover:text-primary transition-colors"
      >
        Portfolio
      </a>

      <nav className="flex items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
        <a
          href="#about"
          className="hover:text-foreground transition-colors hidden sm:inline-block"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-foreground transition-colors"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="hover:text-foreground transition-colors hidden sm:inline-block"
        >
          Skills
        </a>
        <a
          href="#education"
          className="hover:text-foreground transition-colors hidden md:inline-block"
        >
          Education
        </a>
        <a
          href="#contact"
          className="hover:text-foreground transition-colors"
        >
          Contact
        </a>
        <a
          href="/anshuman_resume.pdf"
          download="Anshuman_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors font-medium text-foreground"
        >
          Resume
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}