import { HeaderLogo, HeaderTitle, Logo } from "./styles";
import logo from "../../assets/images/logo.png";

const Header = () => (
    <>
        <HeaderLogo>
            <Logo src={logo} alt="efood" />
        </HeaderLogo>
        <HeaderTitle>
            <h2>Viva experiências gastronômicas <br /> no conforto da sua casa</h2>
        </HeaderTitle>
    </>
)

export default Header;