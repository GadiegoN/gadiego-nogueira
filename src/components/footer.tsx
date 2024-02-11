import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
    return (
        <div className="p-10 flex flex-col text-center items-center">
            <p>&copy; 2024 - Gadiego Nogueira. Todos os direitos reservados.</p>
            <div>
                <Button variant="ghost">
                    <a href="http://github.com/gadiegon" target="_blank">
                        <Github />
                    </a>
                </Button>
                <Button variant="ghost">
                    <a href="https://www.instagram.com/gadiego_front/" target="_blank">
                        <Instagram />
                    </a>
                </Button>
                <Button variant="ghost">
                    <a href="https://www.linkedin.com/in/gadiego-nogueira/" target="_blank">
                        <Linkedin />
                    </a>
                </Button>
            </div>

        </div>
    )
}