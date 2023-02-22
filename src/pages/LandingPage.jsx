import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import '../styles/landing.css';

export default function Landing() {
    return (
      <section className="Container">
        <img src="/Header/backpic.png" alt="background" className="hero" />
        <div className="content">
         <Header />
        </div>
        <div className="overview">
           <h1>Get an Expert <span>Analysis</span> of your Website or Mobile Application!</h1>
           <p>Take the Guesswork out of design and development with our expert testing and feedback.</p>
           <Searchbar />
           <img src="/Header/underbrand.png" alt="mark" className="mark" />
        </div>
        <div className="upload">
          <h2>OR</h2>
          <button className="btn2">Upload an APK</button>
        </div>
        <Footer />
      </section>
  );
}       