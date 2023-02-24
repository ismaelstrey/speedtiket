import { useEffect, useState } from "react";
import { tiket as dataApiTiket } from "../../api/Api";
import { KanbanColumn } from "./_kanbanColumn/KanbanColumn";
import { KanbanContainer } from "./_kanbanContainer";
import { KanbanContainerCard } from "./_kanbanContainerCard";

const filtra = (array, text) =>
  array.filter((fill) => {
    let data = fill["status"] === text;
    return data;
  });
const RenderKanbanCard = (array) => {
  const list = array.array;

  return list.map((data) => (
    <KanbanContainerCard
      key={data.id}
      id={data.id}
      title={data.cliente}
      text={data.problema_informado}
      data={data.updated_at}
      user={data.tecnico}
      status={data.status}
    />
  ));
};

const Kanban = () => {
  const [tiket, setTiket] = useState([dataApiTiket]);
  const [tiketAberto, setTiketAberto] = useState([]);
  const [tiketAtendendo, setTiketAtendendo] = useState([]);
  const [tiketAFazer, setTiketAFazer] = useState([]);
  const [tiketPausados, setTiketPausados] = useState([]);
  const [tiketRetornados, setTiketRetornado] = useState([]);
  const [tiketExpirados, setTiketExpirados] = useState([]);
  useEffect(() => {
    console.log(tiket)
    setTiketAtendendo(filtra(tiket[0], "atendendo"));
    setTiketAFazer(filtra(tiket[0], "fazer"));
    setTiketPausados(filtra(tiket[0], "pausados"));
    setTiketRetornado(filtra(tiket[0], "retornados"));
    setTiketExpirados(filtra(tiket[0], "expirados"));
  }, []);

  return (
    <KanbanContainer>
      <KanbanColumn
        titleColor="bg-red-500"
        bordeColor="border-red-500"
        textColor="text-white"
        title="A FAZER"
      >
        <RenderKanbanCard array={tiketAFazer} />
      </KanbanColumn>
      <KanbanColumn
        titleColor="bg-green-500"
        bordeColor="border-green-500"
        textColor="text-white"
        title="ATENDENDO"
      >
        <RenderKanbanCard array={tiketAtendendo} />
      </KanbanColumn>
      <KanbanColumn
        titleColor="bg-yellow-500"
        bordeColor="border-yellow-500"
        textColor="text-white"
        title="PAUSADOS"
      >
        <RenderKanbanCard array={tiketPausados} />
      </KanbanColumn>
      <KanbanColumn
        titleColor="bg-blue-500"
        bordeColor="border-blue-500"
        textColor="text-white"
        title="RETORNADOS"
      >
        <RenderKanbanCard array={tiketRetornados} />
      </KanbanColumn>
      <KanbanColumn
        titleColor="bg-orange-500"
        bordeColor="border-orange-500"
        textColor="text-white"
        title="EXPIRADOS"
      >
        <RenderKanbanCard array={tiketExpirados} />
      </KanbanColumn>
    </KanbanContainer>
  );
};
export { Kanban };
