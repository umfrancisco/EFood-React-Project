import styled from "styled-components";
import { cor } from "../../styles";

export const Card = styled.div`
    background-color: ${cor.rosa};
    padding: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    height: 210px;
`

export const Title = styled.h3`
    margin: 8px;
    font-size: 18px;
`

export const Tag = styled.span`
    background-color: #E66767;
    color: #fff;
    font-size: 14px;
    padding: 4px 6px;
    display: inline-block;
    margin-left: 8px;
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin: 16px 8px;
`

export const Categories = styled.div`
    position: absolute;
    top: 22px;
    right: 20px;
`

export const Border = styled.div`
    border: 1px solid ${cor.vermelho};
    border-top: none;

    .title-review {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 16px;
    }

    .star {
        
    }
`