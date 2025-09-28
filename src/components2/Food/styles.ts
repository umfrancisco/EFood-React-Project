import styled from "styled-components";
import { cor } from "../../styles";

export const Card = styled.li`
    padding: 8px;
    max-width: 320px;
    background-color: ${cor.vermelho};
    list-style-type: none;
`

export const List = styled.ul`
    margin: 0 auto;
    margin-top: 56px;
    margin-bottom: 120px;
    max-width: 1024px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
`

export const Img = styled.img`
    width: 100%;
`

export const Title = styled.h4`
    margin-top: 8px;
    margin-bottom: 16px;
    font-weight: 900;
    color: ${cor.branco};
`

export const Text = styled.p`
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 22px;
    color: ${cor.branco};
`

export const CloseBtn = styled.span`
    color: ${cor.branco};
    font-size: 28px;
    font-weight: 100;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 8px;
    cursor: pointer;
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

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    

    &.visible {
        background-color: rgba(0, 0, 0, 0.73);
        width: 100%;
        height: 100%;
    }

    .container {
        margin: 0 auto;
        margin-top: 64px;
        max-width: 1024px;
    }

    img {
        height: 280px;
        width: 280px;
        object-fit: cover;
    }

    div {
        margin: 32px 0;
        margin
    }

    div.foodImg {
        margin-left: 32px;
        margin-right: 24px;
    }

    div.desc {
        margin-right: 32px;
    }
`

export const ModalContent = styled.div`
    position: relative;
    display: none;
    background-color: ${cor.vermelho};

    &.visible {
        display: flex;
    }
`