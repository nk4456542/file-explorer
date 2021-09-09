import "./Main.css";
import Breadcrumb from "../Breadcrumb";
import Searchbar from "../Searchbar";
import Add from "../Add";
import DisplayArea from "../DisplayArea";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="main">
          <div className="topbar-flex">
            <Breadcrumb />
            <Searchbar />
            <Add />
          </div>
          <h1>No Folder Selected</h1>
        </div>
      </Route>
      <Route exact path="/folder/:folderId">
        <div className="main">
          <div className="topbar-flex">
            <Breadcrumb />
            <Searchbar />
            <Add />
          </div>
          <DisplayArea />
        </div>
      </Route>
    </Switch>
  );
}

export default Main;
