import { useEffect, useState } from "react";
import { loadTiket as dataApiTiket } from "../../api/Api";
import { KanbanColumn } from "./_kanbanColumn/KanbanColumn";
import { KanbanContainer } from "./_kanbanContainer";
import { KanbanContainerCard } from "./_kanbanContainerCard";
import { useContext } from "react";
import { KanbanContext } from "../../usecontext/KanbamContext";


const filtra =  (array, text) =>  array.filter( (fill) =>fill.status.name === text)

 
const RenderKanbanCard = async (array) => {
  const list = await array.array;
console.log(list)
  return  list.map((data) =>
   
    <KanbanContainerCard
      key={data.id}
      id={data.id}
      title={data.cliente}
      text={data.problema_informado}
      data={data.updated_at}
      user={data.tecnico}
      status={data.status}
    />
  );
};

const Kanban = () => {
  const {tiket,loadDataKanbanApi} = useContext(KanbanContext)
  const [tiketAtendendo, setTiketAtendendo] = useState([]);
  const [tiketAFazer, setTiketAFazer] = useState([]);
  const [tiketPausados, setTiketPausados] = useState([]);
  const [tiketRetornados, setTiketRetornado] = useState([]);
  const [tiketExpirados, setTiketExpirados] = useState([]);
  useEffect( () => {
    loadDataKanbanApi().then(()=>{
     console.log(tiket)
      // setTiketAtendendo(filtra(tiket, "atendendo"));
      console.log(filtra(tiket, "aberto"))
      setTiketAFazer(filtra(tiket, "aberto"));
    //   setTiketPausados(filtra(tiket, "pausados"));
    //   setTiketRetornado(filtra(tiket, "retornados"));
    //   setTiketExpirados(filtra(tiket, "expirados"));
    })
    
    
  }, [tiket]);

  return (
   
    tiket && <KanbanContainer>
    <KanbanColumn
      titleColor="bg-red-500"
      bordeColor="border-red-500"
      textColor="text-white"
      title="A FAZER"
      total={10}
    >
      {/* <RenderKanbanCard array={tiketAFazer} /> */}
    {/* </KanbanColumn>
    <KanbanColumn
      titleColor="bg-green-500"
      bordeColor="border-green-500"
      textColor="text-white"
      title="ATENDENDO"
      total={10}
    >
      <RenderKanbanCard array={tiketAtendendo} />
    </KanbanColumn>
    <KanbanColumn
      titleColor="bg-yellow-500"
      bordeColor="border-yellow-500"
      textColor="text-white"
      title="PAUSADOS"
      total={10}
    >
      <RenderKanbanCard array={tiketPausados} />
    </KanbanColumn>
    <KanbanColumn
      titleColor="bg-blue-500"
      bordeColor="border-blue-500"
      textColor="text-white"
      title="RETORNADOS"
      total={10}
    >
      <RenderKanbanCard array={tiketRetornados} />
    </KanbanColumn>
    <KanbanColumn
      titleColor="bg-orange-500"
      bordeColor="border-orange-500"
      textColor="text-white"
      title="EXPIRADOS"
      total={10}
    >
      <RenderKanbanCard array={tiketExpirados} /> */}

    </KanbanColumn>
  </KanbanContainer>
  );
};
export { Kanban };
