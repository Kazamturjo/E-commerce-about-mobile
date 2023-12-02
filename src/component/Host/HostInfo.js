import React from 'react'
import { useOutletContext } from "react-router-dom"

const HostInfo = () => {
  const { currentVan } = useOutletContext()

  return (
    <div className='HostInfo'>
       <h4>Name: {currentVan.title}</h4>
            <h4>Category: {currentVan.category}</h4>
            <h4>Description: {currentVan.description}</h4>
            <h4>Visibility: <span>public</span></h4>

    </div>
  )
}

export default HostInfo