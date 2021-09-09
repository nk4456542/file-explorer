import "./DisplayArea.css";
import { useParams } from "react-router-dom";
import { flatData } from "../../data/data";
import FileDisplay from "../FileDisplay";

function DisplayArea() {
  const { folderId } = useParams();
  const currentFolder = flatData.find((folder) => {
    return folder.id === Number(folderId);
  });
  const currentFiles = currentFolder.children;
  console.log(currentFiles);
  return (
    <div className="display-area">
      {currentFiles.length > 0 ? (
        currentFiles.map((file) => {
          return <FileDisplay key={file.id} file={file} />;
        })
      ) : (
        <h1>No files in the folder</h1>
      )}
    </div>
  );
}

export default DisplayArea;
