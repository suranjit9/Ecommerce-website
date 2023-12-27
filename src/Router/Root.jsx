import { Outlet } from "react-router-dom";
import NavBar from "../Leout/Header/NavBar";
import Footer from "../Leout/Footer/Footer";



const Root = () => {
    return (
        <div className="w-screen mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;