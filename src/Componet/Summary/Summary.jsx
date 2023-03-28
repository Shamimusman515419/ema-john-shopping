import React from 'react';
import './Summary.css'
const Summary = (props) => {
 const Card=props.Product;
    
 


let totalprice=0;
let shipping=0;
let quntity=0;
 for(const product of Card){
     product.quantity=product.quantity || 1;
    
      totalprice=totalprice + product.price * product.quantity;
      quntity=quntity + product.quantity;
      shipping=shipping + product.shipping;
      
 }

const tex=totalprice*7/100;

 const Grand_total=totalprice + tex + shipping;
     return (
          <div className=' bg-[#ff990067] p-3 summary '>
         <h1 className=' text-3xl font-semibold my-3'>Order Summary</h1>

         <div>
           <p className=' text-xl font-bold my-4'> Selected Items:  {quntity}</p>      
           <p className=' text-lg font-bold my-4'>Total Price: $ {totalprice}  </p>      
           <p className=' text-lg font-bold my-4'> Total Shipping Charge: $ {shipping} </p>      
           <p className=' text-lg font-bold my-4'> Tax: $ {tex.toFixed(2) }  </p>      
           <h1 className=' text-xl font-bold my-4'> Grand Total: $ {Grand_total.toFixed(2) }</h1>

         </div>
           
          
          </div>
     );
};

export default Summary;