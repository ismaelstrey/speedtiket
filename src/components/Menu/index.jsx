import { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { GrTicket } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import NewTiket from "../Tikets/NewTiket/NewTiket";
import NewEmpresa from "../Empresa/NewEmpresa/NewEmpresa";

const Menu = () => {
  const [menu, setMenu] = useState(true);
  const [abrirEmpresa, setAbrirEmpresa] = useState(false);
  const [abrirTiket, setAbrirTiket] = useState(false);

  const NovoTiket = () => (
    <div className="fixed flex  w-full min-[320px]:w-screen h-screen items-center justify-center bg-opacity-30 backdrop-blur-sm inset-0">
      <NewTiket />
    </div>
  );
  const NovaEmpresa = () => (
    <div className="fixed flex  w-full min-[320px]:w-screen  h-screen items-center justify-center bg-opacity-30 backdrop-blur-sm inset-0">
      <NewEmpresa />
    </div>
  );

  return (
    <div>
      {abrirTiket && <NovoTiket />}
      {abrirEmpresa && <NovaEmpresa />}
      <div
        className={`fixed rounded-full bg-green-400 p-2 hover:bg-white cursor-pointer z-20 ${
          menu ? "bottom-10 right-10 " : "bottom-0 right-0 "
        }`}
        onClick={() => setMenu(!menu)}
      >
        <CgMenuRound />
      </div>
      {menu && (
        <div className=" bg-black fixed p-10 rounded-full  bottom-4 right-4 z-10 border-2 border-white ">
          <span
            className="bg-green-600 p-2 rounded-full fixed bottom-10 right-20 hover:border-2 hover: border-white cursor-pointer"
            onClick={() => setAbrirEmpresa(!abrirEmpresa)}
          >
            <IoIosAddCircle />
          </span>
          <span
            className="bg-blue-400 p-2 rounded-full fixed bottom-20 right-10 hover:border-2 hover: border-white cursor-pointer aria-[title]:text-xs"
            title="Novo ticket"
            onClick={() => setAbrirTiket(!abrirTiket)}
          >
            <GrTicket />
          </span>
          <span className="bg-yellow-400 p-2 rounded-full fixed bottom-0 right-10 hover:border-2 hover: border-white cursor-pointer">
            <AiFillDelete />
          </span>
          <span className="bg-orange-400 p-2 rounded-full fixed bottom-10 right-0 hover:border-2 hover: border-white cursor-pointer">
            <FaThList />
          </span>
        </div>
      )}
    </div>
  );
};

export default Menu;
