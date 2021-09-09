import "./FileDisplay.css";
import document from "../../assets/document.png";
function FileDisplay({ file }) {
  return (
    <div className="file-display">
      <img src={document} alt="document" />
      <p>{file.name}</p>
    </div>
  );
}

export default FileDisplay;
