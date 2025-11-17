import React, { useEffect, useState } from 'react'
import Orphannav from '../Navbar/Orphannav'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewFood3 = () => {

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

    useEffect(()=>{
        getFoods()
    },[])

    console.log(data)


  return (
    <div className="viewfood3" style={{
        minHeight: "100vh"
      }}>
         <Orphannav />

         <div >
                <h2 className="mt-2">View Food</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Type of food</th>
                            <th>Amount of food</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Allocate Person</th>
                            <th>Timing</th>
                            <th>Reply</th>
                           
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
                                    <td><Link to={`/reply/${item.id}`}>Reply</Link></td>
                                    <td></td>
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

export default ViewFood3