import { useState } from "react";
import "../../styles/SubmitModal.css";
import AlmostSuccess from "../AlmostSuccess";
import Error from "../Error";
import LoadingModal from "./LoadingModal";

function SubmitModal({ onClose }) {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }

      formData.append("email", "example@example.com");

      const response = await fetch(
        "http://api.xreview.developersmindset.tech/api/v1/uploadfile",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(droppedFiles);
  };

  const renderModalContent = () => {
    if (isLoading) {
      return <LoadingModal />;
    }

    if (isError) {
      return <Error />;
    }

    if (isSuccess) {
      return <AlmostSuccess />;
    }

    return (
      <>
        <center>
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-close">
                <p onClick={onClose}>X</p>
              </div>

              <h2 className="modal-heading-text">
                Upload your APK File for a free Review!
              </h2>
              <center className="max">
                <div
                  className="modal-drop-area"
                  onDrop={handleDrop}
                  onDragOver={(event) => event.preventDefault()}
                  onDragEnter={(event) => event.preventDefault()}
                  onDragLeave={(event) => event.preventDefault()}
                  onPaste={(event) => {
                    const clipboardItems = event.clipboardData.items;
                    const files = [];
                    for (let i = 0; i < clipboardItems.length; i++) {
                      if (clipboardItems[i].kind === "file") {
                        const file = clipboardItems[i].getAsFile();
                        files.push(file);
                      }
                    }
                    setFiles(files);
                  }}
                >
                  {" "}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="uploadText">
                    <p>Drag or Paste APK File &nbsp; &nbsp;&nbsp; CTRL + V</p>
                  </div>
                </div>
              </center>

              <center>
                <br />
                <label htmlFor="fileInput" className="fileInputLabel">
                  <center>
                    <input
                      className="uploadButton"
                      id="fileInput"
                      type="file"
                      onChange={(event) => setFiles(event.target.files)}
                      onPaste={(event) => {
                        const clipboardItems = event.clipboardData.items;
                        const files = [];
                        for (let i = 0; i < clipboardItems.length; i++) {
                          if (clipboardItems[i].kind === "file") {
                            const file = clipboardItems[i].getAsFile();
                            files.push(file);
                          }
                        }
                        setFiles(files);
                      }}
                    />
                  </center>
                </label>{" "}
                <br />
                <button className="submitBtn" onClick={handleSubmit}>
                  Submit
                </button>
              </center>
            </div>
          </div>
        </center>
      </>
    );
  };

  return <div className="modal">{renderModalContent()}</div>;
}

export default SubmitModal;
