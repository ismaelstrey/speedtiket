import {BiUserCircle} from 'react-icons/bi'
import {MdRunningWithErrors} from 'react-icons/md'
const KanbanContainerCard =() =><div className="flex md:w-full min-[320px]:w-screen min-[320px]:p-0 min-[320px]:m-0 flex-col rounded border-2 border-black m-2 hover:mx-0 cursor-pointer">
<p className="text-center border-b-2 border-b-slate-600 bg-slate-300 "><span className="">#200</span> - <strong>SpeedSul Telecom</strong></p>

<p className='m-2'>Internet Caindo e voltando a cada 5 min...</p>

<div className="flex w-full items-end content-end justify-end">
  <span className="mx-2">  <strong>20/12/2013</strong></span>
    </div>
    <div className='flex bg-red-500 w-full justify-between items-center content-center'>
        <span className='flex items-center ml-2 text-white'><BiUserCircle  fill="#fff"/>  - @fernenado</span>
        <span className='mr-2' title='Em andamento'><MdRunningWithErrors fill="#fff"/> </span>
    </div>
</div>


export  {KanbanContainerCard};