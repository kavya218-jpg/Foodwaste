import React, { useEffect, useState } from 'react'
import Compostnav from '../Navbar/Compostnav'
import axios from 'axios'

const ViewTransport3 = () => {


  const [data,setData]=useState([])

  
  const getTransport=async()=>{
    try{
           const res=await axios.get("http://localhost:8080/transport")
           if(res.status===200)
           {
            setData(res.data)
           }
    }
    catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{
    getTransport()
  },[])


  return (
    <div className="viewTransport3" style={{
      minHeight: "100vh"
    }}>
      <Compostnav />

      <div >
                <h2 className="mt-2">View Transport</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                            <th>Type of Vehicle</th>
                            <th>Vehicle Number</th>
                            <th>Location</th>
                            <th>Image</th>
                            
                        </tr>
                    </thead>

                    <tbody>                        
                            
                            
                        {
                          data.map((item,index)=>{
                            return(
                              <tr key={index}>
                              <td>{item.vehicleType}</td>
                              <td>{item.vehicleNumber}</td>
                              <td>{item.location}</td>
                              <td><img src={`http://${window.location.hostname}:8080/images/${item.file}`} alt="vehicle" height="100" width="200" /></td>                              
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

export default ViewTransport3