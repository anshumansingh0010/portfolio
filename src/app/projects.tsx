import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsList = [
    {
        title: "Stock Analyzer",
        description: "Technical analysis & market trends visualization tool with real-time stock data monitoring.",
        tags: ["TypeScript", "Next.js", "Financial Data"],
        github: "https://github.com/anshumansingh0010/stock_analyzer",
        gradient: "from-blue-500/15 via-indigo-500/5 to-transparent",
    },
    {
        title: "LAN File Sharing App",
        description: "High-speed peer-to-peer file transfer tool for sending files over local Wi-Fi / LAN (LocalSend alternative).",
        tags: ["Python", "Sockets", "Networking"],
        github: "https://github.com/anshumansingh0010/File-Sharing",
        gradient: "from-emerald-500/15 via-teal-500/5 to-transparent",
    },
    {
        title: "Syncthing CLI",
        description: "Command-line interface to manage, automate, and monitor Syncthing file synchronization workflows.",
        tags: ["Python", "CLI", "Automation"],
        github: "https://github.com/anshumansingh0010/syncthing-cli",
        gradient: "from-purple-500/15 via-violet-500/5 to-transparent",
    },
    {
        title: "CPPDock",
        description: "Systems programming utility & lightweight container docking engine implemented in C++.",
        tags: ["C++", "Systems", "Containers"],
        github: "https://github.com/anshumansingh0010/cppdock",
        gradient: "from-amber-500/15 via-orange-500/5 to-transparent",
    },
];

export default function Projects() {
    return (
        <section className="flex flex-col md:flex-row mt-20 w-full gap-6 md:gap-0 animate-fade-in-up transition-all duration-500 hover:bg-muted/30 p-6 rounded-lg">
            <div className="w-full md:w-1/4">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground/90">Projects</h3>
            </div>
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsList.map((project, index) => (
                    <a
                        key={index}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block"
                    >
                        <Card className="relative w-full overflow-hidden border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/50 cursor-pointer h-full flex flex-col justify-between p-5">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-0 transition-opacity group-hover:opacity-100 opacity-40`} />
                            
                            <div className="relative z-10 space-y-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                                        {project.title}
                                    </CardTitle>
                                    <div className="flex items-center gap-2 text-foreground/50 group-hover:text-primary transition-colors">
                                        <FaGithub className="w-4 h-4" />
                                        <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                                <CardDescription className="text-sm text-foreground/70 leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-1.5 mt-4">
                                {project.tags.map((tag, tIndex) => (
                                    <Badge key={tIndex} variant="secondary" className="text-xs px-2 py-0.5 font-normal">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    </a>
                ))}
            </div>
        </section>
    );
}