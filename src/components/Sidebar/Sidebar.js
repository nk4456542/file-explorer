import "./Sidebar.css";
import { data } from "../../data/data";
import SidebarItem from "../SidebarItem";
import SidebarHomeLogo from "../SidebarHomeLogo";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHomeLogo />
      {data.map((item) =>
        item.isFolder ? (
          <SidebarItem
            key={`${item.name}${item.id}`}
            item={item}
            indent={20}
            indentStep={0}
          />
        ) : null
      )}
    </div>
  );
}

export default Sidebar;
