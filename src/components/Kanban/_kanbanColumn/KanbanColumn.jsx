

const KanbanColumn = (props) => <div className="flex flex-col w-full m-2 rounded-sm bg-slate-200 border-2 rounded-t-xl border-orange-600">
    <h3 className={`flex py-2  w-full text-center content-center justify-center items-center  rounded-t-lg  ${props.titleColor} ${props.textColor}`}>
         {props.title}
          <span className=" mx-4 rounded-full border-b-2 text-sm">05</span>
          </h3>
    
    <div>{props.children}</div>
   </div>

export { KanbanColumn }