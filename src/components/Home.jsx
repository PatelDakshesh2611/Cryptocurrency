import { Box,HStack,Image,Img,Text,VStack } from '@chakra-ui/react'
import React from 'react'
import crypt from '../components/cryptocurrency-bitcoin-isolated-black-background-vector-out-cryptocurrency-bitcoin-isolated-black-background-vector-outline-119233698.webp'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
     
        <Box bgColor={'black'} w={'full'} h={'85vh'}>
          <Img w={'full'} h={'full'} objectFit={'contain'} borderColor={'white'} src={crypt}></Img>
          <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mb={'100'}>Crypoto</Text>
        </Box>
        <Footer></Footer>
    </div>
  )
}

export default Home

