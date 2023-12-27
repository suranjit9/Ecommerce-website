import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const ProductUpdat = () => {
    
    const allProduct = useLoaderData();
    console.log(allProduct)
    return (
        <div className="w-5/6 mx-auto">
            <h1 className="text-center text-4xl font-semibold mt-3">All Product</h1>
            <div className="flex items-center justify-between">
                <div><h3 className="text-xl">Total Product :{allProduct.length}</h3></div>
                <div>
                    <div className="dropdown dropdown-left dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Product */}
           <div>
            {
              allProduct.map(pro =><div className="" key={pro._id}></div>)  
            }
           </div>
        </div>
    );
};

export default ProductUpdat;