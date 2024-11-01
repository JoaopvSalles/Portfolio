import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            white: string,
            black: string,
            react: string,
            border: string,
            background: string,
        },
    }
}