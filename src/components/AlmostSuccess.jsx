import React, { useContext } from "react";
import "../styles/almostSuccess.css";
import Emailbar from "./Emailbar";
import { DataContext } from "../pages/LandingPage";
import axios from "axios";

export default function AlmostSuccess() {
  const {
    modal,
    setModal,
    url,
    setUrl,
    email,
    setEmail,
    success,
    setSuccess,
    error,
    setError,
    dispatch
  } = useContext(DataContext);

  const formData = new FormData();
  formData.append("url", url);
  formData.append("email", email);

  const handleSubmit = async e => {
    e.preventDefault();

    const isValidUrl = /^https?\:\/\/.+/.test(url);

   if (!isValidUrl) {
      setError(1);
      setModal(0);
      return;
    }

    try {
      const res = await axios.request({
        method: "POST",
        url: "http://api.xreview.developersmindset.tech/api/v1/uploadfile",
        data: formData
      });

      setEmail("");
      setUrl("");
      setSuccess(1);
      setModal(0);
    } catch (error) {
      setError(1);
      setModal(0);
    }
  };
  return (
    <section className="Asuccess-background">
      <div className="Asuccess-body">
        <div className="Asuccess-popup">
          <div className="Asuccess-align">
            <img src="/Header/check.png" alt="icon" className="Asuccess-icon" />
            <h2>You're almost there!</h2>
            <h2>Add an Email to receive your results</h2>
            <p>Where would you like to recieve your result?.</p>
            <Emailbar handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
