import React from 'react';
import '../styles/successFeedBack.css';
import { Link } from 'react-router-dom';

export default function SuccessFeedBack() {
    return (
      <section className="success-background">
         <div className="success-body">
           <div className="success-popup">
           <div className="success-align">
              <img src="/Header/check.png" alt="icon" className="success-icon" />
               <h2>Congratulations, you have successfully submitted your Product!</h2>
               <p >You will recieve the result to the test in 48hours! You'll find it in your Email.</p>
            </div>
            <Link to="/">
            <button type="submit" class="success-button">Close</button>
            </Link>
         </div> 
        </div>
      </section>
  );
}       