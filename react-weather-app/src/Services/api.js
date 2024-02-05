import axios from 'axios'


const API_KEY = 'd2fec04f41d3abadfbb7dc1de1e5a9e4';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
export const getWeather = async(city, country) =>
{
    try{
       let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
       return response.data;
    }
    catch(error){
        console.log("Erorr while Calling the API", error.message);
        return error.response;
    }
}