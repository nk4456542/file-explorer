import "./FileDisplay.css";
import document from "../../assets/document.png";
import { useState } from "react";
function FileDisplay({ file }) {
  const [showFile, setShowFile] = useState(false);

  function handleFileDisplay() {
    setShowFile(!showFile);
  }

  return (
    <div className="file-display" onClick={handleFileDisplay}>
      <img src={document} alt="document" />
      <p>{file.name}</p>
      {showFile && <div>{file.text}</div>}
    </div>
  );
}

export default FileDisplay;
