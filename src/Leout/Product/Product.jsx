
import PropTypes from 'prop-types';
import { IoMdStar } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAddtoCArd from '../../Hook/useAddtoCArd';
import { Link } from 'react-router-dom';
const Product = ({ pro }) => {
    const { _id, name, price, Supplier, rating, type, photo, description } = pro;
    const [currentButton, setCurrentButton] = useState('');
    const [showButtons, setShowButtons] = useState(false);
    const [refetch] = useAddtoCArd();
    const addtoCard = () => {
        const Product = { name, price, Supplier, rating, type, photo, description };
        fetch('http://localhost:5000/addToCard', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Product)
        })
            .then(res => res.json())
            .then(data => {

                refetch()
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Add To card Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            }
            )
    }


    return (
        <div className="rounded-lg mt-3"
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            
            <div className="card  bg-base-100 shadow-xl">

            
                <div className='relative'>
                <Link to={`/singalProduct/${_id}`}>
                    <figure><img className='rounded-lg h-52 object-cover' src={photo} alt="Product" /></figure>
                    </Link>
                    <div className=' absolute inset-x-0 bottom-0 h-16'>
                        {
                            showButtons && (
                                <div className="flex justify-center gap-3 mt-1 ">
                                    {/* <Link to={`/product/${_id}`}> */}
                                    <button
                                        // className={`btn ${currentButton === 'addToCart' ? 'btn-active' : ''}`}
                                        // // onClick={() => setCurrentButton('addToCart')}
                                        className='btn hidden md:block md:hover:block'
                                        onClick={addtoCard}


                                    >
                                        <FaCartShopping></FaCartShopping>
                                    </button>
                                    {/* </Link> */}
                                    
                                        <button
                                            // className={`btn ${currentButton === 'viewProduct' ? 'btn-active' : ''}`}
                                            // onClick={() => setCurrentButton('viewProduct')}
                                            className='btn hidden md:block  md:hover:block'
                                            onClick={() => document.getElementById('my_modal_4').showModal()}
                                        >
                                            <IoEyeOutline></IoEyeOutline>
                                        </button>
                                    {/* </Link> */}
                                    <button
                                        // className={`btn ${currentButton === 'addLove' ? 'btn-active' : ''}`}
                                        // onClick={() => setCurrentButton('addLove')}
                                        className='btn hidden md:block  md:hover:block'
                                    >
                                        <CiStar className='text-2xl '></CiStar>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    
                </div>
                <Link to={`/singalProduct/${_id}`}>

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
                        <Link to={`/singalProduct/${_id}`}>
                            <button
                                className={`btn btn-circle w-full ${currentButton === 'addToCart' ? 'btn-active' : ''}`}
                                onClick={() => setCurrentButton('addToCart')}
                            >
                                Buy Now
                            </button>
                        </Link>

                    </div>
                </div>
                </Link>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Heloo</h3>
                    <img className='w-28' src={photo} alt="" />
                    <p className="py-4">Click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            
        </div>
    );
};

Product.propTypes = {
    pro: PropTypes.object
};

export default Product;
