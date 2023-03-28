import React from 'react';
import logo from '../../images/Logo.svg'
 import './Header.css'
const Header = () => {
     return (
     <div className=' bg-[#1C2B35] p-2 flex justify-between items-center'>
          <div className=' px-4'>
              <img src={logo} alt="" />   
          </div> 
            <div>
               <ul className=' flex  px-4 justify-around text-white'>
                    <li className=' mx-2'><a href=""> Order</a></li>
                    <li className=' mx-2'><a href=""> Order Review </a></li> 
                    <li className=' mx-2'><a href=""> Manage Inventory</a></li>
                    <li className=' mx-2'><a href=""> Login</a></li>
               </ul>
            </div>
      </div>
     );
};

export default Header;