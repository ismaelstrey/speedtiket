import { useForm } from "react-hook-form";

const NewTiket = () => {

  //declarar os métodos que serão utilizados para manipular o form

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  //declarar para qual função o método handleSubmit irá enviar as informações
  const addTcket = data => console.log(data);
  return (
    //no onSubmit do form o método handleSubmit irá manipular as informações para o loginUser

    //o register recebe o nome do input, e os errors apresentam na tela os erros de validação

    <form onSubmit={handleSubmit(addTcket)} className="m-20 container text-lg text-white  flex w-full justify-center content-center items-center bg-slate-800 rounded-2xl  border-2 border-black">

    <div className="flex flex-col w-full   ">
     <span className="flex w-full items-center justify-center content-center mb-10 bg-blue-700 rounded-t-2xl h-10 border-b-2 border-white"> <h2 className="uppercase">novo ticket</h2></span>
    <div className="flex sm:flex-col lg:flex-row w-full">



<div className="flex w-full  p-4 content-center items-center justify-center">
  <label className="px-3 ">Problema Informado:</label>
  <input  {...register("rasao_social", { required: true })} className="form-input text-black rounded-full  flex-1   border-0 border-solid  select-none outline-none focus:outline-0" />
  <input  {...register("usuario_logado", { required: true })} disabled className="hidden" />
  {errors.name && <span>Nome</span>}
</div>
</div>

<div className="flex w-full sm:flex-col lg:flex-row">
  <div className="flex  w-full  p-4 content-center items-center justify-start">
    <label className="px-3 ">Cliente:</label>
    <select {...register("tipo_empresa", { required: true })}  className="text-black form-select flex-1  border-solid  select-none outline-none focus:outline-0 rounded-full border-0 ">
      <option value="fisico">Speedsul</option>
      <option defaultValue="juridico" >Oi Telecom</option>
    </select>
  </div>
  <div className="flex w-full  p-4 content-center items-center justify-start">
    <label className="px-3 ">Categorias:</label>
    <select {...register("matriz", { required: true })}  className="form-select text-black rounded-full flex-1  border-0 select-none outline-none focus:outline-0 ">
      <option defaultValue="redes">Redes</option>
      <option value="projeto" >Projeto</option>
      <option value="implantacao" >Implatação</option>
      <option value="problema" >Problema</option>
    </select>
  </div>
  <div className="flex w-full  p-4 content-center items-center justify-start">
    <label className="px-3 ">Subcategoria:</label>
    <select {...register("prioridade", { required: true })}  className="form-select text-black text-lg rounded-full flex-1  border-0 select-none outline-none focus:outline-0 ">
      <option value="critico">Configuração</option>
      <option value="alto" >Dividas</option>    
      <option defaultValue="medio" >Incidadente</option>
      <option value="baixo"  >Mudança</option>
    </select>
  </div>
</div>

<div className="flex w-full sm:flex-col lg:flex-row">

  <div className="flex w-full  p-4 content-center items-center justify-start">
    <label className="px-3 ">Prioridade:</label>
    <select {...register("prioridade", { required: true })}  className="form-select text-black text-lg rounded-full flex-1  border-0 select-none outline-none focus:outline-0 ">
      <option value="critico">Critico</option>
      <option value="alto" className="bg-red-700 text-white" >Alto</option>    
      <option defaultValue="medio" className="bg-red-400 text-white" >Medio</option>
      <option value="baixo" className="bg-violet-700 text-white" >Baixo</option>
      <option value="planejado" className="bg-green-500 text-white" >Planejado</option>
    </select>
  </div>
</div>

<div className="flex flex-col p-4">
<label className="px-3">Observação:</label>
<textarea  {...register("observacao", { required: false })} className="form-textarea text-black rounded-full select-none outline-none focus:outline-0 h-full " />
{errors.name && <span>Nome</span>}
</div>


<div className="flex w-full justify-end">
<span className="m-4">
  <input type="submit" className="border-2 border-black bg-blue-500 text-white p-2 mr-2 rounded" />
  <input type="button" onClick={() => reset()} value="Limpar" className="border-2 border-black pt-2 bg-red-500 text-white p-2 rounded" />
</span>
</div>

    </div>
    </form>

  );

}

export default NewTiket;