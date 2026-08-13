import { Badge } from "@/components/ui/badge";

export default function Skills() {
    return (
        <section className="flex flex-col md:flex-row mt-20 w-full gap-6 md:gap-0 animate-fade-in-up transition-all duration-500 hover:bg-muted/30 p-6 rounded-lg">
            <div className="w-full md:w-1/4">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground/90">Skills</h3>
            </div>
            <div className="w-full md:w-3/4 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
                    <h2 className="font-semibold min-w-32 text-foreground/70 group-hover:text-primary transition-colors">Languages</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">CPP</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Python</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Javascript</Badge>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
                    <h2 className="font-semibold min-w-32 text-foreground/70 group-hover:text-primary transition-colors">Frontend</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Reactjs</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Nextjs</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">TailWind CSS</Badge>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
                    <h2 className="font-semibold min-w-32 text-foreground/70 group-hover:text-primary transition-colors">Backend</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Nodejs</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Django</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">PHP</Badge>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
                    <h2 className="font-semibold min-w-32 text-foreground/70 group-hover:text-primary transition-colors">Tools</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Git</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">MySQL</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Redis</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">MongoDB</Badge>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
                    <h2 className="font-semibold min-w-32 text-foreground/70 group-hover:text-primary transition-colors">Others</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">AWS</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Docker</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Azure</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Google Cloud</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">Arch</Badge>
                    </div>
                </div>
            </div>
        </section>
    );
}
