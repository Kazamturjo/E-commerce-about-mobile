import React from 'react'
import { useLocation,useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import "./Css/Mobile.css"

const MobileDetails = () => {
    const params = useParams()
    
    const [phone,setphone]= React.useState(null)
    const location = useLocation()
    console.log(location,"location");

    React.useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res=>res.json())
        .then(data=>setphone(data))
            
    },[params.id])

   

  return (
    <>
  
    <nav className="host-van-detail-nav">
    <Link
                to="../"
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
                    
    {phone ? (
        <div className="van-detail">
            <img src={phone.thumbnail} />
        
            <i className='van-type'>{phone.category}</i>
            <h2>{phone.name}</h2>
            <p className="van-price"><span>{phone.price}</span>/day</p>
            <p>{phone.description}</p>
            <button className="link-button">Rent this products</button>
        </div>
    ) : <h2>Loading...</h2>}
</nav>
    
    
    </>
    
)
}

export default MobileDetails