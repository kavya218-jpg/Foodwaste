import React, { useState } from 'react'
import Usernav from '../Navbar/Usernav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddFood = () => {

    const [orphan,setOrphan]=useState("orphan1")

    const username=localStorage.getItem("username")
    
    const[data,setData]=useState(
        {
        foodType:"",
        foodAmount:"",
        location:"",
        }
    )
    
    const [image,setImage]= useState()



    const uploadImage=(e)=>{
        setImage((e.target.name=e.target.files[0]))
    }

    const handleChange=(event)=>{
            
        setData(
            {
                ...data,
                [event.target.name]:event.target.value
            }
        )

    }

    const handleSelect=(event)=>{
        setOrphan(event.target.value)
    }

    

    // var element=document.getElementById("orphan").value()
    // console.log(element)

    const handleClick= async ()=>{

        console.log("food")
        let formData = new FormData()

        formData.append("foodType",data.foodType)
        formData.append("foodAmount",data.foodAmount)
        formData.append("location",data.location)
        formData.append("time",currentTime)
        formData.append("image",image)
        formData.append("orphan",orphan)
        formData.append("donorName",username)
        console.log(formData)
        try{
            console.log(formData)
             const res= await axios.post("http://localhost:8080/food",formData)
             if(res.datatus==200)
             {
                 toast("Registered successfully")
             }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    var date=new Date();
    var hour=date.getHours();
    var minutes=date.getMinutes();
    var seconds=new Date().getSeconds();
    var currentTime=hour+":"+minutes+":"+seconds;
    console.log(currentTime.toString())


  return (
    <div  className="addfood" style={{
        minHeight: "100vh"
      }}>
        <Usernav />

        <div className="container mt-5 bg-light">

            <h1>Add Food</h1>
            <form>
                <div className='d-flex mb-3'>
                      <label className="col-3">Type of food</label>
                      <input onChange={handleChange} type="text" name="foodType" id="foodtype" className='form-control col-6' style={{width:"600px" }} value={data.foodType}></input> 
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Amount of food</label>
                      <input onChange={handleChange} type="number" name="foodAmount" id="foodamount" className='form-control col-6' style={{width:"600px" }}  value={data.foodAmount}></input> 
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Location</label>
                      <input onChange={handleChange} type="text" name="location" id="location" className='form-control col-6' style={{width:"600px" }}  value={data.location}></input> 
                </div>

                <div className='d-flex mb-3'>
                      <label className="col-3">Upload Image</label>
                      <input onChange={uploadImage}  type="file" name="image" id="image"  className='form-control col-6' style={{width:"600px" }}  ></input> 
                </div>

                <div className="d-flex">
                    <label className="col-3">Select orphan</label>
                <select onChange={handleSelect} value={orphan} name="orphan" id="orphan" style={{width: "600px"}} className='form-select mb-3 '> 
                    <option value="orphan1">orphan1</option>
                    <option value="orphan2">orphan2</option>                 
                </select>
                </div>
                <div className='d-flex mb-3'>
                      <label className="col-3">Current Time</label>
                      <input  name="currenttime" className='form-control col-6' value={currentTime} style={{width:"600px" }}  ></input> 
                </div>
            </form>

             
            <button onClick={handleClick} className="btn btn-primary mb-2">Submit</button>
            <ToastContainer />
        </div>
    </div>
  )
}



export default AddFood