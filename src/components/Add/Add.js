import { useState } from "react";
import "./Add.css";

function Add() {
  const [createOpen, setCreateOpen] = useState(false);

  function handleAdd() {
    setCreateOpen((prevState) => !prevState);
  }

  return (
    <div className="add-button" onClick={handleAdd}>
      <button>+</button>
      {createOpen && (
        <div className="create-files">
          <p className="create-btn">File</p>
          <p className="create-btn">Folder</p>
        </div>
      )}
    </div>
  );
}

export default Add;
