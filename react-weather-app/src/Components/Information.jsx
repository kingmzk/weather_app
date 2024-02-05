import { Box, Typography,styled } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';


const Row = styled(Typography)({
    padding:10,
    fontSize:20,
    letterSpacing:2,
    '& > svg':{
        marginRight:10
    }
})

const Error = styled(Box)({
    color:'red',
    margin: 50,
    padding:20
})

const Information = ({result}) =>
{
    return (
       result && Object.keys(result).length > 0 ?
       <Box style={{margin:'30px 60px'}}>
            <Row><LocationOnIcon/>Location : {result.name}, {result.sys.country}</Row>
            <Row><DeviceThermostatRoundedIcon/>`Temperature : {result.main.temp} °C`</Row>
            <Row><OpacityIcon/>`Humidity : {result.main.humidity} %`</Row>
            <Row><Brightness6Icon/>Sunrise : {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6Icon/>Sun set : {new Date(result.sys.sunset* 1000).toLocaleTimeString()}</Row>
            <Row><AcUnitIcon/>`Humidity : {result.weather[0].main}`</Row>
            <Row><WbCloudyIcon/>`Clouds : {result.clouds.all}`</Row>
       </Box>
       : 
       <Error variant="h2">Please Enter Proper City and Country</Error>
    )
}

export default Information