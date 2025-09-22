import Tag from "../Tag";
import macarrao from "../../assets/images/macarrao.png";
import { Card } from "./styles";

const Product = () => (
    <Card>
        <img src={macarrao} />
        <h3>La Dolce Vita Trattoria</h3>
        <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! 
            Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. 
            Entrega rápida, pratos bem embalados e sabor inesquecível. 
            Peça já!
        </p>
        <Tag>Saiba mais</Tag>
    </Card>
)

export default Product;