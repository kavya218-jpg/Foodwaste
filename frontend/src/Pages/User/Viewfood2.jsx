import React, { useEffect, useState } from 'react'
import Usernav from '../Navbar/Usernav'
import axios from 'axios'

const Viewfood2 = () => {

    const [data, setData] = useState([])

    const getFoods = async () => {
        try {
            const res = await axios.get("http://localhost:8080/food")
            if (res.status === 200) {
                setData(res.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getFoods()
    }, [])

    console.log(data)


    return (
        <div className="viewfood2" style={{
            minHeight: "100vh"
        }}>
            <Usernav />


            <div >
                <h2 className="mt-2">View Food</h2>
                <table className="table table-hover table-striped bg-light mt-3">
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Weight</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Allocate person</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.foodType}</td>
                                        <td>{item.foodAmount}</td>
                                        <td>{item.location}</td>
                                        <td><img src={`http://${window.location.hostname}:8080/images/${item.file}`} alt="food" height="100" width="200" /></td>
                                        <td>{item.orphan}</td>
                                        <td></td>
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

export default Viewfood2