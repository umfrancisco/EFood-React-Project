import styled from "styled-components";
import { cor } from "../../styles";

export const Body = styled.div`
    background-color: ${cor.rosaEscuro};
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    text-align: center;

    ul {
        margin-top: 32px;
        margin-bottom: 80px;
    }

    p {
        padding-bottom: 40px;
        font-size: 10px;
    }
`

export const Logo = styled.img`
    height: 56px;
    vertical-align: text-top;
    margin-top: 40px;
`