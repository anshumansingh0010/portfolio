interface EducationItem {
  degree: string;
  school: string;
  period: string;
  score: string;
  details?: string;
}

const educationList: EducationItem[] = [
  {
    school: "National Institute of Technology Patna (NIT Patna)",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2024 — 2028",
    score: "8.3 CGPA",
    details:
      "Core coursework includes Data Structures & Algorithms, Operating Systems, Object-Oriented Programming (C++), Computer Networks, and DBMS.",
  },
  {
    school: "St. Thomas School, Handia Prayagraj",
    degree: "Senior Secondary (Class XII) — Science & Math",
    period: "2021 — 2023",
    score: "89.8%",
  },
  {
    school: "St. Thomas School, Handia Prayagraj",
    degree: "Secondary School (Class X)",
    period: "2019 — 2021",
    score: "93.2%",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        Education
      </h2>

      <div className="space-y-4">
        {educationList.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-border/60 bg-card/40 space-y-1.5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-medium text-sm sm:text-base text-foreground">
                {item.school}
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                {item.period}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-foreground/80">
              <span>{item.degree}</span>
              <span className="font-semibold text-foreground text-xs px-2 py-0.5 rounded bg-muted">
                {item.score}
              </span>
            </div>

            {item.details && (
              <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                {item.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}