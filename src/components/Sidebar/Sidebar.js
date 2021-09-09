import "./Sidebar.css";
import { data } from "../../data/data";
import SidebarItem from "../SidebarItem";

function Sidebar() {
  return (
    <div className="sidebar">
      {data.map((item) => {
        console.log(item);
        return (
          <SidebarItem
            key={`${item.name}${item.id}`}
            item={item}
            indent={10}
            indentStep={0}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
