import React, { useEffect, useState } from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineSetting,
  AiFillAlert,
} from "react-icons/ai";
import { HiTicket } from "react-icons/hi";

function SidebarMenuHeader() {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setInterval(() => setAlert(!alert), 3000);
  }, [alert]);
  return (
    <div className="flex h-full w-full flex-col bg-slate-800">
      <div className="flex content-stretch  w-full h-full bg-black items-center justify-center">
        <span className="flex  items-center content-center justify-center bg-black w-full h-full hover:bg-slate-800 cursor-pointer">
          {" "}
          <AiOutlineSetting fill="#fff" />
        </span>
        <span className="flex  items-center content-center justify-center bg-black w-full h-full hover:bg-slate-800 cursor-pointer">
          {" "}
          <HiTicket fill="#fff" />
        </span>
        <span className="flex  items-center content-center justify-center bg-black w-full h-full hover:bg-slate-800 cursor-pointer">
          {" "}
          <AiFillAlert fill={alert ? "#fff" : "red"} />
        </span>
        <span className="flex  items-center content-center justify-center bg-black w-full h-full hover:bg-slate-800 cursor-pointer">
          <AiOutlineUsergroupAdd fill="#fff" />
        </span>
      </div>
      <span className="h-2 w-full bg-slate-800">{alert}</span>
    </div>
  );
}

export default SidebarMenuHeader;
