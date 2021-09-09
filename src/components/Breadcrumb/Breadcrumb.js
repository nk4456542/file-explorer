import "./Breadcrumb.css";
function Breadcrumb() {
  return <div className="breadcrumb">{window.location.pathname}</div>;
}

export default Breadcrumb;
