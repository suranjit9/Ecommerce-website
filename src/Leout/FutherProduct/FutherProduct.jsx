

import Product from "../Product/Product";
import { useEffect, useState } from "react";


const FutherProduct = () => {
    const [cataData, setCataData] = useState();

    useEffect( () => {
       fetch('http://localhost:5000/AddProduct')
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setCataData(data))
      },[])
   
   
    const eletoData = cataData && cataData.filter((a)=> a.type == 'Woman Clothing');
    return (
        <div>
            <div className="w-Full bg-red-100 p-24 mt-4 text-center ">
                    <h2 className="text-4xl font-extralight mb-3">FEATURED PRODUCTS</h2>
                    <p className="text-2xl font-extrabold">Woman Fashion </p>
            </div>
            <div className=" w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
  
            {
               eletoData?.map(pro => <Product
               key={pro._id}
               pro={pro}
               ></Product>) 
            }
        </div>
        </div>
    );
};

export default FutherProduct;