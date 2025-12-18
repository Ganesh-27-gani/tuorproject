import React, { useEffect, useState } from "react";
import { BASE_URL } from "./utils/config";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        const userId = decoded.id;

        const res = await fetch(`${BASE_URL}/booking/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setBookings(data.data);
        } else {
          toast.error(data.message || "Failed to fetch bookings");
        }
      } catch (err) {
        toast.error("Error loading bookings");
      }
    };

    fetchBookings();
  }, [token]);

  const handleDelete = async (bookingId) => {
    try {
      const res = await fetch(`${BASE_URL}/booking/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Booking cancelled");
        setBookings(bookings.filter((b) => b._id !== bookingId));
      } else {
        toast.error(data.message || "Failed to delete");
      }
    } catch (err) {
      toast.error("Delete error");
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Bookings</h2>
      <p>Total Bookings: {bookings.length}</p>

      {bookings.map((booking) => (
        <div key={booking._id} className="card mb-3 p-3">
          <h5>Tour: {booking.tourId.title}</h5>
          <p><strong>Name:</strong> {booking.fullName}</p>
          <p><strong>Date:</strong> {new Date(booking.date).toDateString()}</p>
          <p><strong>Guests:</strong> {booking.guests}</p>
          <p><strong>Amount:</strong> ₹{booking.totalAmount}</p>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(booking._id)}
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
