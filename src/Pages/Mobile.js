import React from 'react'
import { Link ,Navigate, useSearchParams} from 'react-router-dom'
// import './Css/Mobile.css'

const Mobile = () => {
  const [mobile,setMobile]=React.useState([])
  const[searchParams,setSearchParams]=useSearchParams()

 const typeFilter=searchParams.get('category')


  React.useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data=>setMobile(data.products))
  },[])
  
  

   const displayChar= typeFilter 
   ? mobile.filter(phn=>phn.category === typeFilter):mobile

   const setCategoryFilter = (category) => {
    setSearchParams({ category });
  };

  const vanElements = displayChar.map(van => (
    <div key={van.id} className="van-tile">
        <Link to={`/mobile/${van.id}`} state={{ searchParams: searchParams }}>
            <img src={van.thumbnail} />
            <div className="van-info">
                <h3>{van.title}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type`}>{van.category}</i>
        </Link>
        <button onClick={() => setCategoryFilter(van.category)}>
        Filter by {van.category}
      </button>
    </div>
))

return (
    <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className='Category'>
        <Link to="?category=smartphones"className='van-type'>Mobile</Link>
        <Link to="?category=laptops"className='van-type'>LapTop</Link>
        <Link to="?category=fragrances"className='van-type'>Fragrances</Link>
        <Link to="?category=skincare"className='van-type'>Skincare</Link>
        <Link to="?category=groceries"className='van-type'>Groceries</Link>
        <Link to="?category=home-decoration"className='van-type'>Home-decoration</Link>
        <Link to="." className='van-type'>Clear</Link>
        </div>
        <div className="van-list">
            {vanElements}
        </div>
       
    </div>
)
}

export default Mobile