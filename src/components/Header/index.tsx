import { HeaderLogo, Logo, Title } from "./styles";
import logo from "../../assets/images/logo.svg";

const Header = () => (
    <>
        <HeaderLogo>
            <Logo src={logo} alt="efood" />
            <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
        </HeaderLogo>
    </>
)

export default Header;