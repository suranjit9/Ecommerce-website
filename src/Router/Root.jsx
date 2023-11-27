import { Outlet } from "react-router-dom";
import NavBar from "../Leout/Header/NavBar";



const Root = () => {
    return (
        <div className="w-screen mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;