import React from 'react'
import Orphannav from '../Navbar/Orphannav'

const ViewProfile3 = () => {
    
    const orphan=JSON.parse(localStorage.getItem("orphan"))
    console.log(orphan)
  return (
    <div className="viewprofile3" style={{
        minHeight: "100vh"
      }}>
         <Orphannav />

         <div >
                <h2 className="mt-2">View Profile</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Date of Birth</th>
                            <th>Mobile</th>
                            <th>Email</th>
                           
                        </tr>
                    </thead>

                    <tbody>
                        
                            
                            <tr>
                                <td>{orphan.username}</td>
                                <td>{orphan.dateOfBirth}</td>
                                <td>{orphan.mobileNumber}</td>
                                <td>{orphan.email}</td>                               
                            </tr>
                        

                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default ViewProfile3