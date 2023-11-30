import React from 'react'
import { Link } from 'react-router-dom'
// import './Css/Home.css'

export const Home = () => {
  return (
    <div className="home-container">
    <h1>You got the travel plans, we got the travel Phones.</h1>
    <p>Add adventure to your life by joining the #MobileLIfe movement. Rent the perfect van to make your perfect road trip.</p>
    <Link to="mobile">Find your phone</Link>
</div>
  )
}
