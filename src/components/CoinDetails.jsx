import { Box, Container,RadioGroup,Radio,HStack, VStack,Text, Img, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Error from './Error'
import React from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import Chart from './Chart'

const Coindetails = () => {
  const[Loading,setloading]=useState(true)
  const[error,seterror]=useState(false)
  const[coins,setcoin]=useState({})
  const[currency,setcurrency]=useState('inr')
  const[days,setdays]=useState('24h')
  const[chararray,setchartarray]=useState([])
  const params=useParams()
  const id=params.id
  // console.log(id)
  const fetcCoin=async()=>{
    try {
      const {data}=await axios.get(`https://api.coingecko.com/api/v3//coins/${id}`)
      
      const {data:chartdata}=await axios.get(`https://api.coingecko.com/api/v3//coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
     
    setcoin(data)
    setchartarray(chartdata.prices)
    
    setloading(false)
    } catch (error) {
      seterror(true)
      setloading(false)
      
    }

  } 
  useEffect(()=>{
    fetcCoin()
  },[id])
  const currencysymbol=currency==='inr'?'₹':currency==='eur'?'€':'$'
  if(error) return <Error/>
  return (
    <Container maxW={'container.xl'}>
      {
        Loading?<Loader></Loader>:<>
        
          

           {/*      BUTTOn         */}
           <RadioGroup value={currency} onChange={setcurrency} ml={'5vw'} mt={'10px'}>
        <HStack spacing={'4'}>
          <Radio value='inr'>IND</Radio>
          <Radio value='eur'>EUR</Radio>
          <Radio value='usd'>USD</Radio>
        </HStack>
      </RadioGroup>
      <Box borderWidth={'1'} width={'full'} alignItems={'center'} >
                
                <Chart  currency={currencysymbol} arr={chararray} days={days}></Chart>
           </Box>
      <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
      
                 <Text fontSize={'small'} alignSelf={'center'} opacity={'0.9'}>
                  Last updated on {Date(coins.market_data.last_updated).split('G')[0]}
                 </Text>
                 <Img src={coins.image.large} w={'16'} height={'16'} objectFit={'contain'}>
                 </Img>
                 <Stat>
                  <StatLabel>
                    {coins.name}
                  </StatLabel>
                  <StatNumber>
                    {currencysymbol}{coins.market_data.current_price[currency]}
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow type={coins.market_data.price_change_percentage_24h>0?'increase':'decrease'}/>
                      {coins.market_data.price_change_percentage_24h}%
                 
                  </StatHelpText>
                 </Stat>
                 <Badge fontSize={'2xl'} bgColor={'blackAlpha.600'} color={'white'}>
                  {`#${coins.market_cap_rank}`}
                 </Badge>
                 <Custombar high={`${currencysymbol}${coins.market_data.high_24h[currency]}`} low={`${currencysymbol}${coins.market_data.low_24h[currency]}`}>

                 </Custombar>
                 <Box w={'full'} p={'4'}>
                    <Item title={"Max supply"} value={coins.market_data.max_supply}></Item>
                    <Item title={"Circulating supply"} value={coins.market_data.circulating_supply}></Item>
                    <Item title={"Market Capital"} value={`${currencysymbol}${coins.market_data.market_cap[currency]}`}></Item>
                    <Item title={'All time Low'} value={`${currencysymbol}${coins.market_data.atl[currency]}`}>

                    </Item>
                    <Item title={'All time High'} value={`${currencysymbol}${coins.market_data.ath[currency]}`}>

                    </Item>
                 </Box>
                
      </VStack>
        </>
        
      }
    </Container>
  )
}


const Item=({title,value})=>{
  return(
    <HStack justifyContent={'space-between'} w={'full'} my={'4'}> 
      <Text fontWeight={'bold'} letterSpacing={'widest'}>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  )


}
const Custombar=({high,low})=>{
  return(
  <VStack w={'full'}>
    <Progress value={'100'} colorScheme='teal' w={'full'}/>
    <HStack justifyContent={'space-between'} w={'full'}>
    <Badge children={low} colorScheme='red'/>
    <Text fontSize={'small'}>24H Range</Text>
    <Badge children={high} colorScheme='green'></Badge>
    </HStack>
  </VStack>)
}

export default Coindetails
