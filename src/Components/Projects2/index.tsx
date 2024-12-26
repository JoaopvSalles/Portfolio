import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const react = "/assets/react.svg"
const dtMoney = "/assets/dtMoney.png"

export function Projects2() {
    const navigate = useNavigate()

    return(
        <Container>
            <div className="return" onClick={() => navigate(-1)}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                <span>Voltar</span>
            </div>

            <h2>Projeto <span className="react">DT Money</span></h2>

            <div className="project">
                <div className="img">
                    <img src={dtMoney} alt="" />
                </div>
                <div className="description">
                    <h3><span className="react">Descrição</span> do projeto:</h3>
                    <p>
                        Programa para calcular suas despesas.
                        <br/><br/>
                        Como cadastar uma nova transação:
                        <br/>
                            - clique em "nova transação"
                            <br/>
                            - digite um título,
                            <br/>
                            - digite um valor em R$,
                            <br/>
                            - marque uma opção "entrada" ou "saída" caso você tenha recebido ou gasto dinheiro com a transação,
                            <br/>
                            - digite uma categoria,
                            <br/>
                            - clique em "cadastrar".
                            <br/><br/>
                        Sua transição será adicionada a uma lista com todas as informações fornecidas e será gerada uma data exata do dia em que foi cadastrado a transição, e então você poderá adicionar uma nova transação.
                        <br/><br/>
                        Conforme você adiciona novas transações o programa irá calcular automaticamente, seu saldo total de "entrada" em R$, seu saldo total de "saída" em R$, e seu saldo "final" em R$ positivo ou negativo.
                    </p>
                </div>
            </div>

            <div className="details">
                <div className="functions">
                    <h3>Principais <span className="react">Funcionalidades</span>:</h3>
                    <p>
                        <img src={react} alt="" /><span>Criar novos cards com transações</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Adicionar data do dia em que a trasação é criada</span>
                    </p>
                    <p>
                        <img src={react} alt="" /><span>Calcular saldos de Entrada, Saída e Total</span>
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
                        <img src={react} alt="" /><span>Styled-Components</span>
                    </p>
                    
                </div>

                <div className="repository">
                    <h3>Onde <span className="react">Encontrar</span> o Projeto:</h3>
                    <a href="https://github.com/JoaopvSalles/dtmoney" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>Ver Repositório</a>
                </div>
            </div>
        </Container>
    )
}