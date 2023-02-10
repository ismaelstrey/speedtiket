import React from 'react';
import SidebarMenuHeader from './SidebarMenuHeader';
import SidebarMenuItem from './SidebarMenuItem';
import { HiTicket } from 'react-icons/hi';




function SidebarMenu() {
  const Action = (e) => console.log(e)
  return <div className="flex flex-col w-2/12 bg-slate-900 h-screen justify-center items-baseline ">
    <SidebarMenuHeader action={Action}/>
      <SidebarMenuItem to="urgente"  name="Urgente" Icon={HiTicket} color="red" action={Action}/>
      <SidebarMenuItem to="fazendo"  name="Fazendo" Icon={HiTicket} color="green"/>
      <SidebarMenuItem to="pausados" name="Pausados" Icon={HiTicket} color="yellow"/>
      <SidebarMenuItem to="concluidos" name="Concluidos" Icon={HiTicket} color="blue"/>
 
   
  
  </div>
}

export default SidebarMenu;