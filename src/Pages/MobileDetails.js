import React from 'react'
import { useParams } from 'react-router-dom'
import { Link,NavLink } from 'react-router-dom'
// import "./Css/Mobile.css"

const MobileDetails = () => {
    const params = useParams()
    const [phone,setphone]= React.useState(null)

    React.useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res=>res.json())
        .then(data=>setphone(data))
            
    },[params.id])
  return (
    <>
     <Link
                to=".."
                className="back-button"
            >&larr; <span>Back to the home</span></Link>
    <div className="van-detail-container">
    <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="/pricing"
                    >
                        Pricing
                    </NavLink>
                    
                    <NavLink
                        to="/photos"
                    >
                        Photos
                    </NavLink>
                    
                </nav>
    {phone ? (
        <div className="van-detail">
            <img src={phone.thumbnail} />
        
            <i className='van-type'>{phone.category}</i>
            <h2>{phone.name}</h2>
            <p className="van-price"><span>${phone.price}</span>/day</p>
            <p>{phone.description}</p>
            <button className="link-button">Rent this products</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
    
    
    </>
    
)
}

export default MobileDetails