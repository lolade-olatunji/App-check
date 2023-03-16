import React, { useContext } from "react";
import "../styles/emailbar.css";
import { DataContext } from "../pages/LandingPage";

const Emailbar = ({ handleSubmit }) => {
  const { email, setEmail, emailErr, setEmailErr } = useContext(DataContext);
  console.log(email);
  
  return <form action="/" method="get" className="Aform">
      <div className="lab-A">
        <label htmlFor="header-search">
          <span className="Aweb">Your email</span>
        </label>
        <input onChange={e => {
            setEmail(e.target.value);
          }} value={email} className="Ain" type="email" id="header-search" placeholder="janedoe@gmail.com" name="email" required />
      </div>
      <button onClick={e => {
          handleSubmit(e);
        }} className="Abntn Abntn1" type="submit">
        Submit
      </button>
      {emailErr ? <div className="err-url">
            Input a Valid Email Address
          </div> : ""}
    </form>;
};

export default Emailbar;
