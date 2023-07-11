import React from 'react'

import Appbar from './component/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import ProductAdd from './pages/ProductAdd'

const App = () => {
  return (<>

  <Appbar/>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/product' element={<ProductAdd/>}/>
    <Route path='/details/:id' element={<Details/>}  />
  <Route path='*' element={<h1>Page Not Found</h1>}  />
  </Routes>
  </BrowserRouter>

  </>
  )
}

export default App