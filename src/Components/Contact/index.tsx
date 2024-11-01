import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "./style";

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const templateParams = {
            from_name: name,
            from_email: email,
            message,
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || '', 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '', 
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
        )
        .then(() => {
            setStatus('E-mail enviado com sucesso!');
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            setStatus('Erro ao enviar o e-mail. Tente novamente.');
            console.error('Erro ao enviar o e-mail:', error);
        })
        .finally(() => {
            setIsSending(false);
        });
    };

    return (
        <Container>
            <title>João - Contato</title>

            <header>
                <h2>Entre em <span className="react">contato</span> comigo:</h2>
                <p>Sinta-se à vontade para entrar em contato comigo pelas redes sociais ou enviando um email.</p>
            </header>

            <section className="redes">
                <h3>Minhas <span className="react">Redes Sociais</span>:</h3>
                <a href="https://www.linkedin.com/in/joaovecchio/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>LinkeIn</a>
                <a href="https://github.com/JoaopvSalles" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>Github</a>
            </section>

            <section className="email">
                <h3>Me envie um <span className="react">Email</span>:</h3>

                <form onSubmit={sendEmail}>
                    <label htmlFor="name">Seu nome</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        required
                    />

                    <label htmlFor="email">Seu email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemplo@email.com"
                        required
                    />

                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Olá, ..."
                        required
                    ></textarea>

                    <button type="submit" disabled={isSending}>
                        {isSending ? 'Enviando...' : 'Enviar email'}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>
                    </button>
                </form>

                {status && (
                    <p className={`status-message ${status.includes('sucesso') ? 'success' : 'error'}`}>
                        {status}
                    </p>
                )}
                
            </section>
        </Container>
    );
}