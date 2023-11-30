import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import './Host.css'

const HostLayout = () => {
  return (
    <div>
        <nav className='host-nav'>
            <Link to=".">Deshboard</Link>
            <Link to="income">Income</Link>
            <Link to="mobile">Mobile</Link>
            <Link to="review">Review</Link>
        </nav>
        
        <Outlet/>
    </div>
  )
}

export default HostLayout