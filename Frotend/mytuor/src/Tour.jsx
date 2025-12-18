import React from 'react'
import tour from "./assets/images/tour.jpg"
import Info from './Info'
import Feature from './Feature'
import Subscription from './Subscription'
const Tour = () => {
  return (
    <> 
       <div>
        <img src={tour} alt=""  style={{width:"100%", height:"400px"}}/>
        <h2 style={{position:"relative", bottom:"200px", textAlign:"center", color:"white", fontSize:"50px"}}>All Tours</h2>
       </div>
        <Info/>
        <Feature/>
        <Subscription/>
       
    </>
  )
}

export default Tour