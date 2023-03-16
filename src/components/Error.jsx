import React, { useContext } from "react";
import "../styles/error.css";
import { Link } from "react-router-dom";
import { DataContext } from "../pages/LandingPage";

export default function ProductSuccess() {
  const { error, setError } = useContext(DataContext);
  return (
    <section className="Esuccess-background">
      <div className="Esuccess-body">
        <div className="Esuccess-popup">
          <div className="Esuccess-align">
            <img src="/Header/error.png" alt="icon" className="Esuccess-icon" />
            <h2>Upload Error</h2>
            <p>
              Unfortunately, your APK upload has failed. Please make sure the
              APK format is valid and your network connection is stable.
            </p>
          </div>
          <Link to="/">
            <button
              onClick={() => {
                setError(0);
              }}
              type="submit"
              className="Psuccess-btn"
            >
              Close
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
