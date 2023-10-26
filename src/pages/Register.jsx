import "./Register.css";
export default function Register() {
  return (
    <div className="regContainer">
      <div className="regDetails">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <div className="inputFields">
          <input placeholder="first name" name="" id="" />
          <input placeholder="last name" name="" id="" />
          <input placeholder="username" name="" id="" />
          <input placeholder="email" name="" id="" />
          <input placeholder="password" name="" id="" />
          <input placeholder="confirm password" name="" id="" />
        </div>
        <div className="desc">
          By creatung an account. I consent t the processing of my personal data
          in accordance with the <b style={{color:"black"}}>PRIVACY POLICY</b>
        </div>
        <button className="btn">CREATE</button>
      </div>
    </div>
  );
}