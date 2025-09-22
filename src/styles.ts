import { createGlobalStyle } from "styled-components";

export const cor = {
    vermelho: "#E66767",
    rosa: "#FFF8F2",
    branco: "#fff",
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    
    body {
        background-color: ${cor.rosa};
        color: ${cor.vermelho};
    }
`