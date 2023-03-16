import React, { useContext } from "react";
import "../styles/searchbar.css";
import { DataContext } from "../pages/LandingPage";

const Search = () => {
  const { modal, setModal, url, setUrl, urlErr, setUrlErr } = useContext(
    DataContext
  );
  const handleModal = e => {
    e.preventDefault();
    const isValidUrl = /^https?\:\/\/.+/.test(url);

    if (!isValidUrl) {
      setUrlErr(1);
      setModal(0);
      return;
    } else {
      setModal(1);
      setUrlErr(0);
    }
  };
  const urlHandler = e => {
    setUrl(e.target.value);
  };
  console.log(url);
  return (
    <form action="/" method="get" className="form">
      <div className="form-one">
        <div className="search-label">
          <label htmlFor="header-search">
            <span className="web">Website Url</span>
          </label>
          <input
            onChange={urlHandler}
            value={url}
            className="in"
            type="url"
            id="header-search"
            placeholder="https://www."
            name="Website url"
            required
          />
        </div>
        <button
          onClick={e => {
            handleModal(e);
          }}
          className="bntn bntn1"
          type="submit"
        >
          Submit
        </button>
      </div>
        {urlErr ? <div className="err-url">Input a Valid Website Url.</div> : ""}
    </form>
  );
};

export default Search;
