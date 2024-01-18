import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../Leout/Home/Home";
import Login from "../Leout/Header/Login";
import SingUp from "../Leout/Header/SingUp";
import AddProduct from "../AddProduct/Addptoduct";
import Productdata from "../Leout/Product/Productdata";

// import Product from "../Leout/Product/Product";
import AddToCard from "../Leout/AddToCard/AddToCard";
import AddCardProduct from "../Leout/AddToCard/AddCardProduct";
import SingalProduct from "../Leout/Product/SingalProduct";

import Toy from "../Leout/Catogory/Toy";
import ManCloth from "../Leout/Catogory/ManCloth";
import WmanClothe from "../Leout/Catogory/WmanClothe";
import FutherProduct from "../Leout/FutherProduct/FutherProduct";
import Product from "../Leout/Product/Product";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Productdata></Productdata>,
            loader: () => fetch('http://localhost:5000/AddProduct')

          },
          {
            path: '/Toy',
            element: <Toy></Toy>,
            loader: () => fetch('http://localhost:5000/AddProduct')

          },
          {
            path: '/Man Clothing',
            element: <ManCloth></ManCloth>,
            loader: () => fetch('http://localhost:5000/AddProduct')
          },
          {
            path: '/Woman Clothing',
            element: <WmanClothe></WmanClothe>,
            loader: () => fetch('http://localhost:5000/AddProduct')
          }

        ],
       
      },
     
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      },
      {
        path: '/Product',
        element: <Productdata></Productdata>,
        loader: () => fetch('http://localhost:5000/AddProduct')

      },
      
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },

      {
        path: '/addToCard/:id',
        element: <AddCardProduct></AddCardProduct>,
        //
      },
      {
        path: '/addtocardPage',
        element: <AddToCard></AddToCard>

      },
      {
        path: '/singalProduct/:id',
        element: <SingalProduct></SingalProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/AddProduct/${params.id}`)

      },
      {
        path:'/Fether',
        element:<FutherProduct></FutherProduct>,
        loader: () => fetch('http://localhost:5000/AddProduct'),
      }
    ],
  },
]);

export default router;