import { useEffect, useState } from "react";

 

const useAddtoCArd = () => {
    // const [changNumber, setChangNumber]= useState(0);
    const [productLength, setProductLenght] = useState('');
    // // let number = 0;
    // const addCardNumber = () =>{

    //     const saveNumber = Math.floor(Math.random() * 300) + 1;
    //     // number = saveNumber
    //     setChangNumber(saveNumber);
    // }
    // console.log(changNumber)
    useEffect(
        ()=>{
            fetch('http://localhost:5000/addToCard')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProductLenght(data)
            })
           
        }
        ,[])
        // console.log(productLength)
    return [productLength];
};

export default useAddtoCArd;
