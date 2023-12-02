import React from 'react'
import { Link ,Navigate} from 'react-router-dom'
// import './Css/Mobile.css'

const Mobile = () => {
  const [mobile,setMobile]=React.useState([])
  React.useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data=>setMobile(data.products))
  },[])
  const vanElements = mobile.map(van => (
    <div key={van.id} className="van-tile">
        <Link to={`/mobile/${van.id}`}>
            <img src={van.thumbnail} />
            <div className="van-info">
                <h3>{van.title}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type`}>{van.category}</i>
        </Link>
    </div>
))

return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
            {vanElements}
        </div>
       
    </div>
)
}

export default Mobile