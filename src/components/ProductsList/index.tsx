import type { ProductModel } from "../../pages/Home";
import Product from "../Product";
import { Container, List } from "./styles";

export type Props = {
    prods: ProductModel[]
}

const ProductsList = ({ prods }: Props) => (
    <Container>
        <List>
            {prods.map((prod) => (
                <Product
                    key={prod.id}
                    titulo={prod.titulo}
                    destacado={prod.destacado}
                    tipo={prod.tipo}
                    avaliacao={prod.avaliacao}
                    descricao={prod.descricao}
                    capa={prod.capa}
                    cardapio={prod.cardapio}
                />
            ))}
        </List>
    </Container>
)

export default ProductsList;