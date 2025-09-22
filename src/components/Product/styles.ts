import styled from "styled-components";
import { cor } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
    background-color: ${cor.rosa};
    padding: 8px;
    border: 1px solid ${cor.vermelho};

    ${TagContainer} {
        margin-right: 8px;
        margin-top: 16px;
    }

    img {
        height: 270px;
    }

    h3 {
        margin-top: 8px;
        font-size: 18px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-top: 16px;
    }
`