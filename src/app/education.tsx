import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
    return (
        <section className="flex flex-col md:flex-row mt-20 w-full gap-6 md:gap-0 animate-fade-in-up transition-all duration-500 hover:bg-muted/30 p-6 rounded-lg">
            <div className="w-full md:w-1/4">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground/90">Education</h3>
            </div>
            <div className="w-full md:w-3/4 flex flex-col gap-6">
                <Card className="relative mx-auto w-full max-w-2xl pt-0 border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 group">
                    <CardHeader className="mt-2 pb-2">
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">Bachelor of Technology in Computer Science & Engineering</CardTitle>
                        <div className="text-sm font-medium text-foreground/70 mt-1">National Institute of Technology Patna</div>
                    </CardHeader>
                    <CardDescription className="px-6 pb-6 text-foreground/80 flex flex-col gap-1.5 mt-2">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Location: Patna, Bihar</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Grade: 8.38 CGPA</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Passing Year: 2028</span>
                    </CardDescription>
                </Card>

                <Card className="relative mx-auto w-full max-w-2xl pt-0 border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 group">
                    <CardHeader className="mt-2 pb-2">
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">Senior Secondary</CardTitle>
                        <div className="text-sm font-medium text-foreground/70 mt-1">St. Thomas School</div>
                    </CardHeader>
                    <CardDescription className="px-6 pb-6 text-foreground/80 flex flex-col gap-1.5 mt-2">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Location: Handia Prayagraj</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Grade: 89.8%</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Passing Year: 2023</span>
                    </CardDescription>
                </Card>

                <Card className="relative mx-auto w-full max-w-2xl pt-0 border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50 group">
                    <CardHeader className="mt-2 pb-2">
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">Secondary Schooling</CardTitle>
                        <div className="text-sm font-medium text-foreground/70 mt-1">St. Thomas School</div>
                    </CardHeader>
                    <CardDescription className="px-6 pb-6 text-foreground/80 flex flex-col gap-1.5 mt-2">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Location: Handia Prayagraj</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Grade: 93.2%</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>Passing Year: 2021</span>
                    </CardDescription>
                </Card>
            </div>
        </section>
    );
}