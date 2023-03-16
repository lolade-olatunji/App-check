import React, { useContext } from "react";
import "../styles/productSuccess.css";
import { Link } from "react-router-dom";
import { DataContext } from "../pages/LandingPage";

export default function ProductSuccess() {
  const { success, setSuccess } = useContext(DataContext);
  return (
    <section className="Psuccess-background">
      <div className="Psuccess-body">
        <div className="Psuccess-popup">
          <div className="Psuccess-align">
            <img src="/Header/check.png" alt="icon" className="Psuccess-icon" />
            <h2>
              Congratulations, you have successfully submitted your Product!
            </h2>
            <p className="product-para">
              You will recieve the result to the test in 48hours! You'll find it
              in your Email.
            </p>
          </div>
          <Link to="/">
            <button
              onClick={() => {
                setSuccess(0);
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
