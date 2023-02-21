const KanbanColumn = (props) => (
  <div
    className={`box-border flex w-full  min-[320px]:m-0 min-[320px]:p-0 flex-col md:w-full sm:m-0 md:m-0 lg:m-2 rounded-sm border-2 rounded-t-xl ${props.bordeColor}`}
    onDragEndCapture={(e) => console.log(e)}
  >
    <h3
      className={`flex w-full py-2  text-center content-center justify-center items-center  rounded-t-lg  ${props.titleColor} ${props.textColor}`}
    >
      {props.title}
      <span className=" mx-4 rounded-full border-b-2 ">05</span>
    </h3>

    <div className="md:px-1">{props.children}</div>
  </div>
);

export { KanbanColumn };
