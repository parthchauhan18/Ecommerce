import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { BE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Register() {
  let [register,setRegister]=useState({
    name:"",
    email:"",
    password:"",
  })
  let navigate=useNavigate()
  function submitHandler(){

  axios({
    method:"post",      
    url:`${BE_URL}/user/signUp`,
    data :register
  }).then((res)=>{
    console.log("resRegister",res)
    Swal.fire({
      icon: "success",
      title: "Register successFull",
    });
    navigate("/product")
  }).catch((err)=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err.message,
    });
  })
  }
  return (
    <div className="regContainer">
      <div className="regDetails">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <div className="inputFields">
          <input placeholder="name" name="" id="" onChange={(e)=>setRegister({...register,name:e?.target?.value})} />
          <input placeholder="email" name="" id="" onChange={(e)=>setRegister({...register,email:e?.target?.value})} />
          <input placeholder="password" name="" id="" onChange={(e)=>setRegister({...register,password:e?.target?.value})} />
          <input placeholder="confirm password" name="" id="" onChange={(e)=>setRegister({...register,confirmPassword:e?.target?.value})} />
        </div>
        <div className="desc">
          By creatung an account. I consent t the processing of my personal data
          in accordance with the <b style={{color:"black"}}>PRIVACY POLICY</b>
        </div>
        <button className="btn" onClick={()=>submitHandler()}>CREATE</button>
      </div>
    
    </div>
  );
}