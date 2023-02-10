import { Kanban } from "../Kanban/kanban";

export {Fazendo} from "./fazendo";
export {Concluidos} from "./concluidos";
export {Pausados} from "./pausados";
export {Urgentes} from "./urgentes";

const Tiket =() =><div>
<Kanban></Kanban>
</div>

export default Tiket;