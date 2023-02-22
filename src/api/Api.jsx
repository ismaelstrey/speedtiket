import axios from "axios";
const url = `https://api.jsonbin.io/v3/b/63f4cf86c0e7653a057bc4a5`;
const options = {
  headers: {
    "X-Master-Key":
      "$2b$10$/26q/3HIgBcqKaOku5XDZuiF4O7z25h3bJNIcZCKC3F6Z0TJRj3/W",
    "Content-Type": "application/json",
  },
};

const getTiketApi = async () => await axios.get(url, options);
const postTiketApi = async (data) =>
  await axios.post("http://localhost:3000/tiket", data, options);

const { data } = await getTiketApi();
const { cliente, tiket } = await data.record;

export { cliente, tiket, postTiketApi };
