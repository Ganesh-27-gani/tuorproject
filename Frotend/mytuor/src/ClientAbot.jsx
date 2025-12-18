import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ava1 from "./assets/images/ava-1.jpg"
import ava2 from "./assets/images/ava-2.jpg"
import ava3 from "./assets/images/ava-3.jpg"
import ava4 from "./assets/images/ava-1.jpg"
import ava5 from "./assets/images/ava-3.jpg"
import ava6 from "./assets/images/ava-1.jpg"
import ava7 from "./assets/images/ava-3.jpg"


const ClientAbot = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div className='mt-5 ms-5'>
                <h1 className='rounded-pill' style={{ fontFamily: 'Monotype Corsiva Regular', fontSize: '40px', backgroundColor: '#f99835', marginRight: "87%", paddingLeft: "15px", padding: "5px" }}>Clients Love</h1>
                <h1 className='mt-3' style={{ fontSize: "50px" }}>What our clients say about us</h1>
            </div>
            <Slider {...settings} className='mt-5 ms-5 me-5 '>
                <div>
                    <p className='me-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione corporis illum veritatis, tempora quam cumque fuga nihil fugit necessitatibus quibusdam ipsum quos dolore rem maxime voluptate. Laboriosam, praesentium et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam autem, provident recusandae quod magni quam eos voluptate enim? Numquam omnis doloribus laudantium. Commodi eum dolores repudiandae placeat voluptate facere?</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava1} alt="" style={{ width: "100px" }} />
                        <div>
                            <h3>Jonvik</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='me-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, facilis perferendis velit illo tempore dolores recusandae mollitia dolore veniam explicabo provident itaque error inventore ipsa fugiat vitae deleniti obcaecati dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ipsa ab recusandae tenetur libero nesciunt, vitae nihil magnam debitis, architecto repudiandae voluptatibus ea, magni earum inventore doloremque doloribus? Nulla, facere.</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava2} alt="" style={{ width: "100px" }} />
                        <div >
                            <h3>Jhon Deo</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='me-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione similique illum voluptatum numquam dolore. Nam alias numquam, unde soluta dolorum officiis. Natus itaque nihil quasi error optio eaque possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, distinctio eligendi. Unde consequatur non praesentium, placeat rem animi iste numquam cum architecto odit, tenetur accusantium assumenda sed quidem voluptatibus temporibus.</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava3} alt="" style={{ width: "100px" }} />
                        <div>
                            <h3>Jony</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='me-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic velit alias facilis. Pariatur ipsa cum molestiae dignissimos voluptas ab sit voluptates? Dicta eveniet nobis voluptate porro ab eum, sint labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aspernatur ex! Dignissimos distinctio iste aliquam maiores ducimus dolores, minus voluptates rerum voluptate exercitationem illo quae quasi rem dicta consectetur incidunt.</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava4} alt="" style={{ width: "100px" }} />
                        <div>
                            <h3>Fearlezz</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='me-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic velit alias facilis. Pariatur ipsa cum molestiae dignissimos voluptas ab sit voluptates? Dicta eveniet nobis voluptate porro ab eum, sint labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure ipsam magni eaque odio quo, animi in saepe velit fuga voluptatum illum temporibus quae fugiat laboriosam dicta ut molestias ab.</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava5} alt="" style={{ width: "100px" }} />
                        <div>
                            <h3>Harley</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='me-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic velit alias facilis. Pariatur ipsa cum molestiae dignissimos voluptas ab sit voluptates? Dicta eveniet nobis voluptate porro ab eum, sint labore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, veniam doloribus. Nulla nesciunt in rerum architecto. Voluptatibus at dolorum assumenda sapiente nam! Sit non voluptatum aspernatur qui voluptatem. Esse, a!</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava6} alt="" style={{ width: "100px" }} />
                        <div >
                            <h3>Janvek</h3>
                            <p>Customer</p></div>
                    </div>
                </div>
                <div>
                    <p className='me-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic velit alias facilis. Pariatur ipsa cum molestiae dignissimos voluptas ab sit voluptates? Dicta eveniet nobis voluptate porro ab eum, sint labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio vel maiores, perspiciatis accusantium corrupti ullam iure harum. Rerum nobis doloremque deserunt eius dicta quis optio vitae reprehenderit iusto nisi.</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={ava7} alt="" style={{ width: "100px" }} />
                        <div>
                            <h3>Michael</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default ClientAbot