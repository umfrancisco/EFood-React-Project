import { Border, Card, Categories, Img, Tag, Text, Title } from "./styles";
import type { ProductModel } from "../../pages/Home";

const Product = ({ titulo, destacado, tipo, avaliacao, descricao, capa }: ProductModel) => {

    const tagDestacado = "Destaque";

    function getDestaque() {
        if (destacado == true) {
            return <Tag>{tagDestacado}</Tag>;
        }
    }

    return (
        <Card>
            <Img src={capa} alt={titulo} />
            <Categories>
                <Tag>{tipo}</Tag>
                {getDestaque()}
            </Categories>
            <Border>
                <div className="title-review">
                    <Title>{titulo}</Title>
                    <span>{avaliacao}</span>
                </div>
                <Text>{descricao}</Text>
            </Border>
        </Card>
    )
}

export default Product;