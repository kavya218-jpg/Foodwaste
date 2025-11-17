import React, { useState } from 'react'
import Transportnav from '../Navbar/Transportnav'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const AddTransport = () => {

  const [data,setData]=useState(
    {
      vehicleType:"",
      vehicleNumber:"",
      location:""
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

  const [image,setImage]=useState('')

  const handleImage=(e)=>{
    setImage((e.target.name = e.target.files[0]))
  }


  const handleClick=()=>{
    try{

      let formData = new FormData()

        formData.append("vehicleType",data.vehicleType)
        formData.append("vehicleNumber",data.vehicleNumber)
        formData.append("location",data.location)
        formData.append("image",image)
       
     console.log(formData)

           const res=axios.post("http://localhost:8080/transport",formData)
           if(res.status===200)
           {
            toast("added successfully")
           }
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
    <div className="addtransport" style={{
      minHeight: "100vh"
    }}>
      <Transportnav />

      <div className="container mt-5 bg-light">

        <h1>Add Transport</h1>
        <form>
          <div className='d-flex mb-3'>
            <label className="col-3">Type of vehicle</label>
            <input onChange={handleChange} type="text" name="vehicleType" id="vehicleType" className='form-control col-6' style={{ width: "600px" }} value={data.vehicleType}></input>
          </div>
          <div className='d-flex mb-3'>
            <label className="col-3">Vehicle Number</label>
            <input onChange={handleChange} type="number" name="vehicleNumber" id="vehicleNumber" className='form-control col-6' style={{ width: "600px" }} value={data.vehicleNumber}></input>
          </div>
          <div className='d-flex mb-3'>
            <label className="col-3">Location</label>
            <input onChange={handleChange} type="text" name="location" id="location" className='form-control col-6' style={{ width: "600px" }} value={data.location}></input>
          </div>
          <div className='d-flex mb-3'>
            <label className="col-3">Upload Image</label>
            <input onChange={handleImage} type="file" name="file" id="file" className='form-control col-6' style={{ width: "600px" }} ></input>
          </div>
         
          
        </form>


      

        <button onClick={handleClick} className="btn btn-primary mb-2">Submit</button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default AddTransport