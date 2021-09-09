import "./Sidebar.css";
import { data } from "../../data/data";
import SidebarItem from "../SidebarItem";
import SidebarHomeLogo from "../SidebarHomeLogo";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHomeLogo />
      <div className="sidebar-items">
        {data.map((item) =>
          item.isFolder ? (
            <SidebarItem
              key={`${item.name}${item.id}`}
              item={item}
              indent={15}
              indentStep={0}
            />
          ) : null
        )}
      </div>
      <div className="lock-btn">
        <button>Lock</button>
      </div>
    </div>
  );
}

export default Sidebar;
