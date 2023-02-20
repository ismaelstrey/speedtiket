import { useForm } from "react-hook-form";

const NewTiket = () => {

  //declarar os métodos que serão utilizados para manipular o form

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  //declarar para qual função o método handleSubmit irá enviar as informações
  const loginUser = data => console.log(data);
  return (
    //no onSubmit do form o método handleSubmit irá manipular as informações para o loginUser

    //o register recebe o nome do input, e os errors apresentam na tela os erros de validação

    <form onSubmit={handleSubmit(loginUser)} className="m-20  flex w-full justify-center content-center items-center bg-slate-100 rounded  border-2 border-black">

    <div className="flex flex-col w-full ">
    <div className="flex w-full">

<div className="flex w-full  p-4 content-center items-start justify-start flex-1">
  <label className="px-3 ">Tipo:</label>
  <select {...register("tipo_empresa", { required: true })}  className="bg-slate-100 flex  border-b-2 border-solid border-black select-none outline-none focus:outline-0 ">
    <option value="fisico">Fisico</option>
    <option value="juridico" selected>Juridico</option>
    <option value="" selected></option>
  </select>
</div>

<div className="flex w-full  p-4 content-center items-start justify-start">
  <label className="px-3 ">Rasão social:</label>
  <input  {...register("rasao_social", { required: true })} className="bg-slate-100 flex-1   border-b-2 border-solid border-black select-none outline-none focus:outline-0" />
  {errors.name && <span>Nome</span>}
</div>

<div className="flex w-full p-4">
  <label className="px-3">Nome fantasia:</label>
  <input  {...register("nome_fantasia", { required: true })} className="bg-slate-100 flex-1 border-b-2 border-solid border-black select-none outline-none focus:outline-0 " />
  {errors.name && <span>Nome</span>}
</div>
</div>

<div className="flex w-full">
<div className="flex p-4 w-full ">
  <label className="px-3">CNPJ:</label>
  <input  {...register("cnpj", { required: true })} className="bg-slate-100 flex flex-1  border-b-2 border-solid border-black select-none outline-none focus:outline-0 " />
  {errors.name && <span>CNPJ</span>}
</div>
<div className="flex p-4 w-full">
  <label className="px-3">IE:</label>
  <input  {...register("ie", { required: true })} className="bg-slate-100 flex  flex-1 border-b-2 border-solid border-black select-none outline-none focus:outline-0 " />
  {errors.name && <span>IE</span>}
</div>
<div className="flex w-full  p-4 content-center items-start justify-start flex-1">
  <label className="px-3 ">Matriz:</label>
  <select {...register("matriz", { required: true })}  className="bg-slate-100 flex flex-1  border-b-2 border-solid border-black select-none outline-none focus:outline-0 ">
    <option value="fisico">Fisico</option>
    <option value="juridico" selected>Juridico</option>
    <option value="" selected></option>
  </select>
</div>
</div>

<div className="flex flex-col p-4">
<label className="px-3">Observação:</label>
<textarea  {...register("observacao", { required: false })} className="bg-slate-100 flex w-full border-2 border-solid border-black select-none outline-none focus:outline-0 h-full " />
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