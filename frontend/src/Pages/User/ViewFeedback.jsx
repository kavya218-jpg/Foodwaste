import React, { useEffect, useState } from 'react'
import Usernav from '../Navbar/Usernav'
import axios from 'axios'

const ViewFeedback = () => {

  const [data, setData] = useState([])

  const getOrphan = async () => {
    try {
      const res = await axios.get("http://localhost:8080/orphan")
      if (res.status === 200) {
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
    <div className="viewfeedback" style={{
      minHeight: "100vh"
    }}>
      <Usernav />

      <div >
        <h2 className="mt-2"> View Response</h2>
        <table className="table table-hover table-striped bg-light mt-3">
          <thead>
            <tr>
              <th> Name</th>
              <th>Feedback </th>



            </tr>
          </thead>

          <tbody>

            {
              data.map((item, index) => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.feedback}</td>

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

export default ViewFeedback