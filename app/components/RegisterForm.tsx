'use client';
import * as React from "react";
import Image from "next/image";
import { useState } from "react";

type FormInputProps = {
    id: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<FormInputProps> = ({ id, placeholder, type = "text", value, onChange }) => (
    <div className="justify-center items-start px-3 py-2 mt-5 rounded-xl border-2 border-solid backdrop-blur-[5px] bg-neutral-500 bg-opacity-50 border-stone-300 max-md:pr-5 relative">
        <label htmlFor={id} className="sr-only"> {placeholder} </label>
        <input id={id} type={type} placeholder={placeholder} className="bg-transparent border-none outline-none text-white w-full" aria-label={placeholder} value={value} onChange={onChange} />
    </div>
);

    export default function RegisterForm() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [error, setError] = useState<string | null>(null);
        const [success, setSuccess] = useState("");

        const validateEmail = (email: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const validatePhone = (phone: string) => {
            const phoneRegex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
            return phoneRegex.test(phone);
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setError(null);
            setSuccess("");

            if (name === "" || email === "" || phone === "") {
                setError("Preencha todos os campos.");
                return;
            }
            if (!validateEmail(email)) {
                setError("Entre com um endereço de e-mail válido.");
                return;
            }

            if (!validatePhone(phone)) {
                setError("Entre com um número de telefone válido.");
                return;
            }
    
            try {
                const response = await fetch("/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, phone }),
                });
    
                if (!response.ok) {
                    throw new Error("Falha em enviar o formulário. Tente novamente.");
                }
    
                const data = await response.json();
                setSuccess("Formulário enviado com sucesso!");
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Ocorreu um erro no envio do formulário.");
                }
            }
        };
    

    return (
        <section className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow px-6 py-5 mt-7 w-full text-lg font-medium leading-10 rounded-xl border-solid backdrop-blur-[2px] bg-black bg-opacity-50 border-[3px] border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-xl font-bold leading-10 mt-10">Associação de Surf de Jaconé</h2>
                <img src="/Vector.svg" alt="Vetor" className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 w-32 h-42" />
                <form className="mt-6 pt-4" onSubmit={handleSubmit}>
                    <FormInput id="nameInput" placeholder="Informe o seu nome..." value={name} onChange={(e) => setName(e.target.value)} />
                    <FormInput id="emailInput" type="email" placeholder="Informe o seu melhor e-mail..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <FormInput id="phoneInput" placeholder="Informe o seu telefone com DDD..." value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit" className="py-2 px-24 sm:px-20 mt-7 text-xl sm:text-lg font-bold leading-10 text-center rounded-xl bg-blue-600 border-blue-600 border-solid shadow-2xl border-[3px] bg-blue-600 bg-opacity-50 hover:bg-blue-500 max-w-full max-md:py-2 max-md:px-24 max-md:mt-5 max-md:text-lg max-md:w-full mx-auto block">JUNTE-SE AGORA!</button>
                    {error && <p className="text-red-500 text-center mt-5 pt-5">{error}</p>}
                    {success && <p className="text-green-500 text-center mt-5 pt-5">{success}</p>}
                    <p className="text-white text-center mt-5 pt-5">
                        Já possui conta? <a href="#" className="text-blue-400 hover:text-blue-600">Entre aqui.</a>
                    </p>
                </form>
            </div>
        </section>
    );
}
