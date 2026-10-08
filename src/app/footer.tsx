"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUp, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "anshumansingh0010@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="scroll-mt-20 pt-8 border-t border-border/40 space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Contact
        </h2>
        <p className="text-sm text-foreground/80 leading-relaxed max-w-lg">
          I'm always open to discussing new opportunities, systems projects, or software engineering roles. Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background font-medium text-xs hover:opacity-90 transition-opacity"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Email</span>
          </a>

          <a
            href="/anshuman_resume.pdf"
            download="Anshuman_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Copy: {email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/30 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Anshuman Singh · NIT Patna</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/anshumansingh0010"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://codeforces.com/profile/anshumansingh0010"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Codeforces
          </a>
          <a
            href="https://www.linkedin.com/in/anshumansingh0010/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer ml-2"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}