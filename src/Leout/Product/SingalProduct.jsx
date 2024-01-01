import { useLoaderData } from "react-router-dom";


const SingalProduct = (id) => {
    
    const data = useLoaderData();
    console.log(data);
    console.log(id);
  
   
    return (
        <div>
            <img src={data.photo} alt="" />
            <h1>{data.name}</h1>
        </div>
    );
};

export default SingalProduct;