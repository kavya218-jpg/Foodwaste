import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios" 
import { toast } from 'react-toastify'


const Register = () => {

    const[reg,setReg]=useState(true)
    const [value,setValue]=useState("user")

    const[data,setData]=useState(
        {
        username:"",
        dateOfBirth:"",
        mobileNumber:"",
        email:"",
        password:""
        }
    )

    const handleChange=(event)=>{
            
        setData(
            {
                ...data,
                [event.target.name]:event.target.value
            }
        )

    }

    const handleClick=async()=>{
        try{
            if(value==="user")
            {
                const res=await axios.post("http://localhost:8080/user",data)

                    toast("Registered successfully")

            } 
            
            if(value==="orphan")
            {
                const res= await axios.post("http://localhost:8080/orphan",data)
                

                    toast("registered successfully")

            }  
        }
        catch(err)
        {
            toast.error("already registered")
        }
    }

    
    const handleSelect=(event)=>{
        if(event.target.value==="orphan")
        {
            setReg(false)
            setValue("orphan")
        }
        if(event.target.value==="user")
        {
            setReg(true)
            setValue("user")
        }
    }



  return (
    <div className="register" style={{
        minHeight: "100vh"
      }}>
        <div className="navbar navbar-expand lg bg-warning d-flex">
            <h1 className='col-6'>Reduce Food Waste Management System</h1>
            <Link to="/" className="offset-md-5 col-1">Home</Link>
        </div>

        <div className="container mt-5 bg-light">

            <h1>User/Orphan  Registration</h1>
            <form>
                <div className='d-flex mb-3'>
                      <label className="col-3">Enter Username</label>
                      <input onChange={handleChange} type="text" name="username" id="username" className='form-control col-6' style={{width:"600px" }} value={data.username}></input> 
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Enter Date of Birth</label>
                      <input onChange={handleChange} type="date" name="dateOfBirth" id="dateOfBirth" className='form-control col-6' style={{width:"600px" }}  value={data.dateOfBirth}></input> 
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Enter Mobile</label>
                      <input onChange={handleChange} type="number" name="mobileNumber" id="mobileNumber" className='form-control col-6' style={{width:"600px" }}  value={data.mobileNumber}></input> 
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Enter Email</label>
                      <input onChange={handleChange} type="email" name="email" id="email" className='form-control col-6' style={{width:"600px" }}  value={data.email}></input> 
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Enter Password</label>
                      <input onChange={handleChange} type="password" name="password" id="password" className='form-control col-6' style={{width:"600px" }}  value={data.password}></input> 
                </div>
                {
                    reg ? null : 

                <div className='d-flex mb-3'>
                      <label className="col-3">Enter Location</label>
                      <input onChange={handleChange} type="text" name="location" id="location" className='form-control col-6' style={{width:"600px" }}  value={data.location}></input> 
                </div>
                 }
            </form>

            
            <select onChange={handleSelect} value={value} name="registeation" id="registration" style={{ width: "300px", margin: "auto" }} className='form-select mb-3'> 
                    <option value="user">User</option>
                    <option value="orphan">Orphan</option>                 
                </select>


            <button onClick={handleClick} className="btn btn-primary mb-2">Submit</button>
        </div>


    </div>
  )
}

export default Register
