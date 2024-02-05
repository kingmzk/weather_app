import {Box, styled} from '@mui/material'
import sunset from "../assets/images/bg.jpg"
import { useState } from 'react';

import Information from '../Components/Information';
import Form from '../Components/Form';


const Component = styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    margin:'0 auto',
    width:'65%'
})

const Image = styled(Box)({
    backgroundImage:`url(${sunset})`,
    width: '27%',
    height:'80%',
    backgroundSize:'cover',
    borderRadius:'20px 0 0 20px'
})

const Home  = () =>
{
    const [result, setResult] = useState({})
    return (
        <Component>
          <Image></Image>
          <Box style={{width:'73%',height:'80%'}}>
            <Form setResult = {setResult}/>
            <Information result = {result}/>
          </Box>
        </Component>
    )
}
export default Home