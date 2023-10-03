import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


function Info() {
    const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
    return (
    <div className="container">
    <div className="cover">
      <div className="front">
        <img src="https://res.cloudinary.com/dbhkoyzin/image/upload/v1696332136/uxqbekjzaulib6qbc8an.png" alt=""/>
        <div className="text">
          <span className="text-2">מחכים לשמוע ממך</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Apply</div>
            <form onSubmit={handleSubmit(async(data) => {
            console.log(data);
        try {
           await axios.post("https://employee-os64.onrender.com/employee/add", {
            
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      });
    } catch (err) {
      console.log(err);
    }})}>
        <div className="input-boxes">
        <div className="input-box" >
        <input type="text" {...register("fullName")} placeholder="Enter your name" required/>
        </div>    
        <div className="input-box">
        <input type="text" {...register("email")} placeholder="Enter your email" />
        </div> 
           
        <div className="input-box">
        <input type="text" {...register("phone")} placeholder="Enter your Phone" />
        </div>      
        <div className="button input-box">
    //         <input type="submit" value="Sumbit"/>
    //       </div>
        </div>
        </form>
      </div>
        <div className="signup-form">
              <div className="text sign-up-text">                    <label for="flip">                               </label></div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Info