import React from 'react'
import logo from "./assets/images/logo.png"
import { FaGithub, FaLinkedin, FaPhoneAlt, FaUserCog } from 'react-icons/fa'
import { CgInstagram } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

const Footer = () => {
  return (
    <> 
         
         <div className='mt-5 ms-5 me-5' style={{display:"flex", gap:"6%", fontSize:"20px"}}>
            <div>
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor temporibus <br /> quidem reiciendis. Explicabo, non sequi? Saepe est nostrum consequatur   minus.</p>
                <div style={{display:"flex", gap:"30px"}}>
                    <h5><FaUserCog /></h5>
                    <h5><FaGithub /></h5>
                    <h5><FaLinkedin /></h5>
                    <h5><CgInstagram /></h5>
                </div>
            </div>
            <div className='content'>
                <h6 className='fs-4 mb-4'>Discover</h6>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Tours</li>
                </ul>
            </div>
            <div className='content'>
                <h6 className='fs-4 mb-4'>Quick Links</h6>
                <ul>
                    <li>Gallery</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
            <div className='content'>
                <h6 className='fs-4 mb-4'>Contact</h6>
                <ul>
                    <li><FaLocationDot style={{color:"rgb(255, 140, 0)"}}/> Address : Bengaluru</li>
                    <li><MdOutlineMail style={{color:"rgb(255, 140, 0)"}} /> Email : ganesh@gmail.com</li>
                    <li><FaPhoneAlt style={{color:"rgb(255, 140, 0)"}}/> Phone : +19 7989972625</li>
                </ul>
            </div>
         </div>
         <div>
            <p style={{textAlign:"center",padding:"20px"}}>Copyright 2025, Design and develop by Ganesh. All right reseved.</p>
         </div>
    </>
  )
}

export default Footer