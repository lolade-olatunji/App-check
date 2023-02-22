import React from "react";
import "../styles/emailbar.css"

const Emailbar = () => {
    return (
        <form action="/" method="get" className="form">
        <label htmlFor="header-search" >
            <span className="web">Website Url</span>
        </label>
        <input
        className="in"
            type="text"
            id="header-search"
            placeholder="www.https://"
            name="Website url" 
        />
        <button className="bntn bntn1" type="submit">Submit</button>
    </form>
);

}

export default Emailbar;