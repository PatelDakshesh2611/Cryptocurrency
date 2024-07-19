import React from 'react'
import './loadin.css'
import { Box, Spinner, VStack } from '@chakra-ui/react'

const Loader = () => {
  return (
   <div>
    <VStack h={'90vh'} justifyContent={'center'}>
      
      <Spinner   size={'xl'}>

      </Spinner>
     
    </VStack>
   </div>
  )
}

export default Loader
