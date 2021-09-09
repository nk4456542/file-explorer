import "./Main.css";
import Breadcrumb from "../Breadcrumb";
import Searchbar from "../Searchbar";
import Add from "../Add";
import DisplayArea from "../DisplayArea";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="topbar-flex">
        <Breadcrumb />
        <Searchbar />
        <Add />
      </div>
      <Switch>
        <Route exact path="/">
          <h1>No Folder Selected</h1>
        </Route>
        <Route exact path="/folder/:folderId">
          <DisplayArea />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
