import React from 'react'
import { useOutletContext } from "react-router-dom"
import Footer from "../Footer";



const HostPhoto = () => {
  const { currentVan } = useOutletContext()
  console.log(currentVan);

 const mobileElle= currentVan.images.map(phone=>(
  

    <img src={phone} />
 

 ))


  return (
    <>
    
   
    <div className='host-van-detail-image'>

      {mobileElle}
      <Footer/>
    </div>
    </>
  )
}

export default HostPhoto