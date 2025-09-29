import Product from "../Product";
import { Container, List } from "./styles";
import type ProductModel from "../../models/ProductModel";

export type Props = {
    prods: ProductModel[]
}

const ProductsList = ({ prods }: Props) => (
    <Container>
        <List>
            {prods.map((prod) => (
                <Product 
                    key={prod.id} 
                    categories={prod.categories} 
                    image={prod.image}
                    title={prod.title}
                    review={prod.review} 
                    desc={prod.desc} 
                    link={prod.link}
                />
            ))}
        </List>
    </Container>
)

export default ProductsList;