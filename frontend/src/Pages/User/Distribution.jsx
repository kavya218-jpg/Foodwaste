import React, { useEffect, useState } from 'react'
import Usernav from '../Navbar/Usernav'
import axios from 'axios'

const Distribution = () => {

  const [data, setData] = useState([])

  const getOrphan =async () => {
    try {
      const res =await  axios.get("http://localhost:8080/orphan")
      if(res.status===200)
      {
        setData(res.data)
      }
      
    }
    catch (err) {
      console.log(err)
    }
  }

  console.log(data)

  useEffect(() => {
    getOrphan()
  }, [])

  return (
    <div className="distribution" style={{
      minHeight: "100vh"
    }}>
      <Usernav />
      <div >
        <h2 className="mt-2"> Distribution</h2>
        <table className="table table-hover table-striped bg-light mt-3">
          <thead>
            <tr>
              <th>Orphan Name</th>
              <th>Orphan Location </th>
              <th>Mobile</th>

            </tr>
          </thead>

          <tbody>

            {
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.location}</td>
                    <td>{item.mobileNumber}</td>


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

export default Distribution