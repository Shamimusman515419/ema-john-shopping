import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import './Shop.css'
const Shop = () => {

     const [Cart, setCart] = useState([]);
     const [Product, setProduct] = useState([]);

     useEffect(() => {
          fetch('products.json')
               .then(res => res.json()) 
               .then(data => setCart(data));

     }, []);


 useEffect(()=>{
 let addCard=[];
 const storageCard=getShoppingCart();
  for( const id in storageCard){
       const addproduct=Cart.find(pd=> pd.id == id);
       if(addproduct){
          const quntity=storageCard[id];
          addproduct.quantity=quntity
          addCard.push(addproduct);
         }
   
        setProduct(addCard)
  }

     

 } ,[Cart])







     const hendelCardProduct = (product) => {
          const addCard = [...Product, product]
          setProduct(addCard)
          addToDb(product.id)
     }



     // console.log(Product);
     return (
          <div className=' p-4 grid md:grid-cols-5 gap-3'>

               <div className='  col-span-4'>

                    <div className=' grid md:grid-cols-3 gap-5'>
                         {
                              Cart.map(product => <Card product={product} key={product.id} hendelCardProduct={hendelCardProduct}></Card>)
                         }
                    </div>

               </div>
               <div className=' row-span-1 h-full  summary'>


                    <Summary Product={Product}> </Summary>


               </div>

          </div>
     );
};

export default Shop;