import React, { useEffect, useState } from 'react'
import Adminnav from '../Navbar/Adminnav'
import axios from 'axios'

const ViewOrphanagent = () => {

  const [data,setData] =useState([])

  const getOrphans=async()=>{
    try{
          const res=await axios.get("http://localhost:8080/orphan")
          if(res.status==200)
          {
            setData(res.data)
          }
    }
    catch(err)
    {
      console.log(err)
    }
  }

  console.log(data)

  useEffect(()=>{
    getOrphans()
  },[])
  return (
    <div className="vieworphan" style={{
        minHeight: "100vh"
      }}>
        
        <Adminnav />

        <div >
                <h2 className="mt-2">View Orpahn</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Date of Birth </th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Location</th>                          
                        </tr>
                    </thead>

                    <tbody>
                        
                        {
                          data.map((item,index)=>{
                             return(
                            <tr key={index} >
                            <td>{item.username}</td>
                            <td>{item.dateOfBirth} </td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.email} </td>
                            <td>{item.location}</td>                            
                        </tr>

                             )


                          })
                        }
                           
                        

                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default ViewOrphanagent