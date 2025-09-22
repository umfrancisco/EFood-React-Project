import styled from "styled-components";
import { cor } from "../../styles";
import bannerImg from "../../assets/images/fundo.png";

export const HeaderLogo = styled.header`
    background-image: url(${bannerImg});
    background-color: ${cor.branco};
    margin: 0 auto;
    text-align: center;
    padding-bottom: 60px;
    padding-top: 40px;
`

export const HeaderTitle = styled.header`
    background-image: url(${bannerImg});
    background-color: ${cor.branco};
    margin: 0 auto;
    text-align: center;
    padding-bottom: 40px;
    padding-top: 60px;
    
    h2 {
        font-size: 36px;
    }
`

export const Logo = styled.img`
    height: 56px;
    vertical-align: text-top;
`