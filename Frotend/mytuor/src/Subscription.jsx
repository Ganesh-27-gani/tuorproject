import React from 'react'
import male from "./assets/images/male-tourist.png"

const Subscription = () => {
    return (
        <>
            <div className='mt-5' style={{display:"flex", backgroundColor:"rgb(105, 207, 232)"}}>
                <div className='ms-5 mt-5'>
                <h1 style={{fontSize:"50px"}}>Subscribe now for usefull <br />travelling information</h1>
                <nav className="navbar navbar-light ">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control mt-3" type="search" placeholder="Enter your email" aria-label="Search" style={{width:"555px", padding:"1px"}}  />
                            <button className="btn mt-4 mb-2" type="submit" style={{position:"relative", right:"100px",backgroundColor:" rgb(255, 140, 0)" ,padding:"10px"}}>Subscribe</button>
                        </form>
                    </div>
                </nav>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum explicabo sed  hlo this is ganmesh mnbzshj kjhs  jjorem ipsum dolj <br /> harum impedit quis vel, provident ut quibusdam obcaecati nobis dolorum ratione officia doloribus id voluptas, quidem possimus dolorem.</p>
                </div>
                <div>
                    <img src={male} alt="" style={{width:"100%", height:"83%"}}/>
                </div>
            </div>
        </>
    )
}

export default Subscription