
import PropTypes from 'prop-types';
import { IoMdStar } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { useState } from 'react';
const Product = ({ pro }) => {
    const { name, price, Supplier, rating, type, photo, description } = pro;

    const [currentButton, setCurrentButton] = useState('');
    const [showButtons, setShowButtons] = useState(false);

    return (
        <div className=" "
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <div className="card  bg-base-100 shadow-xl">

             
                    <div className='relative'>
                    <div className=' absolute pl-[25%] pt-[45%]'>
                    {
                        showButtons && (
                            <div className="flex justify-center gap-3 mt-1 ">
                                <button
                                    className={`btn ${currentButton === 'addToCart' ? 'btn-active' : ''}`}
                                    onClick={() => setCurrentButton('addToCart')}
                                >
                                    <FaCartShopping></FaCartShopping>
                                </button>
                                <button
                                    className={`btn ${currentButton === 'viewProduct' ? 'btn-active' : ''}`}
                                    onClick={() => setCurrentButton('viewProduct')}
                                >
                                    <IoEyeOutline></IoEyeOutline>
                                </button>
                                <button
                                    className={`btn ${currentButton === 'addLove' ? 'btn-active' : ''}`}
                                    onClick={() => setCurrentButton('addLove')}
                                >
                                    <CiStar></CiStar>
                                </button>
                            </div>
                        )
                    }
                    </div>
                        <figure><img className=' h-52 object-cover' src={photo} alt="Product" /></figure>
                     
                    </div>
                    
                
                <div className="p-3">
                    <div className='flex justify-between mt-4'>
                        <h2 className="text-xl font-medium">{name}</h2>
                        <div className='flex justify-between items-center'>
                            <IoMdStar className='text-xl text-green-600'></IoMdStar>
                            <p className='font-semibold'> {rating}/5</p>
                        </div>

                    </div>
                    <p>{description.length > 50 ? `${description.slice(0, 50)}...` : description}</p>
                    <div className="flex justify-between mt-4">
                        <p className='font-normal'>Price: ${price}</p>
                        <p className='font-normal'>Supplier: {Supplier}</p>
                    </div>
                    <div className="flex justify-between mt-1">

                        <p className='font-extralight'>Type: {type}</p>
                    </div>
                    <div className='sm:text-center  mt-3 md:hidden'>
                    <button
                        className={`btn btn-circle w-full ${currentButton === 'addToCart' ? 'btn-active' : ''}`}
                        onClick={() => setCurrentButton('addToCart')}
                        >
                        Buy Now
                     </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    pro: PropTypes.object
};

export default Product;
