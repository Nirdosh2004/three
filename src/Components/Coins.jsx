import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Button, Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [page,setPage] = useState(1)
  const [currency , setCurrency] = useState('inr')

  const currencySymbol = currency ==='inr'?'₹':currency==='eur'?'€' : '$';

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  useEffect(()=>{

    const fetchCoins = async ()=>{
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setLoading(false);
      } 
      catch (error) {
        setError(true);
        setLoading(false);
      }
    };
     fetchCoins();
  },[currency,page])

  if(error) return <ErrorComponent message={'Error while Fetching Coins'} />;

  return (
    <Container maxW={'container.xl'} >
     {loading ? (
      <Loader/>
     ) : (
     <>
     <HStack wrap={'wrap'} >
      {coins.map((i)=>(
      <CoinCard id={i.id}  name={i.name} price={i.current_price} img={i.image} symbol={i.symbol} currencySymbol={currencySymbol} />
      ))}
     </HStack>

     <HStack>
       <Button bgColor={'blackAlpha.900'} color={'white'} onClick={()=>changePage(2)}>2</Button>
     </HStack>
     </>
    )}
    </Container>
  )
}




export default Coins