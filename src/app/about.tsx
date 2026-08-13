export default function About() {
    return (
        <section className="flex flex-col md:flex-row mt-20 w-full gap-6 md:gap-0 animate-fade-in-up transition-all duration-500 hover:bg-muted/30 p-6 rounded-lg">
            <div className="w-full md:w-1/4">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground/90">About</h3>
            </div>
            <div className="w-full md:w-3/4 text-foreground/80 leading-relaxed text-lg">
                <p>
                    Hi, I'm <span className="font-medium text-foreground">Anshuman Singh</span>, a Computer Science and Engineering student at NIT Patna. I'm passionate about building scalable software and user-friendly applications.
                </p>
                <p className="mt-4">
                    With a solid foundation in data structures and algorithms, I enjoy turning complex logic into efficient, clean code. I'm currently sharpening my skills and am always looking for challenging projects to build and learn from.
                </p>
            </div>
        </section>
    );
}