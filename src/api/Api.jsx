import axios from "axios";
import { v4 } from "uuid";
import moment from "moment/moment";
// const url = `https://api.jsonbin.io/v3/b/63f4cf86c0e7653a057bc4a5`;
const options = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

// const getTiketApi = async () => await axios.get(url, options);
const getTiketApi = async () => await axios.get('https://tiket-back.vercel.app/tiket');
// const getClienteApi = async () => await axios.get('http://localhost:3000/cliente');
const postTiketApi = async (array) => {
  const dalataList = {
    "id": v4(),
    ...array,
    "status": "retornados",
    "tecnico": "Antonio",
    "created_at": moment().format('L'),
    "updated_at": moment().format('L'),

  }
  console.log(array)
  const { data } = await axios.post('http://localhost:3000/tiket', {
    ...dalataList
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }
  )
  return data
}

const { data } = await getTiketApi();
const tiket = await data;
// console.log(data)
export { tiket, postTiketApi };
