
import {MdPostAdd} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
const MainNavActions =() =>
 <div className="flex w-full bg-black h-10 rounded-md sticky -top-12 px-5 hover:-top-4 hover:h-14" >
    <ul className=" text-white flex w-full justify-between items-center content-center">
        <li><a href="#">Tiket/Urgente</a></li>
        <li><input className='input rounded-sm' type="text"  /> <button><BsSearch/></button></li>
       <span className='flex'> 
        <li><a href="#"><MdPostAdd/></a></li>
        <li><a href="#"><MdPostAdd/></a></li>
        <li><a href="#"><MdPostAdd/></a></li>
        <li><a href="#"><MdPostAdd/></a></li>
        </span>
        <li><span className="relative right-0 text-green-300">08/02/2023 21:49</span></li>
    </ul>
</div>


export  {MainNavActions};