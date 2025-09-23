import Product from "../Product";
import { Container, List } from "./styles";
import macarrao from "../../assets/images/macarrao.png";
import sushi from "../../assets/images/sushi.png";

const textSushi = "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!";
const textMacarrao = "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!";

const ProductsList = () => (
    <Container>
        <List>
            <Product categories={["Destaque", "Japonesa"]} image={sushi} title="Hioki Sushi" desc={textSushi} link="Saiba mais"/>
            <Product categories={["Italiana"]} image={macarrao} title="La Dolce Vita Trattoria" desc={textMacarrao} link="Saiba mais"/>
            <Product categories={["Italiana"]} image={macarrao} title="La Dolce Vita Trattoria" desc={textMacarrao} link="Saiba mais"/>
            <Product categories={["Italiana"]} image={macarrao} title="La Dolce Vita Trattoria" desc={textMacarrao} link="Saiba mais"/>
            <Product categories={["Italiana"]} image={macarrao} title="La Dolce Vita Trattoria" desc={textMacarrao} link="Saiba mais"/>
            <Product categories={["Italiana"]} image={macarrao} title="La Dolce Vita Trattoria" desc={textMacarrao} link="Saiba mais"/>
        </List>
    </Container>
)

export default ProductsList;