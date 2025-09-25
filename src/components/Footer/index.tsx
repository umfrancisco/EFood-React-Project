import logo from "../../assets/images/logo.svg";
import { Body, Logo } from "./styles";
import sociais from '../../assets/images/redes-sociais.svg';
import { Container } from "./styles";

const Footer = () => (
    <Body>
        <Container>
            <Logo src={logo} alt="efood" />
            <ul>
                <img src={sociais} />
            </ul>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
        </Container>
    </Body>
)

export default Footer;