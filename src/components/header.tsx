import { Button } from "./ui/button";

export function Header() {
    return (
        <div className="flex justify-between items-center p-10">
            <div className="text-center">
                <h1 className="text-2xl font-bold">GadiegoN</h1>
                <span className="text-lg font-medium text-slate-600">Desenvolvedor Frontend</span>
            </div>

            <div className="space-x-3 grid grid-cols-1 md:grid-cols-3">
                <Button asChild variant="link">
                    <a href="#about">Sobre</a>
                </Button>
                <Button asChild variant="link">
                    <a href="#projects">Projetos</a>
                </Button>
                <Button asChild variant="link">
                    <a href="#contact">Contato</a>
                </Button>
            </div>
        </div>
    )
}