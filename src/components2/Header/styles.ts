import styled from "styled-components";
import { cor } from "../../styles";
import bannerImg from "../../assets/images/fundo.png";

export const HeaderBar = styled.header`
    background-image: url(${bannerImg});
    background-color: ${cor.branco};
    padding: 48px;

    img {
        height: 56px;
    }

    a, p {
        text-decoration: none;
        text-size: 18px;
        font-weight: bold;
        color: ${cor.vermelho};
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`