import React from 'react';
import '../styles/Feedback.css';
import StarRating from './StarRating';
import { GrClose } from 'react-icons/gr';
import SuccessFeedBack from './SuccessFeedBack';

export default function Feedback({ isOpen, onDismiss }) {
    return (
      <section className={isOpen ? 'feed-background' : 'feed-close'}>
         <div className="feed-body">
           <div className="feed-popup">
             <div className="feed-left">
               <div className="feed-nav">
                 <div className="feed-logo">
                   <img src="/Header/logomark.png" alt="logo" className="symbol" />
                   <h2 className="nav-spa">Feedback</h2>
                 </div> 
                    <GrClose onClick={onDismiss} className="feedback-close" />
               </div>
                  <p className="what">We would love to Know your Experiences with AppCheck</p>
                   <hr/>
                   <div className="question">
                     <h2 className="ques1">1. How would you rate your experience with AppCheck?</h2>
                     <StarRating />
                       <h2 className="ques2">2. Message(Optional)</h2>
                    <div className="message">
                      <form className="feed-form">
                         <textarea name="Message" rows="6" placeholder="..." className="text-feed"></textarea>
                         <button type="submit" className="feed-but">Submit</button>
                      </form>
                    </div>
                    </div>
             </div>
           <div className="feed-right">
             <img src="/Header/smilee.png" alt="logo" className="symbol" />
          </div>
         </div> 
        
        </div>
      </section>
  );
}       