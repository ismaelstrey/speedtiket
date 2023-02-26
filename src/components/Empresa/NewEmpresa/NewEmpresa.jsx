import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../../../usecontext/FormContext";


const NewEmpresa = () => {
  //declarar os métodos que serão utilizados para manipular o form
  const { mostrarFormularioEmpresa}= useContext(FormContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const loginUser = (data) => console.log(data);
  return (
   
    <form
      onSubmit={handleSubmit(loginUser)}
      className="m-20 container text-lg text-white  flex w-full justify-center content-center items-center bg-slate-800 rounded-2xl  border-2 border-black"
    >
      <div className="flex flex-col w-full   ">
        <span className="flex w-full items-center justify-center content-center mb-10 bg-green-400 rounded-t-2xl h-10 border-b-2 border-white">
          {" "}
          <strong>CADASTRO DE EMPRESA</strong>
        </span>
        <div className="flex sm:flex-col lg:flex-row w-full">
          <div className="flex  w-full  p-4 content-center items-center justify-start">
            <label className="px-3 ">Tipo:</label>
            <select
              {...register("tipo_empresa", { required: true })}
              className="text-black form-select flex-1  border-solid  select-none outline-none focus:outline-0 rounded-full border-0 "
            >
              <option value="fisico">Fisico</option>
              <option defaultValue="juridico">Juridico</option>
            </select>
          </div>

          <div className="flex w-full  p-4 content-center items-center justify-center">
            <label className="px-3 ">Rasão social:</label>
            <input
              {...register("rasao_social", { required: true })}
              className="form-input text-black rounded-full  flex-1   border-0 border-solid  select-none outline-none focus:outline-0"
            />
            {errors.name && <span>Nome</span>}
          </div>

          <div className="flex w-full p-4 justify-center items-center">
            <label className="px-3">Nome fantasia:</label>
            <input
              {...register("nome_fantasia", { required: true })}
              className="form-input flex-1 text-black rounded-full border-0 select-none outline-none focus:outline-0 "
            />
            {errors.name && <span>Nome</span>}
          </div>
        </div>

        <div className="flex w-full sm:flex-col lg:flex-row">
          <div className="flex p-4 w-full items-center justify-center ">
            <label className="px-3">CNPJ:</label>
            <input
              {...register("cnpj", { required: true })}
              className="form-input text-black  rounded-full border-0 flex-1 select-none outline-none focus:outline-0 "
            />
            {errors.name && <span>CNPJ</span>}
          </div>
          <div className="flex p-4 w-full  items-center justify-center ">
            <label className="px-3">IE:</label>
            <input
              {...register("ie", { required: true })}
              className="form-input text-black rounded-full  flex-1 border-0  select-none outline-none focus:outline-0 "
            />
            {errors.name && <span>IE</span>}
          </div>
          <div className="flex w-full  p-4 content-center items-center justify-start">
            <label className="px-3 ">Matriz:</label>
            <select
              {...register("matriz", { required: true })}
              className="form-select text-black rounded-full flex-1  border-0 select-none outline-none focus:outline-0 "
            >
              <option value="fisico">Fisico</option>
              <option defaultValue="juridico">Juridico</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <label className="px-3">Observação:</label>
          <textarea
            {...register("observacao", { required: false })}
            className="form-textarea text-black rounded-full select-none outline-none focus:outline-0 h-full "
          />
          {errors.name && <span>Nome</span>}
        </div>

        <div className="flex w-full justify-end">
          <span className="m-4">
            <input
              type="submit"
              className="border-2 border-black bg-blue-500 text-white p-2 mr-2 rounded"
            />
            <input
              type="button"
              onClick={() => mostrarFormularioEmpresa()}
              value="Cancelar"
              className="border-2 border-black pt-2 bg-red-500 text-white p-2 rounded"
            />
          </span>
        </div>
      </div>
    </form>
  );
};

export default NewEmpresa;
