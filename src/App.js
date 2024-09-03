import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Coins from './Components/Coins'
import Exchanges from './Components/Exchanges'
import CoinDetails from './Components/CoinDetails'

const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path='/exchanges' element={<Exchanges/>} />
      <Route path='/coindetails' element={<CoinDetails/>} />
    </Routes>
   </Router>
  )
}

export default App