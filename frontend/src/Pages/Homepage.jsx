import React from 'react'
import { Link } from 'react-router-dom'
// import './styles.css'

const Homepage = () => {
  return (
    <div className="file" style={{
      minHeight: "100vh"
    }}>
      <div className='navbar navbar-expand lg bg-warning d-flex '>
        <h1 className="col-6">Reduce Food Waste Management System</h1>
        <Link to="/register" className="offset-md-4 fs-4 col-1">Register</Link>
        <Link to="/login" className="col-1 fs-4">Login</Link>

      </div>

     <div class="d-flex" >
      <div style={{marginTop:"700px", backgroundColor:"bg-light" }} class="col-6 bg-secondary">
        <h1>About us</h1>
        <p class="mt-5">Reduce Food Waste Management is a Not-For-Profit surplus food management organisation connecting untouched edible surplus food with needy people for making the World Hunger Free and Zero Food Waste.
          we started before 7 years ago and running successfully providing quallity sevrice in managing the  food waste 
        </p>
        <p></p>
      </div>

      <div style={{marginTop:"700px" }} class="col-6 bg-secondary">
        <h1>Contact us</h1>
        <p>Unit 2 Park Place</p>
        <p>Robey Close</p>
        <p>Linby</p>
        <p>Nottinghamshire</p>
        <p>NG15 8AA</p>
        <p>food@waste2es.com</p>
        <p>03301 756699</p>
                 
      </div>

      </div>
      <p class="bg-primary p-2 text-light">© Reduce Food Waste Management</p>


    </div>



  )
}

export default Homepage