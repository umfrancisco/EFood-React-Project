import { Container, HeaderBar } from "./styles";
import logo from "../../assets/images/logo.svg";

const Header = () => (
    <HeaderBar>
        <Container>
            <a href="/">Restaurantes</a>
            <img src={logo} />
            <p>0 produto(s) no carrinho</p>
        </Container>
    </HeaderBar>
)

export default Header;