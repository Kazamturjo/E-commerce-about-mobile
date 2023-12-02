import React from 'react'
import { useOutletContext } from "react-router-dom"


const HostPricing = () => {
  const { currentVan } = useOutletContext()

  return (
    <div><h4>${currentVan.price}/day</h4></div>
  )
}

export default HostPricing