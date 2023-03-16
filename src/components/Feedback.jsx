import React, { useRef, useState } from "react";
import "../styles/Feedback.css";
import StarRating from "./StarRating";
import { GrClose } from "react-icons/gr";
import emailjs from "@emailjs/browser";

export default function Feedback({
  isOpen,
  setIsOpen,
  onDismiss,
  modal,
  setModal
}) {
  const [rate, setRate] = useState(0);
  const [message, setMessage] = useState("");

  const form = useRef();

  const formData = new FormData();

  const sendEmail = e => {
    e.preventDefault();
    formData.append(
      "message",
      `User feedback message: ${message}
       User rating: ${rate}
      `
    );

    form.current[0].value = `
       User feedback message: ${message}
       User rating: ${rate}
    `;
    emailjs
      .sendForm(
        "service_3yxx7ah",
        "template_ycq4o5l",
        form.current,
        "SMBOgz7IWJ2MXW8jP"
      )
      .then(result => {
        setIsOpen(false);
        setModal(true);
        console.log(result);
        console.log("message sent");
      })
      .catch(error => console.log(error));

    e.target.reset();
  };

  return (
    <section className={isOpen ? "feed-background" : "feed-close"}>
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
            <p className="what">
              We would love to Know your Experiences with AppCheck
            </p>
            <hr />
            <div className="question">
              <h2 className="ques1">
                1. How would you rate your experience with AppCheck?
              </h2>
              <StarRating rate={rate} setRate={setRate} />
              <h2 className="ques2">2. Message(Optional)</h2>
              <div className="message">
                <form
                  ref={form}
                  onSubmit={e => sendEmail(e)}
                  className="feed-form"
                >
                  <textarea
                    onChange={e => {
                      setMessage(e.target.value);
                    }}
                    name="message"
                    rows="6"
                    placeholder="..."
                    className="text-feed"
                  />
                  <button type="submit" value="send" className="feed-but">
                    Submit
                  </button>
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
