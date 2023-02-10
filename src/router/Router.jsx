import {    Route, Routes  } from "react-router-dom";
import Tikets, {Fazendo, Concluidos, Urgentes, Pausados } from "../components/Tikets";
import Empresa from "../components/Empresa";
  

  const Rotas =()=>
 
                        <Routes>                                  
                            <Route path="/" element={<Tikets />}/>                          
                            <Route path="/empresa" element={<Empresa />} />
                            <Route path="/tiket" element={<Tikets />} />
                            <Route path="/fazendo" element={<Fazendo />} />
                            <Route path="/concluidos" element={<Concluidos />} />
                            <Route path="/urgente" element={<Urgentes />} />
                            <Route path="/pausados" element={<Pausados />} />
                        </Routes>
  export default Rotas