import { useState } from 'react'
import {Main} from './components/Main'
import SidebarMenu from './components/sidebar/_menu/SidebarMenu'
import { BrowserRouter} from "react-router-dom";
import Rotas from './router/Router';
import {BiHide, BiShowAlt} from "react-icons/bi"
import Menu from './components/Menu';



function App() {
  const [hide, setHide] = useState(true)


  return (
  <BrowserRouter> 
      <div className="flex bg-slate-800 h-full">
<span title={hide ? "Montrar menu" : "Esconder Menu"}onClick={()=>setHide(!hide)} className=' block fixed left-80 cursor-pointer z-50'>{hide ? <BiShowAlt fill="#fff" height={25}/> : <BiHide fill="#fff"/>}</span>
        <SidebarMenu hide={hide}/>
          <Main> <Rotas />   </Main>
      
<Menu/>
      </div></BrowserRouter>
     

  )
}

export default App
