import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Sidebar'
import Finances from './Finances'
import Statements from './Statements'
import Updates from './Updates'
export default function Main() {
  return (
    <div className='main'>
    <Sidebar/>
    <Routes>
      <Route path='/main/home' element={<Home/>}/>
      <Route path='/main/finances' element={<Finances/>}/>
      <Route path='/main/statements' element={<Statements/>}/>
      <Route path='/main/updates' element={<Updates/>}/>
    </Routes>
    </div>
  )
}
