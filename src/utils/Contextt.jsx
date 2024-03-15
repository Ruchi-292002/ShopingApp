

// import axios from "./axios";
// import React, { createContext, useEffect, useState } from 'react'

// export const ProductContext = createContext();


// const Contextt = (props) => {
//    const[products, setproducts]=useState (JSON.parse(localStorage.getItem("products"))|| null);

//    const getproducts = async() => {
//       try{
//         const {data} = await axios("/products");

//         setproducts(data);
//       }
//       catch(error){
//         console.log(error);
//       }
//    };
//    console.log(products);
//    useEffect(()=>{
//     getproducts();
//    },[]);

//   return (
//     <ProductContext.Provider value={[products, setproducts]}>
//       {props.children}
//     </ProductContext.Provider>
//   );
// };

// export default Contextt;

import axios from "./axios";
import React, {createContext, useEffect, useState} from "react";

export const ProductContext = createContext();

const Contextt = (props) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

    const getProducts = async () => {
        try {
            const {data} = await axios("/products");
            setProducts(data);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect( () => {
        getProducts();
    },[])

  return (
    <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
    </ProductContext.Provider>
  );
};

export default Contextt;