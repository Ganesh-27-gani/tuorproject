import React, { useState, useEffect } from "react";
import { BASE_URL } from "./utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return toast.error("Login required");

      const decoded = JSON.parse(atob(token.split(".")[1]));
      const userId = decoded.id;

      try {
        const res = await fetch(`${BASE_URL}/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setUserData({
            name: data.data.name,
            email: data.data.email,
            password: "",  
          });
        } else {
          toast.error(data.message || "Failed to load user data");
        }
      } catch (error) {
        toast.error("Error fetching user data");
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Not authorized");

    const decoded = JSON.parse(atob(token.split(".")[1]));
    const userId = decoded.id;

    try {
      const res = await fetch(`${BASE_URL}/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("User updated successfully");
 
        localStorage.setItem("user", JSON.stringify(data.data));

        navigate("/"); 
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (error) {
      toast.error("Update error");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="mt-3" style={{ maxWidth: "400px" }}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            className="form-control"
            onChange={handleChange}
            placeholder="Leave empty if not changing"
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
