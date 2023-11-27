import { useLoaderData } from "react-router-dom";
import Product from "./Product";



const Productdata = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className=" w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {
               data.map(pro => <Product
               key={pro._id}
               pro={pro}
               ></Product>) 
            }
        </div>
    );
};

export default Productdata;