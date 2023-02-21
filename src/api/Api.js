import axios from "axios";

const getTiketApi = async()=> await axios.get("http://localhost:3000/tiket")
const {data} = await getTiketApi()
const dataApiTiket = data

export {dataApiTiket}