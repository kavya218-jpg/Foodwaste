import React from 'react'
import { Link } from 'react-router-dom'

const Adminnav = () => {
  return (
    <div>
        <div className="navbar navbar-expand lg bg-warning d-flex">
            <h1 className="col-6">Reduce Food Waste Management System</h1>
            <Link to="/vieworphan" className="offset-md-2 col-1 fs-5">View orphan</Link>
            <Link to="/viewfood" className="col-1 fs-5">View food</Link>
            <Link to="/history" className="col-1 fs-5"> History</Link>
            <Link to="/" className="col-1 fs-5">Logout</Link>
        </div>
    </div>
  )
}

export default Adminnav