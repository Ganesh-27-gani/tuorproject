import register from "./assets/images/register.png"
import user from "./assets/images/user.png"
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from './utils/config'
import { useState } from 'react'
import { toast } from "react-toastify"

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${BASE_URL}/auth/registeruser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await res.json();  

    if (result.success) {
      toast.success(result.message);
      navigate('/login');
    } else {
      toast.error(result.message);
    }
  } catch (err) {
    toast.error('Registration failed');
    console.error(err);
  }
  };
  return (
    <>
      <div className="continer">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">

            <div style={{ display: "flex", backgroundColor: "rgb(243, 242, 242)", marginTop: "100px" }}>

              <img src={register} alt="logo" className='ms-5 me-5 mt-5 mb-5' style={{ width: '50%' }} />

              <div className='' style={{ backgroundColor: "#f99835", padding: "40px" }}>

                <img src={user} alt="" style={{ width: "40%", marginLeft: "77px", position: "relative", bottom: "100px" }} />
                <h1 style={{ textAlign: "center", position: "relative", bottom: "30px", color: "white" }}>Register</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input type="text" className="form-control" id="name" placeholder="Username" onChange={handleChange}  value={formData.name} />
                  </div>
                  <div className="mb-4">
                    <input type="email" className="form-control" id="email" placeholder="email" onChange={handleChange}  value={formData.email}/>
                  </div>
                  <div className="mb-4">
                    <input type="password" className="form-control" id="password" placeholder="password"   autoComplete="current-password" onChange={handleChange}   value={formData.password} />
                  </div>
                  <div className='d-grid gap-2'>
                    <button className="btn btn-dark" type="submit">Button</button>
                  </div>
                   </form>
                  <div className='mt-5' style={{ textAlign: "center", color: "white" }}>
                    <p>
                      Don't have an <br /> account? <Link to="/login" className='text-dark'>Login</Link>
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

export default Register