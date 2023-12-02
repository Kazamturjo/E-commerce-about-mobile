import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
   <div>
        <div className="site-wrapper">
            <Header />
            <main>
               {/* {children} */}
               <Outlet/>
               <Footer/>
            </main>
        </div>
        
        </div>
   
  )
}

export default Layout