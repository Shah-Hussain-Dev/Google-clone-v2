import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key:"AIzaSyA8n9P6IhaHc9l5gF7jyFWHrAZNR8bYeOI",
    cx:"05b0a916088ed40fc",
}
export const fetchDataFromApi =async (payload) => {
    const {data} = await axios.get(BASE_URL,{
        params:{...params,...payload}
    })
    return data 
};
