import axios from "axios";
// const url = `https://api.jsonbin.io/v3/b/63f4cf86c0e7653a057bc4a5`;
const options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

// const getTiketApi = async () => await axios.get(url, options);
const getTiketApi = async () => await axios.get('https://tiket-back.vercel.app/tiket');
const getTiketApiLocal = async () => await axios.get('http://localhost:3001/tiket');
// const getClienteApi = async () => await axios.get('http://localhost:3000/cliente');
const postTiketApi = async (array) => {
  console.log()
  const { data } = await axios.post('http://localhost:3001/tiket', 
    array
  , {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  return data
}

const { data } = await getTiketApiLocal();
const loadTiket = await data;
// const apiLocal = await getTiketApiLocal()
//  console.log( JSON.stringify(...apiLocal.data))
//  console.log( JSON.stringify(loadTiket))
// console.log(loadTiket)
export { loadTiket, postTiketApi };
