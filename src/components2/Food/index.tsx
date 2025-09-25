import pizza from '../../assets/images/pizza.png';
import { Btn, Card, Img, Text, Title } from './styles';

const Food = () => (
    <Card>
        <Img src={pizza} />
        <Title>Pizza Marguerita</Title>
        <Text>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Text>
        <Btn>Adicionar ao carrinho</Btn>
    </Card>
)

export default Food;