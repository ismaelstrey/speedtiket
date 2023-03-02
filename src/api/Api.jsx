import axios from "axios";
// const url = `https://api.jsonbin.io/v3/b/63f4cf86c0e7653a057bc4a5`;
const options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

// const getTiketApi = async () => await axios.get(url, options);
const getTiketApi = async () => await axios.get('https://tiket-back.vercel.app/tiket');
// const getClienteApi = async () => await axios.get('http://localhost:3000/cliente');
const postTiketApi = async (data) => {
  const { observacao, problema_informado } = data

  const dataPost = { "observacao": observacao, "problema_informado": problema_informado }
  console.log(dataPost)
  const post = async () => await axios.post("https://numerous-sugared-enthusiasm.glitch.me/tiket", dataPost, options);
  return await post
}

const { data } = await getTiketApi();
const tiket = await data;
// console.log(data)
export { tiket, postTiketApi };
