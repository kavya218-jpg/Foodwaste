import React, { useState } from 'react'
import Orphannav from '../Navbar/Orphannav'
import axios from 'axios'

const SendFeedback = () => {

    const [feedback,setFeedback]=useState("")

    const name=localStorage.getItem("orphanname")

    const handleChange=(event)=>{
        setFeedback(event.target.value)
    }

    const handleClick=()=>{
      console.log(name)
      console.log(feedback)
        try{
        const res=axios.patch(`http://localhost:8080/orphan/${name}/${feedback}`)
        if(res.status===200)
        {
            alert("feedback sent successfully")
        }
    }
    catch(err)
    {
        console.log(err)
    }
}


  return (
    <div  className="sendfeedback" style={{
      minHeight: "100vh"
    }}>
         <Orphannav />
         <center><h1 className="mt-2">Send Feedback</h1></center>
          <div className="d-flex mt-5 ">
            
          <h3 className="col-3">Orphan Name</h3>
            <input  className="form-control" style={{width:"500px"}} type="text" name="reply" id="reply" value={name} disabled></input> 
            <br></br>
            
            <h3 className="col-3">Enter Feedback</h3>
            <input onChange={handleChange} className="form-control" style={{width:"500px"}} type="text" name="reply" id="reply" value={feedback}></input>

            <button onClick={handleClick} className='btn btn-primary mx-5 '>Submit</button>
          </div>
    </div>
  )
}

export default SendFeedback


