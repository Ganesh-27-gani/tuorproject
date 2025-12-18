import React, { useContext, useState } from 'react'
import login from "./assets/images/login.png"
import user from "./assets/images/user.png"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL } from './utils/config'
import { AuthContext } from './context/AuthContext'


const Login = () => {

  const navigator = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setCredentials((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
  }
  const { dispatch } = useContext(AuthContext)

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${BASE_URL}/auth/loginuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Login failed: ${errorText}`);
    }

    const result = await res.json();
     toast(result.message);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: result.data,
      token: result.token,
      role: result.role,
    });

    if (result.success) {
      navigator("/");
    }
  } catch (err) {
    console.error(err);
    toast("Login failed. Please check your credentials.");
  }
};
 
  return (
    <>
      <div className="continer">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">

            <div style={{ display: "flex", backgroundColor: "rgb(243, 242, 242)", marginTop: "100px" }}>

              <img src={login} alt="logo" className='ms-5 me-5 mt-5 mb-5' style={{ width: '50%' }} />

              <div  style={{ backgroundColor: "#f99835", padding: "40px" }}>

                <img src={user} alt="" style={{ width: "40%", marginLeft: "77px", position: "relative", bottom: "100px" }} />
                <h1 style={{ textAlign: "center", position: "relative", bottom: "30px", color: "white" }}>Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input type="email" className="form-control" id="email" placeholder="email" onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <input type="password" className="form-control" id="password" placeholder="password" onChange={handleChange} />
                  </div>
                  <div className='d-grid gap-2'>
                    <button className="btn btn-dark" type="submit">Button</button>
                  </div>
                </form>
                <div className='mt-5' style={{ textAlign: "center", color: "white" }}>
                  <p>
                    Don't have an <br /> account? <Link to="/register" className='text-dark'>Register</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>

    </>
  )
}

export default Login