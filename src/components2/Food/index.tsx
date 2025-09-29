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
        title: "Pizza Portuguesa",
        description: "A clássica Portuguesa: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
        id: 3,
        imgUrl: pizza,
        title: "Pizza Calabresa",
        description: "A clássica Calabresa: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    }
]

const Food = () => {

    const [modalAtiva, setModalAtiva] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    return (
        <>
            <Modal className={modalAtiva ? 'visible' : ''}>
                <ModalContent className={modalAtiva ? 'container visible' : 'container'}>
                    <div className='foodImg'>
                        <img src={pizza} />
                    </div>
                    <div className='desc'>
                        <CloseBtn onClick={() => setModalAtiva(false)}>x</CloseBtn>
                        <Title>{modalTitle}</Title>
                        <Text>
                            {modalDescription}
                        </Text>
                        <div></div>
                        <Text>
                            Serve: de 2 a 3 pessoas
                        </Text>
                        <Btn>Adicionar ao carrinho - R$ 60,90</Btn>
                    </div>
                </ModalContent>
            </Modal>
            <List>
                {mock.map((food) => (
                    <Card key={food.id}>
                        <Img src={food.imgUrl} onClick={() => {
                            setModalAtiva(true)
                            setModalTitle(food.title)
                            setModalDescription(food.description)
                        }}/>
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