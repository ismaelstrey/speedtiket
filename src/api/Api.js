import axios from "axios";
const url = `https://api.jsonbin.io/v3/b/63f4cf86c0e7653a057bc4a5`
const options = {
    headers:{
        "X-Master-Key":"$2b$10$/26q/3HIgBcqKaOku5XDZuiF4O7z25h3bJNIcZCKC3F6Z0TJRj3/W"
    }
}

const getTiketApi = async () => await axios.get(url,options);
const { data } = await getTiketApi();
const {cliente,tiket} = data.record

export { cliente, tiket };
