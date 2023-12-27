// import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import PropTypes from 'prop-types';


const Productdata = ({productData}) => {
    // const data = useLoaderData();
    // console.log(productData);
    return (
        <div className=" w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {
               productData.map(pro => <Product
               key={pro._id}
               pro={pro}
               ></Product>) 
            }
        </div>
    );
};
Productdata.propTypes = {
    productData: PropTypes.array,
};
export default Productdata;