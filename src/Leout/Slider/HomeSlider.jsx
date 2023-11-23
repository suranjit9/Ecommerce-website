
import img1 from '../../../public/phono-slider-1.webp';
import img2 from '../../../public/phono-slider-2.webp';
import img3 from '../../../public/phono-slider-3.webp';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                <div className='relative'>
                        <div className='absolute pt-[8%] pl-[10%] text-center'>
                            <h4 className='btn btn-sm'>4K Resolution</h4>
                            <h2 className='sm:text-xl  font-semibold  md:text-5xl lg:text-9xl'>Exclusive <br /> Steel <br />Frame</h2>
                            <button className="btn btn-xs rounded-full btn-outline sm:btn-sm md:btn-md  lg:btn-md rounded-md mt-2 border-green-600 ">Buy Now</button>
                        </div>
                        {/* Slider Img */}
                        
                        </div>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <div className='absolute pt-[8%] pl-[60%] text-center text-white'>
                            <h4 className='btn btn-sm'>4K Resolution</h4>
                            <h2 className='sm:text-xl  font-semibold  md:text-5xl lg:text-9xl'>Exclusive <br /> Steel <br />Frame</h2>
                            <button className="text-white btn btn-xs rounded-full btn-outline sm:btn-sm md:btn-md  lg:btn-md rounded-md mt-2 border-green-600 ">Buy Now</button>
                        </div>
                        {/* Slider Img */}
                        
                        </div>
                    <img src={img3} alt="" />
                </SwiperSlide>
                
                


            </Swiper>
        </>
    );
}


