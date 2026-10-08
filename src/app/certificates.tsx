import { ArrowUpRight } from "lucide-react";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Certificates() {
  return (
    <section id="achievements" className="scroll-mt-20 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Highlights & Profiles
      </h2>

      <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
        <ul className="space-y-2 list-disc list-inside text-foreground/80">
          <li>
            Solved <span className="font-semibold text-foreground">200+ problems</span> across LeetCode & Codeforces focusing on data structures, graphs, and dynamic programming.
          </li>
          <li>
            Maintaining an <span className="font-semibold text-foreground">8.3 CGPA</span> in Computer Science & Engineering at NIT Patna.
          </li>
          <li>
            Built custom container sandboxing (<span className="font-semibold text-foreground">CPPDock</span>) in modern C++ utilizing Linux kernel namespaces and cgroups.
          </li>
          <li>
            Implemented decentralized P2P socket streaming tool in Python for high-speed local network file distribution.
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="https://codeforces.com/profile/anshumansingh0010"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
        >
          <SiCodeforces className="w-3.5 h-3.5 text-blue-500" />
          <span>Codeforces</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
        </a>

        <a
          href="https://leetcode.com/u/anshumansingh0010/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
        >
          <SiLeetcode className="w-3.5 h-3.5 text-amber-500" />
          <span>LeetCode</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
        </a>

        <a
          href="https://github.com/anshumansingh0010"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-medium text-foreground transition-colors"
        >
          <FaGithub className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}