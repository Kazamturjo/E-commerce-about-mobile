import React from 'react'
import { useOutletContext,Link } from "react-router-dom"



const HostPhoto = () => {
  const { currentVan } = useOutletContext()
  console.log(currentVan);

 const mobileElle= currentVan.images.map(phone=>(
  <div key={phone.id} className="van-tile">
      {/* <Link to={`/mobile/${phone.id}`}> */}

           <img src={phone} />
      {/* </Link> */}
           
  </div>


 

 ))


  return (
    <>
    
   
    <div className='van-list-container' >
      <div className='host-van-detail-image'>

      {mobileElle}
      </div>

    
    </div>
    </>
  )
}

export default HostPhoto