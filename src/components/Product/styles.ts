import styled from "styled-components";
import { cor } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
    background-color: ${cor.rosa};
    padding: 8px;
    position: relative;

    ${TagContainer} {
        margin-right: 8px;
        margin-top: 16px;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const Title = styled.h3`
    margin-top: 8px;
    font-size: 18px;
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
`

export const Categories = styled.div`
    position: absolute;
    top: 22px;
    right: 20px;
`