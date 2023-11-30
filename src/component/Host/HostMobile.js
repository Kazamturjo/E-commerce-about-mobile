import React from 'react'
import { Link } from 'react-router-dom'

const HostMobile = () => {
    const[ mobile,setMobile]= React.useState([])


    React.useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setMobile(data.products))
    },[])
    const hostMobileElle= mobile.map(phone=>(
        <Link 
        to={`/mobile/${phone.id}`}
        key={phone.id}
        className='host-van-link-wrapper'>
            <div className="host-van-single" key={phone.id}>
                <img src={phone.thumbnail} alt={`Photo of ${phone.name}`}/>
                <div className="host-van-info">
                <h3>{phone.name}</h3>
                <p>${phone.price}/day</p>
            </div>
        </div>

           

        </Link>
    ))
  return (
    <section>
        <h1 className="host-vans-title">Your listed phone</h1>
        <div className="host-vans-list">
            {
                mobile.length >0 ?(
                    <section>
                        {hostMobileElle}
                    </section>
                ):(
                    <h2>Loading.....</h2>
                )
            }
        </div>
    </section>
  )
}

export default HostMobile