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
import TaC from "../Leout/Catogory/TaC";
import ManCloth from "../Leout/Catogory/ManCloth";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
          children:[
            {
              path: '/Product',
              element: <Productdata></Productdata>,
              // loader:()=>fetch('http://localhost:5000/AddProduct')
            },
          ],
          loader: ()=>fetch('http://localhost:5000/AddProduct')
        },
        {
            path:'/login',
            element:<Login></Login>
          },
          {
            path: '/singUp',
            element: <SingUp></SingUp>
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
            element:<AddToCard></AddToCard>
            
          },
          {
            path:'/singalProduct/:id',
            element: <SingalProduct></SingalProduct>,
            loader:({params})=>fetch(`http://localhost:5000/AddProduct/${params.id}`)
            
          }
      ],
    },
  ]);

export default router;