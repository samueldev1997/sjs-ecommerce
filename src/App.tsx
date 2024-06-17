import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import { DetailProduct } from "./pages/DetailProduct"

import { Layout } from "./components/Layout"

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/detail/:id',
                element: <DetailProduct/>
            }
        ]
    }
])

export { router } ;