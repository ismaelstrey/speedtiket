import { useForm } from "react-hook-form";
import { postTiketApi } from "../../../api/Api";
import { v4} from "uuid";
import { useContext, useState } from "react";
import moment from "moment/moment";
import { FormContext } from "../../../usecontext/FormContext";



    const NewTiket = () => {
   
 
  const {mostrarFormularioTiket}=useContext(FormContext)
  const [id, setId]=useState(v4())
  const [data, setData]=useState(moment().format('L'))


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({defaultValues:{id,created_at:data,updated_at:data,user:"ismaelstrey",status: "fazer",tecnico: "Antonio"}});
  //declarar para qual função o método handleSubmit irá enviar as informações
  const addTcket = (data) => {
    console.log("post", data);
    return postTiketApi(data)
      .then((dat) => console.log(dat))
      .catch((err) => console.log(err));
  };
  return (
  
    <form
      onSubmit={handleSubmit(addTcket)}
      className={`m-20 container text-lg text-white  flex w-full justify-center content-center items-center bg-slate-800 rounded-2xl  border-2 border-black `}
    >
      <div className="flex flex-col w-full">
        <span className="flex w-full items-center justify-center content-center mb-10 bg-blue-700 rounded-t-2xl h-10 border-b-2 border-white">
          <h2 className="uppercase">novo ticket {moment().format('LTS')}</h2>
               </span>
        <div className="flex sm:flex-col lg:flex-row w-full">
          <div className="flex w-full  p-4 content-center items-center justify-center min-[320px]:items-start min-[320px]:flex-col">
            <label className="px-3 ">Problema Informado:</label>
            <input
              {...register("problema_informado", { required: true })}
              className="min-[320px]:w-full form-input text-black rounded-full  flex-1   border-0 border-solid  select-none outline-none focus:outline-0"
            />

            {errors.name && <span>Nome</span>}
          </div>
        </div>

        <div className="flex w-full min-[320px]:flex-col sm:flex-col lg:flex-row">
          <div className="flex min-[320px]:flex-col w-full  p-4 content-center items-center justify-start min-[320px]:items-start">
            <label className="px-3">Cliente:</label>
            <select
              {...register("cliente", { required: true })}
              className="flex w-full text-black form-select flex-1  border-solid  select-none outline-none focus:outline-0 rounded-full border-0 ">
              <option value="fisico">Speedsul</option>
              <option defaultValue="juridico">Oi Telecom</option>
            </select>
          </div>
          <div className="flex w-full  p-4 content-center items-center justify-start">
            <label className="px-3 ">Categorias:</label>
            <select
              {...register("categoria", { required: true })}
              className="form-select text-black rounded-full flex-1  border-0 select-none outline-none focus:outline-0 "
            >
              <option defaultValue="redes">Redes</option>
              <option value="projeto">Projeto</option>
              <option value="implantacao">Implatação</option>
              <option value="problema">Problema</option>
            </select>
          </div>
          <div className="flex w-full  p-4 content-center items-center justify-start">
            <label className="px-3 ">Subcategoria:</label>
            <select
              {...register("subcategoria", { required: true })}
              className="form-select text-black text-lg rounded-full flex-1  border-0 select-none outline-none focus:outline-0 "
            >
              <option value="critico">Configuração</option>
              <option value="alto">Dividas</option>
              <option defaultValue="medio">Incidadente</option>
              <option value="baixo">Mudança</option>
            </select>
          </div>
        </div>

        <div className="flex w-full sm:flex-col lg:flex-row">
          <div className="flex w-full  p-4 content-center items-center justify-start">
            <label className="px-3 ">Prioridade:</label>
            <select
              {...register("prioridade", { required: true })}
              className="form-select text-black text-lg rounded-full flex-1  border-0 select-none outline-none focus:outline-0 "
            >
              <option value="critico">Critico</option>
              <option value="alto" className="bg-red-700 text-white">
                Alto
              </option>
              <option defaultValue="medio" className="bg-red-400 text-white">
                Medio
              </option>
              <option value="baixo" className="bg-violet-700 text-white">
                Baixo
              </option>
              <option value="planejado" className="bg-green-500 text-white">
                Planejado
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <label className="px-3">Observação:</label>
          <textarea
            {...register("observacao", { required: false })}
            maxLength="400"
            rows={5}
            className="form-textarea text-black rounded select-none outline-none focus:outline-0 h-full "
          />
          {errors.name && <span>Nome</span>}
        </div>

        <div className="flex w-full justify-end">
          <span className="m-4">
            <input
              type="submit"
              className="border-2 border-black bg-green-500 text-white p-2 mr-2 rounded cursor-pointer"
            />
            <input
              type="button"
              onClick={() =>mostrarFormularioTiket()}
              value="Cancelar"
              className="border-2 border-black pt-2 bg-red-500 text-white p-2 rounded cursor-pointer"
            />
          </span>
        </div>
      </div>
    </form>
  );
};

export default NewTiket;
