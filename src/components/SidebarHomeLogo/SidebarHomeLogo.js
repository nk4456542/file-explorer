import "./SidebarHomeLogo.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function SidebarHomeLogo() {
  return (
    <div className="logo">
      <Link to="/" className="logo-flex">
        <img src={logo} alt="logo" />
        <p>ExploreXT</p>
      </Link>
    </div>
  );
}

export default SidebarHomeLogo;
