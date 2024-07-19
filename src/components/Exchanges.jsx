import React, { useEffect, useState } from 'react'
import { server } from '../index'
import Error from './Error'
import axios from 'axios'
import { Button, Container, HStack } from '@chakra-ui/react'
import Loader from './Loader'
import Exchangecard from './Exchangecard'
const Exchanges = () => {
  const[Loading,setloading]=useState(true)
  const[error,seterror]=useState(false)
  const[exchanges,setexchanges]=useState([])
  const[pages,setpage]=useState(0)
  const btns=new Array(6).fill(1)
  const fetchExchanges=async()=>{
    try {
      const {data}=await axios.get(`${server}/exchanges?per_page=100&page=${pages}`)
    setexchanges(data)
    setloading(false)
    } catch (error) {
      seterror(true)
      setloading(false)
      
    }

  } 
  useEffect(()=>{
    fetchExchanges()
  },[pages])
  const nextpage=(value)=>{
    if(value===pages){
      alert(`your'e already on page ${value}`)
    }else{
    setloading(true)
    setpage(value)}
  }
  if(error) return <Error/>
  return (
    <div>
     <Container maxW={'container.xl'}>
       {
        Loading? <Loader/>:<>
          <HStack justifyContent={'space-evenly'} wrap={'wrap'}>
            {
              exchanges?.map((u)=>{
                return(
                   <Exchangecard key={u.id} name={u.name} img={u.image} rank={u.trust_score_rank} url={u.url}/>
                  )
              })
            }
          </HStack>
          <HStack ml={'37vw'} overflowX={'auto'}>
            { btns?.map((data,index)=>{
              return(
            <Button bg={'blackAlpha.900'} color={'white'} onClick={()=>{nextpage(index+1)}}>
                {index+1}
            </Button>)
            })
           }
          </HStack>
        </>
       }
     </Container>
    </div>
  )
}

export default Exchanges
