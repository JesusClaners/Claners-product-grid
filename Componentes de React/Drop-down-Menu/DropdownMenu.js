import "./Dropdown-Claners.css";

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="{}" className="dropdown-menu-item">
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown-menu">
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownItem>Item 3</DropdownItem>
    </div>
  );
}

export default DropdownMenu;
