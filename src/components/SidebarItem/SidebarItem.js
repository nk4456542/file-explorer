import { Link } from "react-router-dom";
import "./SidebarItem.css";

function SidebarItem(props) {
  const { item, indent, indentStep } = props;
  const { name, children } = item;
  console.log(item);
  return (
    <div style={{ padding: `${indent * indentStep}px` }}>
      <p>{name}</p>
      {Array.isArray(children) &&
        children.map((child) => {
          return (
            <SidebarItem
              key={`${child.name}${child.id}`}
              item={child}
              indent={indent}
              indentStep={indentStep + 1}
            />
          );
        })}
    </div>
  );
}

export default SidebarItem;
