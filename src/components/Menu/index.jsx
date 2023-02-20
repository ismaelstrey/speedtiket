import { useState } from "react";
import {CgMenuRound} from 'react-icons/cg'
import {IoIosAddCircle} from 'react-icons/io'
import {BiShowAlt} from 'react-icons/bi'
import {CiCircleRemove} from 'react-icons/ci'
import {FaThList} from 'react-icons/fa'

const Menu = ()  =>  {

  const [menu, setMenu] =useState(true)

return(
  
 
<div>
   <div className="fixed bottom-10 right-10 rounded-full bg-green-400 p-2 hover:bg-green-900 cursor-pointer z-20" onClick={()=>setMenu(!menu)}><CgMenuRound/>
</div>
     {menu &&  <div className=" bg-black fixed p-10 rounded-full  bottom-4 right-4 z-10 border-2 border-white ">
   <span className="bg-blue-400 p-2 rounded-full fixed bottom-10 right-20 hover:border-2 hover: border-white cursor-pointer"><IoIosAddCircle/></span>
    <span className="bg-red-400 p-2 rounded-full fixed bottom-20 right-10 hover:border-2 hover: border-white cursor-pointer"><BiShowAlt/></span>   
   <span className="bg-yellow-400 p-2 rounded-full fixed bottom-0 right-10 hover:border-2 hover: border-white cursor-pointer"><CiCircleRemove/></span>
    <span className="bg-orange-400 p-2 rounded-full fixed bottom-10 right-0 hover:border-2 hover: border-white cursor-pointer"><FaThList /></span>
    </div>}
  
  </div>
)}
 


export default Menu;