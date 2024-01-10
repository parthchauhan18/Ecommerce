import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { BE_URL } from "../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  let navigate = useNavigate()
  function submitHandler() {
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: loginData
    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "you logged in",
      });
      navigate("/product")
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,

      });
    })
  }
  return (
    <div className="logContainer">
      <div className="regDetails">
        <h1 className="title">SIGN IN</h1>
        <div className="inputFields">
          <input placeholder="email" name="" id="" onChange={(e) => setLoginData({ ...loginData, email: e?.target?.value })} />
          <input placeholder="password" name="" id="" onChange={(e) => setLoginData({ ...loginData, password: e?.target?.value })} />
        </div>
        <button className="btn" onClick={() => submitHandler()} >LOGIN</button>
        <div className="desc">
          <a style={{ color: "grey" }} href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a style={{ color: "grey" }} href="">CREATE A NEW ACCOUNT</a>
        </div>
      </div>

    </div>
  );
}