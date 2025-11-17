import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()

    const [option, setOption] = useState("admin")

    const [data, setData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (event) => {

        setData(
            {
                ...data,
                [event.target.name]: event.target.value
            }
        )

    }

    const handleSelect = (event) => {

        setOption(event.target.value)

        // console.log(option)         
    }


    console.log(option)

    const handleClick = async () => {
        console.log(option)
        try {
            if (option === "admin") {
                const res = await axios.post("http://localhost:8080/adminlogin", data)

                // if(res.status===200)
                // {
                console.log("hello")
                navigate("/vieworphan")
                // }

            }

            if (option === "user") {
                const res = await axios.post("http://localhost:8080/userlogin", data)


                localStorage.setItem("user", JSON.stringify(res.data))
                localStorage.setItem("username", res.data.username)
                navigate("/viewprofile")
                window.location.reload("/viewprofile")

            }

            if (option === "orphan") {
                const res = await axios.post("http://localhost:8080/orphanlogin", data)

                localStorage.setItem("orphan", JSON.stringify(res.data))
                localStorage.setItem("orphanname", (res.data.username))
                navigate("/viewprofile3")

            }

            if (option === "transport") {
                const res = await axios.post("http://localhost:8080/transportlogin", data)

                navigate("/addtransport")


            }

            if (option === "compost") {
                const res = await axios.post("http://localhost:8080/compostlogin", data)

                navigate("/viewfood4")

            }
        }
        catch (err) {
            console.log(err,"errrr")
            toast.error(err.response.data)
        }
    }
    return (
        <div className="login" style={{
            minHeight: "100vh"
        }}>

            <div className="navbar navbar-expand lg bg-warning d-flex">
                <h1 className='col-6'>Reduce Food Waste Management System</h1>
                <Link to="/" className="offset-md-5 col-1">Home</Link>
            </div>

            <div className="container mt-5 bg-light">

                <h1> Login</h1>
                <form>


                    <div className='d-flex mb-3'>
                        <label className="col-3">Enter email</label>
                        <input onChange={handleChange} type="email" name="email" id="email" className='form-control col-6' style={{ width: "600px" }} value={data.username}></input>
                    </div>
                    <div className='d-flex mb-3'>
                        <label className="col-3">Password</label>
                        <input onChange={handleChange} type="password" name="password" id="password" className='form-control col-6' style={{ width: "600px" }} value={data.password}></input>
                    </div>

                </form>

                <select onChange={handleSelect} value={option} name="login" id="login" style={{ width: "300px", margin: "auto" }} className='form-select mb-3'>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="orphan">Orphan</option>
                    <option value="transport">Transport</option>
                    <option value="compost">Compost</option>
                </select>

                <button onClick={handleClick} className="btn btn-primary mb-2">Submit</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Login