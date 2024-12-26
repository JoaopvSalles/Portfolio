import styled from "styled-components"

export const Container = styled.div`
    margin: auto;
    width: 80%;
    margin-bottom: 5rem;

    @media (max-width: 1080px) {
        width: 90%;
    }

    span.react {
        color: var(--react);
    }

    div.return {
        cursor: pointer;
        color: var(--black);
        margin-top: 1rem;

        svg {
            margin-right: 3px;
            margin-bottom: -2px;
        }
    }

    h2 {
        color: var(--black);
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    div.project {
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        div.img {
            img {
                width: 95%;
            }
        }

        div.description {
            text-align: start;

            h3 {
                color: var(--black);
                font-size: 1.5rem;
                margin-bottom: 0.8rem;
            }

            p {
                color: var(--black);
                font-size: 1rem;
            }
        }
    }

    div.details {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 2rem;

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        div.functions {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.techs {

            h3 {
                color: var(--black);
                margin-bottom: 0.4rem;
                font-size: 1.5rem;
            }

            p {
                margin-top: 0.1rem;

                img {
                    height: 1.2rem;
                    width: 1.2rem;
                    margin-right: 0.5rem;
                    margin-bottom: -3px;
                }

                span {
                    color: var(--black);
                }
            }
        }

        div.repository {
            h3 {
                color: var(--black);
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }

            a {
                border: 1px groove var(--react);
                border-radius: 10px;
                text-decoration: none;
                font-weight: bold;
                color: var(--react);
                margin-right: 1rem;
                padding: 0.8rem;
                transition: 500ms;
            }

            &:hover {
                color: var(--white);
                background-color: var(--react);
                transition: 500ms;
            }

            svg {
                margin-right: 0.5rem;
                margin-bottom: -1px;

                &:hover {
                    fill: var(--white);
                }
            }
        }
    }
`