import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './style.css'
const Header = () => {
  const [buttonclasshandler,updclass]=useState('Home')
  return (
    <div>
      <HStack  justifyContent={'space-around'} p={'4'} shadow={'base'} bgColor={'blackAlpha.900'}>
        <Button transition={'all 0.3s'} css={{
          '&:hover':{
             'backgroundColor':'ghostwhite',
            'color':'black'          }
         }} variant={'unstyled'} color={'white'}>
            <Link onClick={()=>{updclass('Home')}} className={buttonclasshandler==='Home'?'color':''}  to='/'>Home</Link>
        </Button>
        <Button  variant={'unstyled'} transition={'all 0.3s'}  color={'white'} css={{
          '&:hover':{
             'backgroundColor':'ghostwhite',
            'color':'black'          }
         }}>
            <Link onClick={()=>{updclass('Coins')}}  className={buttonclasshandler==='Coins'?'color':''} to='/coins'>Coins</Link>
        </Button>
        <Button variant={'unstyled'} transition={'all 0.3s'} css={{
          '&:hover':{
             'backgroundColor':'ghostwhite',
            'color':'black'          }
         }} color={'white'}>
            <Link onClick={()=>{updclass('exchanges')}} className={buttonclasshandler==='exchanges'?'color':''}  to='/exchanges'>Exchanges</Link>
        </Button>
      
      </HStack>
      
    </div>
  )
}

export default Header
