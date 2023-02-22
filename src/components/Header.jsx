import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Feedback from './Feedback';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="main">
        <nav>
          <div className="header_logo">
            <Link to="/">
              <img src="/Header/logo.png" alt="logo" className="logo" />
            </Link>
          </div>
              <button onClick={() => {setIsOpen(!isOpen);}} className="btn">Feedback</button>
        </nav>
        <Feedback isOpen={isOpen} onDismiss = {() => setIsOpen(false)} />
      </div>
    )
};