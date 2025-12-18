import React from 'react'
import { BiSolidEditLocation } from 'react-icons/bi';
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlinePeopleOutline } from 'react-icons/md';


const Info = () => {
  return (
    <>
      <div className='rounded-pill ms-5 ' style={{ backgroundColor: "rgb(245, 243, 241)", display: 'flex', gap: '50px', padding: '10px', alignItems: 'center', marginRight: "40%" }}>
        <div style={{ borderRight: '1px solid #ccc', paddingRight: "80px", }}>
          <h6 className='mt-3' > <CiLocationOn style={{ color: "rgb(206, 105, 164)", fontSize: "20px" }} />   Location </h6>
          <p className='ms-4'>Where are you going?</p>
        </div>
        <div style={{ borderRight: '1px solid #ccc', paddingRight: "70px", paddingLeft: "30px" }}>
          <h6 className='mt-3'> <BiSolidEditLocation style={{ color: "rgb(206, 105, 164)", fontSize: "20px" }} />   Distance</h6>
          <p className='ms-4'>Destance k/m</p>
        </div>
        <div >
          <h6 className='mt-3'> <MdOutlinePeopleOutline style={{ color: "rgb(206, 105, 164)", fontSize: "20px" }} />   Max People</h6>
          <p className='ms-4'>0</p>
        </div>
        <div>
          <h6 style={{ backgroundColor: "#f99835", fontSize: "25px", borderRadius: "5px", padding: "3px", marginRight: "20px", marginLeft: "70px", borderStartStartRadius: "15px" }}> <IoSearchOutline /></h6>
        </div>
      </div>

    </>
  )
}

export default Info