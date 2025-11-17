import React, { useEffect, useState } from 'react'
import Usernav from '../Navbar/Usernav'
import axios from 'axios'

const ViewResponse = () => {

  const[data,setData]=useState([])


  const getFoods=async ()=>{
    try{
          const res=await axios.get("http://localhost:8080/food")
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


console.log(data)


useEffect(()=>{
    getFoods()
},[])


  return (
    <div className="viewresponse" style={{
      minHeight: "100vh"
    }}>
              <Usernav/>

              <div >
                <h2 className="mt-2"> View Response</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Type of food </th>
                            <th>Amount of food</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Allocate person</th>
                            <th>Timing</th>
                            <th>Orphan Reply</th>
                            {/* <th>Send Compost</th> */}
                        
                        </tr>
                    </thead>

                    <tbody>
                      
                            
                    {
                            data.map((item,index)=>{
                                return(
                                    <tr>
                                      <td>{item.donorName}</td>
                                    <td>{item.foodType}</td>
                                    <td>{item.foodAmount}</td>
                                    <td>{item.location}</td>
                                    <td><img src={`http://${window.location.hostname}:8080/images/${item.file}`} alt="food" height="100" width="200" /></td>
                                    <td>{item.orphan}</td>
                                    <td>{item.time}</td>
                                    <td className="text-success fs-5" >{item.reply}</td>
                                    {/* <td className="text-danger fs-5">Send</td> */}
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

export default ViewResponse