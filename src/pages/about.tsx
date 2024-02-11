import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function About() {
    return (
        <div id="about" className="grid grid-cols-1 md:grid-cols-2 p-10 items-center">
            <div className="flex flex-col items-center w-full md:w-80 mb-10">
                <Avatar className="w-40 h-40">
                    <AvatarImage src="https://github.com/gadiegon.png" />
                    <AvatarFallback>GN</AvatarFallback>
                </Avatar>

                <p className="text-xl font-medium">Gadiego Nogueira</p>
                <span className="text-base font-mono">Desenvolvedor web</span>
            </div>

            <div className="text-justify flex-1">
                <h1 className="text-center text-3xl font-bold">Sobre mim</h1>
                <span className="text-base font-mono">
                    Sou um entusiasta da web com uma paixão por criar belas experiências online.
                    Meu fascínio pelo desenvolvimento web começou cedo e desde então tenho
                    explorado as fronteiras da programação.
                </span>
            </div>
        </div>
    )
}