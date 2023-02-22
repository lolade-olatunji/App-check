import React from 'react';
import '../styles/successFeedBack.css';

export default function SuccessFeedBack() {
    return (
      <section className="success-background">
         <div className="success-body">
           <div className="success-popup">
           <div className="success-align">
              <img src="/Header/check.png" alt="icon" className="success-icon" />
               <h2>Congratulations, your feedback has been submitted successfully!</h2>
               <p >Thank you for letting us know your experience with AppCheck!</p>
            </div>
            <button type="submit" className="success-button">Back to home</button>
         </div> 
        </div>
      </section>
  );
}       