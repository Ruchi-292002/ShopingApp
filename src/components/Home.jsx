// import { Link, useLocation } from "react-router-dom";
// import Nav from "./Nav";
// import { useContext, useEffect, useState } from "react";
// import { ProductContext } from "../utils/Contextt";
// import Loadingg from "./Loadingg";
// import axios from "../utils/axios";

// const Home = () => {
//   const [products] = useContext(ProductContext);
//   const {search} = useLocation();
//   const category = decodeURIComponent (search.split("=")[1]);

//   const [filterProducts, setfilterProducts] = useState(null)

//   const getProductsCategory = async () => {
//     try {
//       const {data} = await axios.get(`/products/category/${category}`);
//       setfilterProducts(data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect( () => {
//     if(!filterProducts || category == "undefined") setfilterProducts(products);
//     if(category != "undefined") {
//       // getProductsCategory();
//       setfilterProducts(products.filter((p) => p.category == category));
//     }
//   },[category, products])

//   return products ? (
//     <>
//       <Nav />
//       <div className="w-[85%] p-10 pt-16 flex flex-wrap overflow-x-hidden overflow-y-auto">
//         {filterProducts && filterProducts.map((p, i) => (
//           <Link
//             key={p.id}
//             to={`/details/${p.id}`}
//             className="w-[18%] h-[40vh] mr-3 mb-3 card p-5 border shadow rounded flex flex-col items-center justify-center"
//           >
//             <div
//               style={{
//                 backgroundImage:
//                   `url(${p.image})`,
//               }}
//               className="hover:scale-110 mb-5 w-full h-[75%] bg-contain bg-no-repeat bg-center"
//             ></div>
//             <h1 className="hover:text-blue-300">{p.title}</h1>
//           </Link>
//         ))}
//       </div>
//     </>
//   ) : (
//     <Loadingg />
//   );
// };

// export default Home;

import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Contextt";
import Loadingg from "./Loadingg";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent (search.split("=")[1]);

  const [filterProducts, setfilterProducts] = useState(null)

  const getProductsCategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      setfilterProducts(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect( () => {
    if(!filterProducts || category == "undefined") setfilterProducts(products);
    if(category != "undefined") {
      // getProductsCategory();
      setfilterProducts(products.filter((p) => p.category == category));
    }
  },[category, products])

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-16 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProducts && filterProducts.map((p, i) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className="w-[18%] h-[40vh] mr-3 mb-3 card p-5 border shadow rounded flex flex-col items-center justify-center"
          >
            <div
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
              className="hover:scale-110 mb-5 w-full h-[75%] bg-contain bg-no-repeat bg-center"
            ></div>
            <h1 className="hover:text-blue-300">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loadingg />
  );
};

export default Home;

























































// import React, { useContext, useEffect, useState } from 'react'
// import Nav from './Nav'
// import { Await, Link, useLocation } from 'react-router-dom'
// import { ProductContext } from '../utils/Contextt';
// import Loadingg from './Loadingg';

// import axios from '../utils/axios'

// const Home = () => {
//   const [products] = useContext(ProductContext);
//   const {search} = useLocation();
//   const category =   decodeURIComponent( search.split("=")[1]);
//    let filteredProducts =  products && products;
//  const getproductscategory = async ()=>{
//   try {
//    const {data} = await axios.get(`/products/category/${category}`);
//    console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
//  };
//  useEffect(()=>{
//   if(category.length > 0) getproductscategory();
//  },[category])


// console.log(filteredProducts);

//   return products ? ( 
//     <>
//     <Nav/>

//     <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto '>
//        { products.map((p,i)=>( 
//      <Link key ={p.id}
//      to={`/Details/${p.id}`}
//      className='mr-3 mb-3 card p-3  border shadow rounded w-[15%] h-[30vh] flex-col flex justify-center items-center '>
//         <div className=' hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
//            style={{backgroundImage:`url(${p.image})`
//               }}
//          ></div>
//              <h1 className='hover:text-blue-300'>{p.title}</h1>
//      </Link>
// ))}

//     </div>
//     </>

//   ) : (
//     <Loadingg />
//   );

// };
// export default Home;
