//instalar axios
//importar axios
import axios from 'axios'; 

//Usar o IPV4
const api = axios.create({
    baseURL:"http://10.3.60.131:3000"
})

export default api;