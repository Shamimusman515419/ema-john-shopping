import React from 'react';
 import './Card.css'
const Card = (props) => {
     // console.log(props.product);
     const { price, img, quantity, seller, ratings, name } = props.product;
    const heandelCard =props.hendelCardProduct
     return (
          <div className='  card   border-2 border-blue-200 relative'>
               <div className=' h-64 p-2'>
                    <img className=' w-full h-full' src={img} alt="" />
               </div>
               <div className=' p-2'>
               <h1 className=' text-lg font-bold my-5'> {name}</h1>
               <p className=' text-lg font-medium'> Price: ${price}</p>
               <p className=' text-lg font-medium'> Manufacture: {seller}</p>
                  
               <p className=' text-lg font-medium'> Rating: {ratings} start</p>
               </div>
               <button onClick={()=> heandelCard(props.product)} className=' w-full block text-xl font-bold  bottom-0 bg-[#FFE0B3] p-2 absolute'>  Add To Card </button>
          </div>
     );
};

export default Card;