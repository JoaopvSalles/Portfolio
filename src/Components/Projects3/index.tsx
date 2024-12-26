import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const react = "/Portfolio/assets/react.svg"
const conversorDeMoedas = "/Portfolio/assets/ConversorDeMoedas.png"

export function Projects3() {
    const navigate = useNavigate()

    return(
        <Container>
            <div className="return" onClick={() => navigate(-1)}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                <span>Voltar</span>
            </div>

            <h2>Projeto <span className="react">Conversor de Moedas</span></h2>

            <div className="project">
                <div className="img">
                    <img src={conversorDeMoedas} alt="" />
                </div>
                <div className="description">
                    <h3><span className="react">Descrição</span> do projeto:</h3>
                    <p>
                        Programa criado em HTML CSS PHP utilizando API com o intuito de praticar e desenvolver conhecimento nas tecnologias.
                        <br/>
                        Digite um valor em Real e clique em "Converter", o programa irá fazer a conversão atualizada para o Dolar diretamente pela API do Banco do Brasil e mostrar o resultado na tela.
                    </p>
                </div>
            </div>

            <div className="details">
                <div className="functions">
                    <h3>Principais <span className="react">Funcionalidades</span>:</h3>
                    <p>
                        <img src={react} alt="" /><span>Cálculo de conversão de Real para Dolar</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Integração com API do Banco do Brasil</span>
                    </p>
                </div>

                <div className="techs">
                    <h3>Principais <span className="react">Tecnologias</span>:</h3>
                    <p>
                        <img src={react} alt="" /><span>PHP</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>HTML</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>CSS</span>
                    </p>
                </div>

                <div className="repository">
                    <h3>Onde <span className="react">Encontrar</span> o Projeto:</h3>
                    <a href="https://github.com/JoaopvSalles/Project-PHP-ConversorDeMoedas" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>Ver Repositório</a>
                </div>
            </div>
        </Container>
    )
}