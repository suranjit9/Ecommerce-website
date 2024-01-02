import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Toy = () => {
    const data = useLoaderData();
    const eletoData = data.filter((a)=> a.type === 'Toy');
    return (
        <div className=" w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {
               eletoData?.map(pro => <Product
               key={pro._id}
               pro={pro}
               ></Product>) 
            }
        </div>
    );
};

export default Toy;