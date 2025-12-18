import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from './Hooks/useFetch';
import { BASE_URL } from './utils/config';
import img1 from './assets/images/tour-img01.jpg';
import img2 from './assets/images/tour-img02.jpg';
import img3 from './assets/images/tour-img03.jpg';
import img4 from './assets/images/tour-img04.jpg';
import img5 from './assets/images/tour-img05.jpg';
import img6 from './assets/images/tour-img06.jpg';
import img7 from './assets/images/tour-img07.jpg';
 
const Feature = () => {
    const {
        data: tourResponse,
        error,
        loading,
    } = useFetch(`${BASE_URL}/travel/`);

    const data = tourResponse?.data || [];

    const getRatingStars = (rating) => {
        if (!rating || rating === 0) return "Not rated";
        return `${Number(rating).toFixed(1)} ★`;
    };

    const images = [img1, img2, img3, img4, img5, img6, img7, img2];

    return (
        <div className="mt-5 ms-5 me-5">
            <h1
                className="rounded-pill text-dark"
                style={{
                    fontFamily: 'Monotype Corsiva Regular',
                    fontSize: '40px',
                    backgroundColor: '#f99835',
                    width: "150px",
                    padding: "5px 18px",

                }}
            >
                Explore
            </h1>
            <h1 style={{ fontSize: '40px' }}>Our featured tours</h1>

            <div className="row mt-4">
                {loading && <p>Loading tours...</p>}
                {error && <p>Error loading tours: {error}</p>}

                {data.length > 0 ? (
                    data
                        .filter(tour => tour.isFeatured === true || tour.isFeatured === "true")
                        .map((tour, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={tour._id}>
                                <div className="card h-100 shadow-sm border-0 position-relative">
                                    <span className="position-absolute  end-0 bg-warning text-white px-2 py-1" style={{ fontSize: "12px", fontWeight: "bold", borderBottomLeftRadius: "6px", marginTop:"175px"}}>
                                        Featured
                                    </span>

                                    <img
                                        src={images[index % images.length]}  
                                        className="card-img-top"
                                        alt={tour.title}
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />

                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="text-muted">📍 {tour.location}</span>
                                            <span className="text-warning">
                                                {getRatingStars(tour.rating)} ({tour.reviews || 0})
                                            </span>
                                        </div>
                                        <Link  to={`/tours/${tour._id}`} style={{fontSize:"25px", fontWeight:"bold", textDecoration:"none"}} className="card-title">{tour.title}</Link>
                                    </div>

                                    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                                        <span style={{ color: "#ff5722", fontWeight: "bold" }}>
                                            ${tour.price} <span className="text-muted">/per person</span>
                                        </span>
                                        <Link
                                            to={`/tours/${tour._id}`}
                                            className="btn btn-sm"
                                            style={{ backgroundColor: "#f99835", color: "#fff", fontWeight: "bold", borderRadius: "6px" }}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                ) : (
                    !loading && <p>No featured tours found.</p>
                )}
            </div>
        </div>
    );
};

export default Feature;
