import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "./utils/config";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import img1 from './assets/images/tour-img01.jpg';
import img2 from './assets/images/tour-img02.jpg';
import img3 from './assets/images/tour-img03.jpg';
import img4 from './assets/images/tour-img04.jpg';
import img5 from './assets/images/tour-img05.jpg';
import img6 from './assets/images/tour-img06.jpg';
import img7 from './assets/images/tour-img07.jpg';

import { CiLocationOn } from "react-icons/ci";
import { RiUserLocationFill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuLocateFixed } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const imageMap = {
  "1": img1,
  "2": img2,
  "3": img3,
  "4": img4,
  "5": img5,
  "6": img6,
  "7": img7,
};

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [tour, setTour] = useState(location.state?.tour || null);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', persons: 1 });
  const [reviewText, setReviewText] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      if (!tour && id) {
        try {
          const res = await fetch(`${BASE_URL}/travel/${id}`);
          const data = await res.json();
          if (res.ok && data.success) {
            setTour(data.data);
            if (Array.isArray(data.data.reviews)) {
              setReviews(data.data.reviews);
            }
          } else {
            toast.error(data.message || "Tour not found.");
          }
        } catch (err) {
          toast.error("Failed to fetch tour.");
        }
      } else if (tour && Array.isArray(tour.reviews)) {
        setReviews(tour.reviews);
      }
    };
    fetchTour();
  }, [id, tour]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = tour ? (tour.price * formData.persons + 10) : 0;

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to book the tour.");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

    const bookingData = {
      tourId: tour._id,
      fullName: formData.name,
      phone: formData.phone,
      date: formData.date,
      guests: formData.persons,
      totalAmount
    };

    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Booking successful!");
        setFormData({ name: '', phone: '', date: '', persons: 1 });
      } else {
        toast.error(result.message || "Booking failed.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleStarClick = (star) => {
    setSelectedRating(star);
  };

  const handleSubmit = () => {
    if (!reviewText.trim()) {
      toast.warning("Please enter a review message.");
      return;
    }

    const newReview = { text: reviewText, rating: selectedRating };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setSelectedRating(0);
  };
 
  

  if (!tour) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Tour data not found. Please navigate from the tours page.</h4>
      </div>
    );
  }

  const selectedImage = imageMap[tour.imageId] || img1;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="tour-details ms-5 mt-3" style={{ width: "65%" }}>
        <img src={selectedImage} alt={tour.title} style={{ width: '90%', borderRadius: '10px', marginBottom: '1rem' }} />

        <div style={{ backgroundColor: "#fafafaff", borderRadius: "10px", marginRight: "93px" }}>
          <h2>{tour.title}</h2>
          <div style={{ display: "flex", gap: "30px", fontSize: "20px" }}>
            <p><IoMdStarOutline className='me-2' style={{ color: "#f99835" }} />{reviews.length}</p>
            <p><RiUserLocationFill className='me-2' />{tour.location}</p>
          </div>
          <div style={{ display: "flex", gap: "30px", fontSize: "20px" }}>
            <p><CiLocationOn className='me-2' />{tour.country}</p>
            <p><MdOutlinePriceChange className='me-2' />{tour.price} per person</p>
            <p><LuLocateFixed className='me-2' />{tour.distance}</p>
            <p><IoPeople className='me-2' />{tour.people}</p>
          </div>
          <p style={{ fontSize: "20px" }}>
            <strong>Description:</strong> <br /> {tour.description}
          </p>
        </div>

         
        <div style={{ backgroundColor: "#fafafaff", borderRadius: "10px", marginRight: "93px" }} className='mt-4'>
          <h3>Reviews ({reviews.length})</h3>
          <div style={{ fontSize: "30px", cursor: "pointer", marginBottom: "10px" }}>
            {[1, 2, 3, 4, 5].map(i => i <= selectedRating ? (
              <IoMdStar key={i} onClick={() => handleStarClick(i)} style={{ color: "#f99835" }} />
            ) : (
              <IoMdStarOutline key={i} onClick={() => handleStarClick(i)} style={{ color: "#f99835" }} />
            ))}
          </div>

          <div className="input-group mb-3" style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Share your thoughts"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              style={{ padding: "15px" }}
            />
            <button className="btn btn-warning text-light rounded-pill mt-1" type="button" onClick={handleSubmit} style={{ position: "absolute", right: "10px", top: "5px" }}>Submit</button>
          </div>

          {reviews.map((review, index) => (
            <div key={index} style={{ backgroundColor: "#fff", borderRadius: "8px", padding: "10px", marginTop: "10px" }}>
              <div style={{ color: "#f99835", fontSize: "20px" }}>
                {[...Array(review.rating)].map((_, i) => <IoMdStar key={i} />)}
              </div>
              <p style={{ margin: 0 }}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div style={{ backgroundColor: "#fafafa", width: "30%" }} className="mt-3 me-4 p-4 rounded shadow-sm">
        <p><strong className="fs-4">{tour.price} ₹</strong> /Per person <span className="ms-2 text-warning">({reviews.length} reviews)</span></p>
        <hr />
        <h5>Information</h5>
        <input className="form-control my-2" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" />
        <input className="form-control my-2" type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" />
        <input className="form-control my-2" type="date" name="date" value={formData.date} onChange={handleInputChange} />
        <input className="form-control my-2" type="number" name="persons" value={formData.persons} onChange={handleInputChange} min="1" />
        <p className="mt-3">
          <strong>{tour.price} x {formData.persons} Person</strong> = {tour.price * formData.persons} <br />
          Service charges: 10 <br />
          <strong>Total: {totalAmount}</strong>
        </p>
        <button className="btn w-100" style={{ backgroundColor: '#f99835' }} onClick={handleBooking}>Book Now</button>

        
        
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button className="btn btn-primary" onClick={() => navigate(`/edit-tour/${tour._id}`)}>Edit</button>
           </div>
     
      </div>
    </div>
  );
};

export default ProductPage;
