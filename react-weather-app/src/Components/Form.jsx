import { useState } from "react"
import { Box, InputBase,Button,styled } from "@mui/material"
import { getWeather } from "../Services/api"

const Container = styled(Box)({
    background:'#445A6f',
    padding:10
})

const Input = styled(InputBase)({
    color:'#FFF',
    marginRight:20,  //20 px
    fontSize: 18
})

const GetButton = styled(Button)({
    background:"orange", //Ffa500,#e67e22
    width:130
})



const Form = ({setResult}) =>{

    const handleChange = (e) =>{
        setData({...data , [e.target.name] : e.target.value})
    }

    const getWeatherInfo = async() =>{
     let response = await getWeather(data.city,data.country);
     setResult(response)
    }

    const [data,setData] = useState({city:"",country:""})


    return(
        <Container>
            <Input 
            placeholder="City"
            onChange={(e) => handleChange(e)}
            name="city"
            />
            <Input
             placeholder="Country"
             onChange={(e) => handleChange(e)}
             name="country"
            />
            <GetButton 
            variant="contained"
            onClick={() => getWeatherInfo()}
            >Get Weather</GetButton>
        </Container>
    )
}

export default Form