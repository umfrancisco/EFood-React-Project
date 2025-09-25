import styled from "styled-components";
import { cor } from "../../styles";

export const Card = styled.div`
    margin: 0 auto;
    padding: 8px;
    max-width: 320px;
    background-color: ${cor.vermelho};
`

export const Img = styled.img`
    width: 100%;
`

export const Title = styled.h4`
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: 900;
    color: ${cor.branco};
`

export const Text = styled.p`
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 8px;
    line-height: 22px;
    color: ${cor.branco};
`

export const Btn = styled.button`
    color: ${cor.vermelho};
    font-weight: 700;
    font-size: 14px;
    border: none;
    background-color: ${cor.branco};
    height: 24px;
    width: 300px;
`