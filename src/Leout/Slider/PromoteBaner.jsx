
import PropTypes from 'prop-types';
const PromoteBaner = ({ img, title, titleDescription }) => {
    return (
        <div className="w-full mb-2 ">
            <div className='relative'>
                <div className='absolute pl-[50%] pt-[10%] '>
                    <h1 className='text-center text-4xl font-bold'>{title}</h1>
                    <div>
                    <h1 className='pl- text-center text-xl'>{titleDescription}</h1>
                    </div>
                </div>
                <img className='w-full' src={img} alt="img" />
            </div>


        </div>
    );
};
PromoteBaner.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    titleDescription: PropTypes.string
};
export default PromoteBaner;