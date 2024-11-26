import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Mainbody = () => {
  return (
    <div>
      
    
      
      <Outlet/>
    </div>
  )
}

export default Mainbody
