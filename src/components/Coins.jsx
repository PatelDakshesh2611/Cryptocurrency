import React, { useEffect, useState } from 'react'
import { server } from '../index'
import Error from './Error'
import axios from 'axios'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import Loader from './Loader'
import Exchangecard from './Exchangecard'
import Coincard from './Coincard'
const Coins = () => {
  const[Loading,setloading]=useState(true)
  const[error,seterror]=useState(false)
  const[coins,setcoin]=useState([])
  const[page,setpage]=useState(1)
  const btns=new Array(94).fill(1)
  const[currency,setcurrency]=useState('inr')
  const currencysymbol=currency==='inr'?'₹':currency==='eur'?'€':'$'
  const fetchCoin=async()=>{
    try {
      const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
    setcoin(data)
    
    setloading(false)
    } catch (error) {
      
      seterror(true)
      setloading(false)
      
    }

  } 
  useEffect(()=>{
    fetchCoin()
  },[currency,page])

  const changepage=(value)=>{
    setpage(value)
    setloading(true)
  }
  if(error) return <Error/>
  return (
    <div>
     <Container maxW={'container.xl'}>
      
       {
        Loading? <Loader/>:<>
         <RadioGroup value={currency} onChange={setcurrency} ml={'5vw'} mt={'10px'}>
        <HStack spacing={'4'}>
          <Radio value='inr'>IND</Radio>
          <Radio value='eur'>EUR</Radio>
          <Radio value='usd'>USD</Radio>
        </HStack>
      </RadioGroup>
          <HStack justifyContent={'space-evenly'} wrap={'wrap'}>
         
            {
              coins?.map((u)=>{
                return(
                   <Coincard id={u.id} name={u.name} key={u.id} img={u.image} price={u.current_price} symbol={u.symbol} currencysymbol={currencysymbol} />
                  )
              })
            }
          </HStack>
          <HStack w={'full'} overflowX={'auto'} p={'8'}>
          { btns?.map((item,index)=>{
            return(
          <Button bg={'blackAlpha.900'} color={'white'} onClick={()=>{changepage(index+1)}}>{index+1}</Button>)
        })
           }
           </HStack>
        </>
       }
     </Container>
    </div>
  )
}

export default Coins
