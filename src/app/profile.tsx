import { Badge } from "@/components/ui/badge";
import { CodeXml, MapPin } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="flex flex-col items-center animate-fade-in-up mt-10">
            <div className="relative group">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-border shadow-md">
                    <img src="/anshuman.jpg" alt="Anshuman Singh" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mt-8 mb-3 tracking-tight text-foreground">Anshuman Singh</h1>
            
            <Badge variant="outline" className="text-sm my-2 h-8 px-4 rounded-full border-primary/30 bg-primary/10 text-primary gap-2 font-medium hover:bg-primary/20 transition-colors">
                <span className="relative flex items-center justify-center h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Open to work
            </Badge>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
                <div className="flex items-center gap-x-2 text-foreground/80 font-medium bg-muted px-3 py-1.5 rounded-lg text-sm backdrop-blur-sm transition-colors hover:text-foreground hover:bg-muted/80 cursor-default">
                    <CodeXml className="h-4 w-4 text-primary" /> Cpp Developer
                </div>
                <div className="flex items-center gap-x-2 text-foreground/80 font-medium bg-muted px-3 py-1.5 rounded-lg text-sm backdrop-blur-sm transition-colors hover:text-foreground hover:bg-muted/80 cursor-default">
                    <MapPin className="h-4 w-4 text-primary" /> Prayagraj, UP
                </div>
                <Link href="https://www.linkedin.com/in/anshumansingh0010/" target="_blank" className="flex items-center gap-x-2 text-foreground/80 font-medium hover:text-primary transition-colors bg-muted px-3 py-1.5 rounded-lg text-sm backdrop-blur-sm hover:shadow-md hover:bg-accent border border-transparent">
                    <FaLinkedin className="h-4 w-4" /> LinkedIn
                </Link>
                <Link href="https://github.com/anshumansingh0010" target="_blank" className="flex items-center gap-x-2 text-foreground/80 font-medium hover:text-primary transition-colors bg-muted px-3 py-1.5 rounded-lg text-sm backdrop-blur-sm hover:shadow-md hover:bg-accent border border-transparent">
                    <FaGithub className="h-4 w-4" /> Github
                </Link>
            </div>
        </div>
    )
}