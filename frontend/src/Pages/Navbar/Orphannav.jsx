import React from 'react'
import { Link } from 'react-router-dom'

const Orphannav = () => {
  return (
    <div>
         <div className="navbar navbar-expand lg bg-warning d-flex">
            <h1 className="col-6">Reduce Food Waste Management System</h1>
            <Link to="/viewprofile3" className="offset-md-1 col-1 fs-5">View profile</Link>
            <Link to="/viewfood3" className="col-1 fs-5">View food</Link>
            <Link to="/viewtransport2" className="col-1 fs-5"> view Transport</Link>
            <Link to="/sendfeedback" className="col-1 fs-5">Send feedback</Link>
            <Link to="/" className="col-1 fs-5">Logout</Link>
        </div>
    </div>
  )
}

export default Orphannav