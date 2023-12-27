import { useEffect, useState } from "react";

 

const useAddtoCArd = () => {
    
    const [productLength, setProductLenght] = useState('');
    useEffect(
        ()=>{
            fetch('http://localhost:5000/addToCard')
            .then(res => res.json())
            .then(data => setProductLenght(data))
        }
        ,[])
    return [productLength];
};

export default useAddtoCArd;
