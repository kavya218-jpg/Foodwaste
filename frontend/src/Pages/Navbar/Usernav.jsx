import React from 'react'
import { Link } from 'react-router-dom'

const Usernav = () => {
  return (
    <div>
        <div className="navbar navbar-expand lg bg-warning d-flex">
            <h1 className="col-5">Reduce Food Waste Management System</h1>
            <Link to="/viewprofile" className="col-1 fs-5">View profile</Link>
            <Link to="/addfood" className="col-1 fs-5">Add food</Link>
            <Link to="/viewfood2" className="col-1 fs-5">View Food</Link>
            <Link to="/distribution" className="col-1 fs-5">Distribution</Link>
            <Link to="/viewresponse" className="col-1 fs-5">View Response</Link>
            <Link to="/viewfeedback" className="col-1 fs-5">View Feedback</Link>
            <Link to="/" className="col-1 fs-5">Logout</Link>
        </div>
    </div>
  )
}

export default Usernav