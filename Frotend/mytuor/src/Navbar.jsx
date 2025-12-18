import React, { useContext, useEffect, useState } from 'react';
import logo from './assets/images/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'


const Navbar = () => {
    const { dispatch, user } = useContext(AuthContext);
    const [users, setUser] = useState(null);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })




        useEffect(() => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }, []);

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: '140px', height: '50px' }}
                    />
                </a>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end fs-5 fw-bold " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active me-2" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutpage" className="nav-link active me-2">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tour" className="nav-link active"  >Tours</Link>
                        </li>
                        {user && (
                            <li>
                                <Link to="/my-bookings" className="nav-link active">Bookings</Link>
                            </li>
                        )}


                        {user ? (
                            <>
                                <li className="nav-item me-2">
                                    <Link to={`update/${user._id}`}>
                                        <span
                                            className="px-3 py-1"
                                            style={{
                                                backgroundColor: "#f4a835",
                                                color: "#000",
                                                borderRadius: "25px",
                                                fontWeight: "500",
                                                display: "inline-block",
                                                textAlign: "center",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {user.name}
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {users ? <span>{users.name}</span> : <span></span>}

                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: "#1a1a1a",
                                            color: "white",
                                            borderRadius: "8px",
                                            padding: "6px 15px",
                                        }}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link me-2">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/register"
                                        className="nav-link active"
                                        style={{
                                            backgroundColor: "rgb(233, 152, 53)",
                                            borderRadius: "20px",
                                            padding: "9px",
                                            color: "white"
                                        }}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
