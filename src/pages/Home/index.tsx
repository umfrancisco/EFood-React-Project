import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import type ProductModel from "../../models/ProductModel";
import sushi from "../../assets/images/sushi.png";
import macarrao from "../../assets/images/macarrao.png";
import Footer from "../../components/Footer";

const list: ProductModel[] = [
    {
        categories: ["Destaque","Japonesa"],
        image: sushi,
        title: "Hioki Sushi ",
        review: 4.6,
        desc: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        link: "/",
        id: 1
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        review: 4.7,
        desc: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        link: "/restaurant",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        review: 4.7,
        desc: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        link: "/",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        review: 4.7,
        desc: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        link: "/",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        review: 4.7,
        desc: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        link: "/",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        review: 4.7,
        desc: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        link: "/",
        id: 2
    }
]

const Home = () => (
    <>
        <Header />
        <ProductsList prods={list}/>
        <Footer />
    </>
)

export default Home;