import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutpage from '../Aboutpage'
import AllPath from '../AllPath'
import Login from '../Login'
import Register from '../Register'
import Tour from '../Tour'
import ProductPage from '../ProductPage'
import EditTour from '../EditTour'
import MyBookings from '../MyBookings'

const Rout = () => {
  return (

    <Routes>
      <Route path="/aboutpage" element={<Aboutpage />} />
      <Route path="/" element={<AllPath />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/tour' element={<Tour />} />
      <Route path='/tours/:id' element={<ProductPage />} />
      <Route path="/edit-tour/:id" element={<EditTour />} />
      <Route path="/my-bookings" element={<MyBookings />} />


    </Routes>
  )
}

export default Rout