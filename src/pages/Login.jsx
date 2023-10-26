import "./Login.css";

export default function Login() {
  return (
    <div className="logContainer">
      <div className="regDetails">
        <h1 className="title">SIGN IN</h1>
        <div className="inputFields">
          <input placeholder="username" name="" id="" />
          <input placeholder="password" name="" id="" />
        </div>
        <button className="btn">LOGIN</button>
        <div className="desc">
          <a style={{color:"grey"}} href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a style={{color:"grey"}} href="">CREATE A NEW ACCOUNT</a>
        </div>
      </div>
    </div>
  );
}