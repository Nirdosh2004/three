import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container } from '@chakra-ui/react';
import Loader from './Loader';

const Exchanges = () => {

  const [exchanges,setExchanges] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    const fetchExchanges = async()=>{
      const data = await axios.get(`${server}/exchanges?page=3`);
      setExchanges(data);
      console.log(data);
      setLoading(false);
    };
     fetchExchanges();
  },[])


  return (
    <Container maxW={'container.xl'} >
      {
      loading? <Loader/> : <>
        <
      </> 
      }
    </Container>
  )
}

export default Exchanges