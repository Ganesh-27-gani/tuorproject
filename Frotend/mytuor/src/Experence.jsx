import React from 'react'
import weather from './assets/images/weather.png'
import guide from './assets/images/guide.png'
import costom from './assets/images/customization.png'
import experience from "./assets/images/experience.png"
import gallery1 from "./assets/images/gallery-01.jpg"
import gallery2 from "./assets/images/gallery-02.jpg"
import gallery3 from "./assets/images/gallery-03.jpg"
import gallery4 from "./assets/images/gallery-04.jpg"
import gallery5 from "./assets/images/gallery-05.jpg"
import gallery6 from "./assets/images/gallery-06.jpg"
import gallery7 from "./assets/images/gallery-07.jpg"
import gallery8 from "./assets/images/gallery-08.jpg"

const Experence = () => {
    return (
        <>

            <div className='mt-5' style={{ padding: '50px', display: "flex" }}>
                <div className='ms-3 me-5 '>
                    <h6

                        style={{
                            color: 'rgb(206, 105, 164)',
                            fontFamily: 'Monotype Corsiva Regular',
                            fontSize: '30px',
                        }}
                    >
                        What we serve
                    </h6>
                    <h2 className="mt-3" style={{ fontSize: "50px" }}>
                        We offer our best <br /> services
                    </h2>
                </div>

                <div style={{ display: 'flex', gap: "25px", }}>

                    <div
                        style={{
                            width: '300px',
                            padding: '20px',
                            borderRight: "1px solid #f99835",
                            borderBottom: "1px solid rgb(245, 164, 82)",
                            borderRadius: '12px',
                            marginBottom: "100px"
                        }} >
                        <img src={weather} alt="weather"
                            style={{
                                backgroundColor: '#f99835',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                padding: '10px',
                                marginBottom: '15px',

                            }}
                        />
                        <h5>Calculate weather</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laudantium minus hi corporis laborum.</p>
                    </div>

                    <div
                        style={{
                            width: '300px',
                            padding: '20px',
                            borderRight: "1px solid #f99835",
                            borderBottom: "1px solid rgb(245, 164, 82)",
                            borderRadius: '12px',
                            marginBottom: "100px"
                        }} >
                        <img src={guide} alt="guide"
                            style={{
                                backgroundColor: '#f99835',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                padding: '10px',
                                marginBottom: '15px',
                            }}
                        />
                        <h5>Best tour guide</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laudantium minus hi corporis laborum.</p>
                    </div>

                    <div
                        style={{
                            width: '300px',
                            padding: '20px',
                            borderRight: "1px solid #f99835",
                            borderBottom: "1px solid rgb(245, 164, 82)",
                            borderRadius: '12px',
                            marginBottom: "100px"
                        }} >
                        <img src={costom} alt="customization"
                            style={{
                                backgroundColor: '#f99835',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                padding: '10px',
                                marginBottom: '15px',
                            }}
                        />
                        <h5>Customization</h5>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laudantium minus hi corporis laborum.</p>
                    </div>
                </div>
            </div>


            <div className="ms-5" style={{ display: "flex" }}>
                <div>
                    <h5 className='rounded-pill' style={{ fontFamily: 'Monotype Corsiva Regular', fontSize: '40px', backgroundColor: '#f99835', marginRight: "80%", paddingLeft: "18px", padding: "5px" }}>Experience</h5>
                    <h1 className='mt-3' style={{ fontSize: "50px" }}>With our all Experience <br /> we will serve you</h1>
                    <p className='mt-3 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing. Itaque harum totam debitis tempore molestias deserunt<br />facere quibusdam mollitia ut doloremque libero, asperiores veritatis similique temporibus dolorum </p>

                    <div className='mt-3' style={{ display: "flex", gap: "50px", }}>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{
                                backgroundColor: "#f99835", padding: "21px", fontSize: "20px", borderRadius: "10px"
                            }}>12k+</li>
                            <li style={{ position: "relative", right: "30px", fontSize: "20px" }}>Successfull <br />Trips</li>
                        </ul>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{
                                backgroundColor: "#f99835", padding: "23px", fontSize: "20px", borderRadius: "10px"
                            }}>2k+</li>
                            <li style={{ position: "relative", right: "30px", fontSize: "20px" }}>Regular <br />clients</li>
                        </ul>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{
                                backgroundColor: "#f99835", padding: "23px", fontSize: "20px", borderRadius: "10px"
                            }}>1S</li>
                            <li style={{ position: "relative", right: "30px", fontSize: "20px" }}>Year <br />experience</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <img src={experience} alt="" style={{ marginLeft: "30px", height: "93%", width: "93%" }} />
                </div>
            </div>


            <div className='ms-5 mt-5'>
                <h1 className='rounded-pill' style={{ fontFamily: 'Monotype Corsiva Regular', fontSize: '40px', backgroundColor: '#f99835', marginRight: "92%", paddingLeft: "18px", padding: "5px" }}>gallery</h1>
                <h1 className='mt-3' style={{ fontSize: "50px" }}>visit our customers tour gallery</h1>
                <div>
                    <div className="row">

                        <div>
                            <div className="col-6 d-flex gap-3 mt-3">
                                <img src={gallery1} alt="" className='gallery' />
                                <img src={gallery2} alt="" className='gallery' />
                                <img src={gallery3} alt="" className='gallery' />
                                <img src={gallery4} alt="" className='gallery' />

                            </div>


                            <div className="col-6 d-flex mt-4  gap-3 mt-3">

                                <img src={gallery5} alt="" className='gallery' />
                                <img src={gallery6} alt="" className='gallery' />
                                <img src={gallery7} alt="" className='gallery' />
                                <img src={gallery8} alt="" className='gallery' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Experence