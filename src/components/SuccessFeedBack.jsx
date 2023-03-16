import React from 'react';
import '../styles/successFeedBack.css';
import { useNavigate } from 'react-router-dom';

export default function SuccessFeedBack({setModal}) {
const navigate = useNavigate()
const handleSuccess = () => {
  setModal(false)
  navigate("/")
}
    return (
      <section className="success-background">
         <div className="success-body">
           <div className="success-popup">
           <div className="success-align">
              <img src="/Header/check.png" alt="icon" className="success-icon" />
               <h2 className="Success-congrats">Congratulations, your feedback has been submitted successfully!</h2>
               <p >Thank you for letting us know your experience with AppCheck!</p>
            </div>
            <button onClick={() => handleSuccess()} type="submit" className="success-button">Back to home</button>
         </div> 
        </div>
      </section>
  );
}       