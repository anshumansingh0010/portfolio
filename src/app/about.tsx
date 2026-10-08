export default function About() {
  return (
    <section id="about" className="scroll-mt-20 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        About
      </h2>

      <div className="space-y-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
        <p>
          I'm an undergraduate studying Computer Science and Engineering at the{" "}
          <span className="text-foreground font-medium">National Institute of Technology Patna (NIT Patna)</span>, currently holding an{" "}
          <span className="text-foreground font-medium">8.3 CGPA</span>.
        </p>

        <p>
          My interests center around systems engineering and how things work under the surface. I enjoy writing modern C++, working with Linux kernel primitives (namespaces, cgroups, process isolation), and building networking tools with POSIX sockets and multithreading.
        </p>

        <p>
          On the application side, I build responsive, functional web apps using Next.js, TypeScript, and Tailwind CSS. I also actively solve algorithmic problems on LeetCode and Codeforces to keep my data structures and problem-solving skills sharp.
        </p>
      </div>
    </section>
  );
}