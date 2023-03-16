import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Feedback from './Feedback';
import SuccessFeedBack from './SuccessFeedBack';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
    return (
      <div className="main">
        <nav>
          <div className="header_logo">
            <Link to="/">
              <img src="/Header/Xlogo.png" alt="logo" className="logo" />
            </Link>
          </div>
              <button onClick={() => {setIsOpen(!isOpen);}} className="btn">Feedback</button>
              <button onClick={() => {setIsOpen(!isOpen);}} className="mini"><img src="/Header/mini.png" alt="mini" /></button>
        </nav>
        <Feedback isOpen={isOpen} onDismiss = {() => setIsOpen(false)} modal={modal} setModal={setModal} setIsOpen={setIsOpen} />
        {modal&&<SuccessFeedBack setModal={setModal} />}
      </div>
    )
};