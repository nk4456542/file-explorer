import "./ShowFiles.css";
import { Switch, Route } from "react-router-dom";

const Folder = (prop) => {
  return <h1>{prop.name}</h1>;
};

function ShowFiles() {
  return (
    <div className="ShowFiles">
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/folder1">
          <Folder name="Folder 1" />
        </Route>
        <Route path="/folder2">
          <Folder name="Folder 2" />
        </Route>
        <Route exact path="/folder3">
          <Folder name="Folder 3" />
        </Route>
        <Route path="/folder3/folder4">
          <Folder name="Folder 4" />
        </Route>
      </Switch>
    </div>
  );
}

export default ShowFiles;
