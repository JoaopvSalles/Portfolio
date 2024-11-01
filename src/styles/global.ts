import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  :root {
    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};

    --react: ${props => props.theme.colors.react};

    --border: ${props => props.theme.colors.border};

    --background: ${props => props.theme.colors.background};
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
  }

  body {
    -webkit-font-smoothing: antialiased;

    font-family: 'Roboto', sans-serif;

    background-color: var(--background);
  }
`