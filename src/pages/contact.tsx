import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function Contact() {
    const phoneNumber = '+5534984081905'
    const [name, setSetName] = useState('')
    const [message, setMessage] = useState('')

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSetName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formattedPhoneNumber = phoneNumber.replace(/[\s()+\\-]/g, '');
        const messageWithDetails = `Olá meu nome é ${name}. ${message}`;
        const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(messageWithDetails)}`;
        window.open(whatsappUrl, '_blank');
        setMessage('')
        setSetName('')
    };

    return (
        <div id="contact" className="p-10">
            <h1 className="text-3xl font-bold">Entre em contato</h1>
            <p className="font-mono">Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo pelo whatsapp.</p>

            <form className="space-y-3 mt-10" onSubmit={handleSubmit}>
                <div className="flex space-x-3 items-center">
                    <Label className="w-32" htmlFor="nome">Nome e sobrenome</Label>
                    <Input
                        id="nome"
                        type="nome"
                        placeholder="Digite seu nome e sobrenome"
                        required
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="flex space-x-3 items-center">
                    <Label className="w-32" htmlFor="message">Mensagem</Label>
                    <Textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Digite sua mensagem"
                        required
                    />
                </div>

                <div className="w-full flex space-x-5 justify-end">
                    <Button type="submit">Enviar Mensagem</Button>
                </div>
            </form>
        </div>
    )
}