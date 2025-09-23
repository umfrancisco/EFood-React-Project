import Tag from "../Tag";
import { Card, Categories, Img, Text, Title } from "./styles";

type Props = {
    categories: string[],
    image: string,
    title: string,
    desc: string,
    link: string
}

const Product = ({ categories, image, title, desc, link }: Props) => (
    <Card>
        <Img src={image} alt={title} />
        <Categories>
            {categories.map(category => <Tag key={category}>{category}</Tag>)}
        </Categories>
        <Title>{title}</Title>
        <Text>{desc}</Text>
        <Tag>{link}</Tag>
    </Card>
)

export default Product;