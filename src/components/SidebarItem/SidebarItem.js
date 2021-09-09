import "./SidebarItem.css";
import folderIcon from "../../assets/folder-open.png";

function SidebarItem(props) {
  const { item, indent, indentStep } = props;
  const { name, children } = item;
  //   console.log(item);
  let classesList = "sidebar-item-style";
  let divClass = "";
  if (indentStep > 0) {
    divClass = "sidebar-indent-style";
  }
  return (
    <div
      style={{ paddingLeft: `${indent * indentStep}px` }}
      className={divClass}
    >
      <div className={classesList}>
        <img src={folderIcon} alt="folder icon" />
        <p>{name}</p>
      </div>
      {Array.isArray(children)
        ? children.map((child) =>
            child.isFolder ? (
              <SidebarItem
                key={child.id}
                item={child}
                indent={indent}
                indentStep={indentStep + 1}
              />
            ) : null
          )
        : null}
    </div>
  );
}

export default SidebarItem;
