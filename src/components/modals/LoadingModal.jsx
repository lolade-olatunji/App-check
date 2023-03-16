import "../../styles/LoadingModal.css";

function LoadingModal() {
  return (
    <>
      <center>
        <div className="loadingmodal-container">
          <div className="loadingmodal-content">
            <h2 className="loadingmodal-heading-text">
              Upload your APK File for a free Review!
            </h2>
            <div className="loading-image"></div>
            <div className="loading-bar"></div>
          </div>
        </div>
      </center>
    </>
  );
}

export default LoadingModal;
