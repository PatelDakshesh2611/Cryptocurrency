import { VStack,Image, Heading,Text } from '@chakra-ui/react'

import React from 'react'

const Exchangecard = ({name,img,rank,url}) => {
  return (
    <div>
      <a href={url} target='blank'>
       <VStack  w={'52'} shadow={'dark-lg'} p={'8'}  transition={'all .4s'} m={'4'} ml={'14'} css={{
        '&:hover':{
           'transform':'scale(1.1)'
        }
       }}>
        <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt='exchanges'/>
        <Heading size={'md'} noOfLines={1}>
            {rank}
        </Heading>
        <Text noOfLines={'1'} >
            {name}
        </Text>
       </VStack>
      </a>
    </div>
  )
}

export default Exchangecard
