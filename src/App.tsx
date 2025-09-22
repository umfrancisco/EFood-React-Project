import Header from "./components/Header"
import ProductsList from "./components/ProductsList"
import { GlobalCss } from "./styles"

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
        <ProductsList />
      </div>
    </>
  )
}

export default App
