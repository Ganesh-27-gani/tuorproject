import React from 'react'
import gani from "./assets/images/gani.jpg"

const Aboutpage = () => {
    return (
        <>
            <div style={{ display: "flex", backgroundColor: "rgba(58, 236, 204, 0.2)" }}>
                <img src={gani} alt="gani" className='ms-5 mt-3 mb-3 me-5' style={{ width: "17%", borderRadius: "15px" }} />
                <div className='mt-4 me-5'>
                    <h2 >SIRASANI GANESH</h2>
                    <h4 className='text-secondary'>MERN DEVELOPER</h4>
                    <h6 className='fs-5 mt-4'>
                        Hello! My name is Sirasani Ganesh, and I’m a passionate MERN stack developer with strong skills in ReactJS, Node.js, Express, and MongoDB. I enjoy building responsive, user-friendly web applications with a focus on clean design and good user experience.

                        As part of my learning and development journey, I created the "Tour Planner" project a modern travel booking interface to apply and showcase my frontend development skills using React. <br /> <br />

                        The Tour Planner is a responsive and visually appealing travel website designed to help users plan and explore tour packages easily. Built entirely with ReactJS, it includes key features like: <br />

                        🧭 Navigation: Seamless page switching using React Router (Home, About, Tours) <br />

                        🖼️ Media Integration: Embedded video and image galleries to enhance user engagement <br />

                        💬 Testimonials Carousel: Dynamic client reviews using react-slick slider <br />

                        📱 Responsive Design: Fully functional across mobile, tablet, and desktop screens <br />

                        🎨 UI/UX: Focused on modern aesthetics with clean layout and intuitive interactionsF <br />
                    </h6>

                </div>
            </div>
        </>
    )
}

export default Aboutpage