
import { Outlet} from "react-router-dom";

import HomeSlider from "../Slider/HomeSlider";

import Catogtilist from "../Product/Catogtilist";
import FutherProduct from "../FutherProduct/FutherProduct";


const Home = () => {
  
    
    return (
        <div>
           <HomeSlider></HomeSlider>
           <Catogtilist></Catogtilist>
           <Outlet></Outlet>  
           <FutherProduct></FutherProduct>
        </div>
    );
};

export default Home;