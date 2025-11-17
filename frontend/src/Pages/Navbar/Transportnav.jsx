import React from 'react'
import { Link } from 'react-router-dom'

const Transportnav = () => {
  return (
    <div>
        <div className="navbar navbar-expand lg bg-warning d-flex">
            <h1 className="col-6">Reduce Food Waste Management System</h1>
            <Link to="/addtransport" className="offset-md-3 col-1 fs-5">Add Transport</Link>
            <Link to="/viewtransport" className="col-1 fs-5">View Transport </Link>
            <Link to="/" className="col-1 fs-5">Logout</Link>
        </div>
    </div>
  )
}

export default Transportnav