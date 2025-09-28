import { useState } from 'react';
import pizza from '../../assets/images/pizza.png';
import { Btn, Card, CloseBtn, Img, List, Modal, ModalContent, Text, Title } from './styles';

type FoodItems = {
    id: number
    imgUrl: string
    title: string
    description: string
}

const mock: FoodItems[] = [
    {
        id: 1,
        imgUrl: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
        id: 2,
        imgUrl: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
        id: 3,
        imgUrl: pizza,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    }
]

const Food = () => {

    const [modalAtiva, setModalAtiva] = useState(false);

    return (
        <>
            <Modal className={modalAtiva ? 'visible' : ''}>
                <ModalContent className={modalAtiva ? 'container visible' : 'container'}>
                    <div className='foodImg'>
                        <img src={pizza} />
                    </div>
                    <div className='desc'>
                        <CloseBtn onClick={() => setModalAtiva(false)}>x</CloseBtn>
                        <Title>Pizza Marguerita</Title>
                        <Text>
                            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                            <br/>
                            <br/>
                            Serve: de 2 a 3 pessoas
                        </Text>
                        <Btn>Adicionar ao carrinho - R$ 60,90</Btn>
                    </div>
                </ModalContent>
            </Modal>
            <List>
                {mock.map((food) => (
                    <Card key={food.id}>
                        <Img src={food.imgUrl} onClick={() => setModalAtiva(true)}/>
                        <Title>{food.title}</Title>
                        <Text>{food.description}</Text>
                        <Btn>Adicionar ao carrinho</Btn>
                    </Card>
                ))}
            </List>
        </>
    )
}

export default Food;