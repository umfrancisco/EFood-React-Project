import { Link } from "react-router-dom";
import Tag from "../Tag";
import TagB from "../TagB";
import { Border, Card, Categories, Img, Text, Title } from "./styles";

type Props = {
    categories: string[],
    image: string,
    title: string,
    review: number,
    desc: string,
    link: string
}

const Product = ({ categories, image, title, review, desc, link }: Props) => (
    <Card>
        <Img src={image} alt={title} />
        <Categories>
            {categories.map(category => <Tag key={category}>{category}</Tag>)}
        </Categories>
        <Border>
            <div className="title-review">
                <Title>{title}</Title>
                <span>{review}</span>
            </div>
            <Text>{desc}</Text>
            <TagB>
                <Link to={link}>Saiba mais</Link>
            </TagB>
        </Border>
    </Card>
)

export default Product;