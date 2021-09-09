import "./Main.css";
import Breadcrumb from "../Breadcrumb";
import Searchbar from "../Searchbar";
import Add from "../Add";
import DisplayArea from "../DisplayArea";

function Main() {
  return (
    <div className="show-files">
      <div className="topbar-flex">
        <Breadcrumb />
        <Searchbar />
        <Add />
      </div>
      <DisplayArea />
    </div>
  );
}

export default Main;
