import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const react = "/Portfolio/assets/react.svg"
const PortfolioBlack = "/Portfolio/assets/PortfolioBlack.png"
const PortfolioWhite = "/Portfolio/assets/PortfolioWhite.png"

export function Projects1() {
    const navigate = useNavigate()

    const images = [PortfolioBlack, PortfolioWhite];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(null);

    const changeImage = (direction: any) => {
        setAnimationDirection(direction);

        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => {
                if (direction === "next") {
                    return (prevIndex + 1) % images.length;
                } else {
                    return (prevIndex - 1 + images.length) % images.length;
                }
            });
            setAnimationDirection(null); // reset direction after animation
        }, 500); // 500ms must match the animation duration
    };

    const nextImage = () => changeImage("next");
    const prevImage = () => changeImage("prev");


    return(
        <Container>
            <div className="return" onClick={() => navigate(-1)}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                <span>Voltar</span>
            </div>

            <h2>Projeto <span className="react">Portfólio</span></h2>

            <div className="project">
                <div className="img-carousel">
                    <button className="prev" onClick={prevImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                        </svg>
                    </button>

                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Imagem ${index}`}
                            className={`
                                ${index === currentImageIndex ? "active" : ""}
                                ${animationDirection === "next" && index === (currentImageIndex + 1) % images.length ? "next-enter" : ""}
                                ${animationDirection === "next" && index === currentImageIndex ? "next-exit" : ""}
                                ${animationDirection === "prev" && index === (currentImageIndex - 1 + images.length) % images.length ? "prev-enter" : ""}
                                ${animationDirection === "prev" && index === currentImageIndex ? "prev-exit" : ""}
                            `}
                        />
                    ))}

                    <button className="next" onClick={nextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                            <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/>
                        </svg>
                    </button>
                </div>
                <div className="description">
                    <h3><span className="react">Descrição</span> do projeto:</h3>
                    <p>
                        Este é o meu próprio portfólio, desenvolvido com o objetivo de apresentar meus principais projetos pessoais e habilidades de desenvolvimento web.
                        <br/>
                        Utilizando pricinpalmente TypeScript e React, este portfólio é uma plataforma que destaca minha experiência em desenvolvimento de software.</p>
                </div>
            </div>

            <div className="details">
                <div className="functions">
                    <h3>Principais <span className="react">Funcionalidades</span>:</h3>
                    <p>
                        <img src={react} alt="" /><span>Visualizar projetos</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Alterar entre tema claro ou escuro</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Filtrar projetos por tag</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Enviar Email para contato</span>
                    </p>
                </div>

                <div className="techs">
                    <h3>Principais <span className="react">Tecnologias</span>:</h3>
                    <p>
                        <img src={react} alt="" /><span>Javascript</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Typescript</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>React</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>HTML</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>CSS</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Vite</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Styled-Components</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Emailjs</span>
                    </p>
                    
                </div>

                <div className="repository">
                    <h3>Onde <span className="react">Encontrar</span> o Projeto:</h3>
                    <a href="https://github.com/JoaopvSalles" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>Ver Repositório</a>
                </div>
            </div>
        </Container>
    )
}