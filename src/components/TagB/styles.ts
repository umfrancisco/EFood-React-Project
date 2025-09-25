import styled from "styled-components";
import { cor } from "../../styles";

export const TagContainer = styled.div`
    background-color: ${cor.vermelho};
    color: ${cor.branco};
    font-size: 14px;
    padding: 4px 6px;
    margin: 8px;
    display: inline-block;

    a {
        text-decoration: none;
        color: ${cor.branco};
    }
`

