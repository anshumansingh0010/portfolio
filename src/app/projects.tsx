import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "CPPDock",
    description:
      "A lightweight Linux container engine implemented in C++. Uses Linux kernel namespaces (PID, mount, UTS, net), cgroups for memory & CPU quotas, and chroot for isolated process sandboxing.",
    tags: ["C++", "Linux Namespaces", "Cgroups", "Systems"],
    github: "https://github.com/anshumansingh0010/cppdock",
  },
  {
    title: "LAN File Sharing App",
    description:
      "High-speed peer-to-peer file transfer tool for sending files over local Wi-Fi without cloud intermediaries. Built with low-level Python socket streaming and multithreading.",
    tags: ["Python", "Sockets", "Multithreading", "Networking"],
    github: "https://github.com/anshumansingh0010/File-Sharing",
  },
  {
    title: "Stock Analyzer",
    description:
      "Technical analysis and market trends visualization dashboard with real-time stock data monitoring, interactive candlestick charts, and performance telemetry.",
    tags: ["TypeScript", "Next.js", "React", "Financial Data"],
    github: "https://github.com/anshumansingh0010/stock_analyzer",
  },
  {
    title: "Syncthing CLI",
    description:
      "A fast command-line tool to automate, configure, and monitor Syncthing continuous file synchronization workflows directly from the terminal.",
    tags: ["Python", "CLI", "Automation", "REST API"],
    github: "https://github.com/anshumansingh0010/syncthing-cli",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>
        <a
          href="https://github.com/anshumansingh0010?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          <span>All repositories</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-card/50 hover:bg-card hover:border-border transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span>{project.title}</span>
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="mt-2.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-1.5 items-center">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/70 text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}