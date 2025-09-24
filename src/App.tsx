import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GlobalCss } from "./styles"
import Home from "./pages/Home"
import Restaurant from "./pages/Restaurant"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurant',
    element: <Restaurant />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
