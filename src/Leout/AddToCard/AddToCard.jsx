
import useAddtoCArd from "../../Hook/useAddtoCArd";
import AddCardProduct from "./AddCardProduct";

// const fromData = { name, price, Supplier, rating, type, photo, description }

const AddToCard = () => {
    const [addToCardLenth] = useAddtoCArd();
    
    return (
        <div className="mt-2">
         
            {
                addToCardLenth && addToCardLenth.map(product =><AddCardProduct key={product._id} product={product} ></AddCardProduct>)
            }
        </div>
    );
};

export default AddToCard;