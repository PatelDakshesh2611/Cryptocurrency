import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import CoinDetails from './components/CoinDetails'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coins' element={<Coins/>}></Route>
        <Route path='/exchanges' element={<Exchanges/>}></Route>
        <Route path='/coin/:id' element={<CoinDetails/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
