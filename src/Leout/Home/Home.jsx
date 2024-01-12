
import { Outlet} from "react-router-dom";

import HomeSlider from "../Slider/HomeSlider";

import Catogtilist from "../Product/Catogtilist";


const Home = () => {

    
    return (
        <div>
           <HomeSlider></HomeSlider>
           <Catogtilist></Catogtilist>
           <Outlet></Outlet>  
        </div>
    );
};

export default Home;