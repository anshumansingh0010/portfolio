import { ThemeToggle } from "./toggletheme";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full mb-15 px-6 py-4 bg-background/70 backdrop-blur-md border border-border rounded-full shadow-sm animate-fade-in-down transition-all duration-300">
            <h3 className="text-2xl font-bold tracking-tight text-primary">Portfolio</h3>
            <div className="flex justify-between items-center gap-6">
                <h5 className="font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer hidden md:block">Blog</h5>
                <h5 className="font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer hidden md:block">Tools</h5>
                <ThemeToggle />
            </div>
        </header>
    );
}