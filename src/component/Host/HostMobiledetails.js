import React from 'react'
import { Link, useParams ,NavLink, useNavigate, Outlet} from 'react-router-dom'
import HostInfo from './HostInfo'

const HostMobiledetails = () => {
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const {id}=useParams()
    const [currentVan,setCurrentVan]=React.useState(null)
    // let navigate = useNavigate()

    React.useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>
            setCurrentVan(data))
    },[])
    // if(!currentVan){
    //     return <h1>Loading....</h1>
    // }
    
  return (
    <>
        <Link 
        to="/host/mobile"
        relative='path'
        className='back-button'>
            &larr;<span>Back to all products</span>
        </Link>
       {currentVan ? (

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan.thumbnail}/>
                <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.description}`}
                        >
                            {currentVan.category}
                        </i>
                        {/* <h3>{currentVan.title}</h3> */}
                        {/* <p>{currentVan.description}</p>
                        <h4>${currentVan.price}/day</h4> */}
                    </div>
               
                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Pricing
                    </NavLink>
                    
                    <NavLink
                        to="picture"
                        style={({ isActive }) => isActive ? activeStyles : null}

                    >
                        Photos
                    </NavLink>
                    
                </nav>


                
            </div>
           
            <Outlet context={{ currentVan }} />
        </div>
       ) : <h1>Loading....</h1>} 

    </>
  )
}

export default HostMobiledetails