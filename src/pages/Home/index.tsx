import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import type ProductModel from "../../models/ProductModel";
import sushi from "../../assets/images/sushi.png";
import macarrao from "../../assets/images/macarrao.png";
import Footer from "../../components/Footer";

const list: ProductModel = [
    {
        categories: ["Destaque","Japonesa"],
        image: sushi,
        title: "Hioki Sushi ",
        desc: "Sushi, peixes e outros pratos",
        link: "/",
        id: 1
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        desc: "Prato de macarrão com molho",
        link: "/restaurant",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        desc: "Prato de macarrão com frango",
        link: "/",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        desc: "Prato de macarrão com molho branco",
        link: "/",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        desc: "Prato de macarrão",
        link: "/",
        id: 2
    },
    {
        categories: ["Italiana"],
        image: macarrao,
        title: "La Dolce Vita Trattoria",
        desc: "Prato de macarrão",
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