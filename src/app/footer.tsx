import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="flex justify-center items-center my-10 group cursor-pointer">
                <Badge variant="outline" className="text-sm h-10 px-6 rounded-full gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <span className="relative flex items-center justify-center h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    </span>
                    Download Resume
                </Badge>
            </div>
            <hr className="my-8 border-t border-border" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
                <p className="text-foreground/50 text-sm font-medium">© {new Date().getFullYear()} Anshuman Singh. All rights reserved.</p>
                <div className="flex space-x-4 text-xl text-foreground/50">
                    <a href="mailto:anshumansingh0010@gmail.com" aria-label="Email" className="inline-block hover:text-primary transition-all duration-300 ease-in-out hover:-translate-y-1.5">
                        <FaEnvelope />
                    </a>
                    <a href="https://github.com/anshumansingh0010/" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-block hover:text-primary transition-all duration-300 ease-in-out hover:-translate-y-1.5">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/anshumansingh0010/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-block hover:text-primary transition-all duration-300 ease-in-out hover:-translate-y-1.5">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    )
}