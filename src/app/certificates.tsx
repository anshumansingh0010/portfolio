export default function Certificates() {
    return (
        <section className="flex flex-col md:flex-row mt-20 w-full gap-6 md:gap-0 animate-fade-in-up transition-all duration-500 hover:bg-muted/30 p-6 rounded-lg">
            <div className="w-full md:w-1/4">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground/90">Certificates</h3>
            </div>
            <div className="w-full md:w-3/4 flex flex-col gap-4">
                <p className="text-foreground/60 italic">No certificates added yet.</p>
            </div>
        </section>
    );
}