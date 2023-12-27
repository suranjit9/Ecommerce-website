import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { MdAccountCircle, MdFavoriteBorder } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import logo from '../../../public/Screenshot 2023-08-06 134206.png'

const NavBar = () => {
    const [productLength, setProductLenght] = useState('');
    useEffect(
        ()=>{
            fetch('http://localhost:5000/addToCard')
            .then(res => res.json())
            .then(data => setProductLenght(data))
        }
        ,[])
    const { user, logOut } = useContext(authContext);
    const link = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {user && 
        <><li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
        <li><NavLink to={'/ProductUpdat'}>ProductUpdat</NavLink></li></>
        }
        <li><NavLink to={'/Product'}>Product</NavLink></li>
        

    </>
    const hendalSingOut = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}


                    </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}

                </ul>

            </div>
            <div className="navbar-end">
                <div className="flex gap-1 mr-2">
                    <h1 className="text-xl"><IoBagAddOutline /></h1><sup className="text-red-600 font-semibold text-sm  ">{productLength.length}</sup>
                    <h1 className="text-xl"><MdFavoriteBorder /></h1><sup className="text-red-600 font-semibold text-sm">0</sup>
                </div>
                {
                    user && <div className="dropdown dropdown-end pr-5">
                    <label tabIndex={0} className="text-3xl"><MdAccountCircle /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="p-3 text-xl font-semibold text-green-600">Profile</li>
                        {
                            user ? <button onClick={hendalSingOut} className="btn btn-sm bg-red-500 text-white hover:text-black">Log Out</button>
                                : <Link to='/LogIn'><button className="btn btn-sm">Log IN</button></Link>
                        }
                        
                    </ul>
                </div>
                }
                <div>
                    {
                      user ? "" : <Link to={'/singUp'}><button className="btn btn-sm text-green-600 font-bold border-blue-500">Sing Up</button></Link>  
                    }
                </div>
                {/* <h1 className="hidden md:visible uppercase font-bold ">{user?.displayName || user?.email}</h1> */}
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                    <div className="text-3xl items-center">
                        <MdAccountCircle />
                    </div>
                </label> */}

                {/* {
                    user ? <button onClick={hendalSingOut} className="btn btn-sm bg-red-500 text-white hover:text-black">Log Out</button>
                        : <Link to='/LogIn'><button className="btn btn-sm">Log IN</button></Link>
                } */}

            </div>
        </div>
    );
};

export default NavBar;