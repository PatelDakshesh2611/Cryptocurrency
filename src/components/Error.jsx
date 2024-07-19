import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <div>
    <Alert status='error'
     position={'fixed'}
     bottom={'4'}
     >Error occured while getting data <br />
     please try after sometime
      </Alert>
    </div>
  )
}

export default Error
