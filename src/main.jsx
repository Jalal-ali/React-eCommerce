import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './pages/Contact.jsx'
import SingleProduct from './pages/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path : "/" ,
    element : < Layout/>,
    children : [
      {
        path : "",
        element : <App/>
      },
      {
        path : "/singleProduct/:id" ,
        element : <SingleProduct/>
      },
      {
        path : "app",
        element : <App/>
      },
      {
        path : "contact",
        element : <Contact/>

      }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
