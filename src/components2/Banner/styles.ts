import styled from "styled-components";
import restBackground from "../../assets/images/macarrao.png";
import { cor } from "../../styles";

export const Container = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${restBackground});
    background-size: cover;
    background-position: center;
    color: ${cor.branco};

    p {
        font-size: 32px;
        font-weight: 100;
        padding-top: 32px;
        padding-left: 170px;
        margin-bottom: 220px;
    }

    h4 {
        font-size: 32px;
        padding-left: 170px;
        padding-bottom: 32px;
    }
`