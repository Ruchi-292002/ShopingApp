import React, { useContext } from "react";
import { ProductContext } from "../utils/Contextt";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];


  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.8)`
  }

  return (
    <nav className="w-[15%] h-full bg-zinc-300 flex flex-col items-center pt-5">
      <a
        className="border-black border rounded mb-2 px-2 bg-blue-100 font-medium "
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%]" />
      <h1 className="font-bold uppercase my-3">Category</h1>
      <div>
        {distinct_category.map((c, i) => (
          <Link key={i} to={`/?category=${c}`} className="mb-3 flex capitalize items-center">
            <span style={{backgroundColor: color()}} className="w-[15px] h-[15px] rounded-full mr-2"></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Nav




































// import React, { useContext } from 'react'
// import { ProductContext } from '../utils/Contextt';
// import { Link } from 'react-router-dom';

// const Nav = () => {

//     const [products] = useContext(ProductContext);
//     let distinct_category = 
//            products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
//            distinct_category = [...new Set(distinct_category)];
          

//       const color = ()=>{
//         return `rgba(${(Math.random()* 255).toFixed()}, ${(Math.random()* 255).toFixed()},
//         ${(Math.random()* 255).toFixed()},0.4)`;
//       } ; 

//   return (
//     <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
//     <a  className='py-2 px-5 border rounded border-blue-200 text-blue-400 'href='/create'>Add New Products</a>
//     <hr className='w-[80%] my-3'></hr>
//     <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
//       <div className='w-[80%] '>

//        {distinct_category.map((c,i)=>(
//         <Link
//                key={i}
//           to={`/?category= ${c}`} 
//           className=' flex items-center mb-3'
//           >
//             <span style={
//             {backgroundColor: color()
//             }} 
//             className='rounded-full mr-2 w-[15px] h-[15px]  '></span>
//             {""}
//             {c}
//           </Link>
//        ))}
//       </div>
//    </nav>
//   );
// };

// export default Nav
