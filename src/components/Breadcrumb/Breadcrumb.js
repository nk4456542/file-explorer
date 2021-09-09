import "./Breadcrumb.css";
import { flatData } from "../../data/data";
import { useParams } from "react-router-dom";

function Breadcrumb() {
  const { folderId } = useParams();
  const currentFolder = flatData.find((item) => item.id === Number(folderId));
  console.log("F ", currentFolder);
  if (currentFolder === undefined) {
    return <div className="breadcrumb">/</div>;
  }
  return <div className="breadcrumb">{currentFolder.name}</div>;
}

export default Breadcrumb;
