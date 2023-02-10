import { useState } from 'react'
import {Main} from './components/Main'
import SidebarMenu from './components/sidebar/_menu/SidebarMenu'
import { BrowserRouter} from "react-router-dom";
import Rotas from './router/Router';



function App() {
  const [count, setCount] = useState(0)


  return (
  <BrowserRouter> 
      <div className="flex bg-slate-800 h-screen">

        <SidebarMenu />
          <Main> <Rotas />   </Main>
      

      </div></BrowserRouter>
     

  )
}

export default App
