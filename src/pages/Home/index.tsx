import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

export interface ItensCardapio {
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
}

export type ProductModel = {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: ItensCardapio[]
}

const Home = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    return (
        <>
            <Header />
            <ProductsList prods={products}/>
            <Footer />
        </>
    )
}

export default Home;