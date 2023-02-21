import { BiUserCircle } from 'react-icons/bi'
import { MdRunningWithErrors } from 'react-icons/md'
const KanbanContainerCard = (props) => <div className=" flex md:w-full min-[320px]:my-4 min-[320px]:w-full min-[320px]:p-0 min-[320px]:m-0 flex-col rounded border-2 border-black m-2 hover:mx-0 cursor-pointer"  draggable onDragCapture={(e)=>console.log(e)} >
  <p className="text-center w-full border-b-2 border-b-slate-600 bg-slate-300 "><span className="">#{props.id}</span> - <strong>{props.title}</strong></p>

  <div className='bg-blue-200 text-lg'><p className='m-2'>{props.text}</p>

    <div className="flex w-full items-end content-end justify-end">
      <span className="mx-2">  <strong>{props.data}</strong></span>
    </div></div>
  <div className='flex bg-red-500 w-full justify-between items-center content-center'>
    <span className='flex items-center ml-2 text-white'><BiUserCircle fill="#fff" />  - {props.user}</span>
    <span className='mr-2' title='Em andamento'><MdRunningWithErrors fill="#fff" /> </span>
  </div>
</div>


export { KanbanContainerCard };