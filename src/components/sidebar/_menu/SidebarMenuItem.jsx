import { Link } from "react-router-dom";
const SidebarMenuItem = ({ name, Icon, color, to }) => (
  <Link to={to} className="h-full w-full">
    {" "}
    <div className=" solid  text-center w-full h-full px-6 hover:bg-red-500 cursor-pointer items-center border-b-2 border-b-slate-500 hover:border-b-white">
      <div className="flex h-full w-full items-center justify-center">
        {" "}
        <Icon fill={color} />
        <span className="ml-2 text-white max-sm:hidden">
          {name}{" "}
          <span className="text-sm rounded-b-full relative top-1 bg-black rou full p-1">
            5
          </span>
        </span>
      </div>
    </div>
  </Link>
);

export default SidebarMenuItem;
