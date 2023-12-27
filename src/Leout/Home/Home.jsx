
import { useLoaderData } from "react-router-dom";
import Productdata from "../Product/Productdata";
import HomeSlider from "../Slider/HomeSlider";
import PromoteBaner from "../Slider/PromoteBaner";
import bennerImg from '../../assets/Beige Modern Elegant Personal LinkedIn Banner.png'

// import img from '../../assets/404.gif'
const Home = () => {
    const productLode = useLoaderData();
    const title = 'New Product';
    const titleDescription = 'Explore the Next Level of mobile. Get Ready to Experience .';
    
    return (
        <div>
           <HomeSlider></HomeSlider>
            <Productdata productData ={productLode}></Productdata>
            <PromoteBaner title={title} img={bennerImg} titleDescription={titleDescription}></PromoteBaner>
           
            
        </div>
    );
};

export default Home;