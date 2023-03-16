import React, { useState, createContext } from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import "../styles/landing.css";
import { Link } from "react-router-dom";
import AlmostSuccess from "../components/AlmostSuccess";
import ProductSuccess from "../components/ProductSuccess";
import Error from "../components/Error";

export const DataContext = createContext();

export default function Landing() {
  const [success, setSuccess] = useState(0);
  const [modal, setModal] = useState(0);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(0);
  const [url, setUrl] = useState("");
  const [urlErr, setUrlErr] = useState(0);
  const [error, setError] = useState(0);
  return (
    <section className="Container">
      <DataContext.Provider
        value={{
          modal,
          setModal,
          email,
          setEmail,
          emailErr,
          setEmailErr,
          url,
          setUrl,
          urlErr,
          setUrlErr,
          success,
          setSuccess,
          error,
          setError
        }}
      >
        <img src="/Header/backpic.png" alt="background" className="hero" />
        <div className="content">
          <Header />
        </div>
        <div className="overview">
          <h1>
            Get an Expert <span>Analysis</span> of your Mobile Application or
            Website!
          </h1>
          <p>
            Take the Guesswork out of design and development with our expert
            testing and feedback.
          </p>
          <Searchbar />
        </div>
        <div className="upload">
          <p className="clik">
            Not a web? Click to <Link to="/">upload</Link> an APK file instead
          </p>
          <h2 className="or">OR</h2>
          <button className="btn2">Upload an APK</button>
        </div>
        <Footer />
        {modal ? <AlmostSuccess /> : ""}
        {success ? <ProductSuccess /> : ""}
        {error ? <Error /> : ""}
      </DataContext.Provider>
    </section>
  );
}
