import React, { useState } from 'react'
import Orphannav from '../Navbar/Orphannav'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Reply = () => {

    const [reply,setReply]=useState("")

    const {id} = useParams()

    const handleChange=(event)=>{
           setReply(event.target.value)
    }

    const handleClick= async()=>{
        console.log(reply)
        try{
              const res=await axios.patch(`http://localhost:8080/food/${id}/${reply}`)
              if(res.status===200)
              {
                alert("replied successfully")

              }
        }
        catch(err)
        {
            console.log(err)
        }
    }

  return (
    <div>
        <Orphannav />

        <div className="d-flex mt-5 " style={{margin:"auto" }}>
            <label className="col-1">Reply</label>
            <input className="form-control" style={{width:"300px"}} onChange={handleChange} type="text" name="reply"   id="reply" value={reply}></input>
            <button onClick={handleClick} className='btn btn-primary ms-5'>Submit</button>
        </div>
    </div>
  )
}

export default Reply