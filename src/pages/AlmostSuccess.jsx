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
               <h2>You're Almost there! Add an Email to receive your results</h2>
               <p >Where would you like to recieve your result?.</p>
            </div>
         </div> 
        </div>
      </section>
  );
}       