const skillGroups = [
  {
    category: "Languages",
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C", "SQL", "Bash"],
  },
  {
    category: "Systems & Backend",
    skills: [
      "Linux / POSIX",
      "Socket Programming",
      "Multithreading",
      "Node.js",
      "Django",
      "REST APIs",
      "PHP",
    ],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Databases & Tools",
    skills: [
      "MySQL",
      "Redis",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Git & GitHub",
      "Arch Linux",
      "AWS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Skills
      </h2>

      <div className="space-y-4">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pb-3 border-b border-border/40 last:border-none"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground w-36 shrink-0">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted/60 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
