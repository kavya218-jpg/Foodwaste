import React from 'react'
import Usernav from '../Navbar/Usernav'

const UserProfile = () => {

  const user=JSON.parse(localStorage.getItem("user"))
  console.log(user)
  return (
    <div  className="addfood" style={{
      minHeight: "100vh"
    }}>
         <Usernav/>

         <div >
            <h2 className="mt-2">View Profile</h2>
          <table className="table table-hover table-striped bg-light mt-3">
            <thead>
                <tr>
                   <th>Username</th>
                   <th>DateOfBirth</th>
                   <th>Mobile</th>
                   <th>Email</th>
                   <th>Password</th>
                   </tr>
            </thead>

            <tbody>
                  <tr>
                    <td>{user.username}</td>
                    <td>{user.dateOfBirth}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
            </tbody>
          </table>

         </div>

    </div>
  )
}

export default UserProfile