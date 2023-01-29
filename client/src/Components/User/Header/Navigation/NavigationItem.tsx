import { NavLink } from "react-router-dom";

interface naviTypes {
  route: string;
  text: string;
}

const linkColor = (isActive: boolean): object => {
  if (window.innerWidth > 640) {
    return {
      color: isActive ? "#35C5F0" : "#444",
      borderBottom: isActive ? "2px solid #35C5F0" : "none",
      paddingBottom: "12.5px",
      fontWeight: isActive ? "bold" : "600",
    };
  } else {
    return {
      color: isActive ? "#35C5F0" : "#444",
      borderBottom: isActive ? "2px solid #35C5F0" : "none",
      paddingBottom: "11px",
      fontWeight: isActive ? "bold" : "600",
    };
  }
};

const NavigationItem: React.FC<{ item: naviTypes }> = ({
  item,
}): JSX.Element => {
  return (
    <>
      <li className="py-3 px-5 text-sm max-sm:p-3 max-sm:text-xs max-sm:inline-block">
        <NavLink
          className="nav-link"
          exact
          to={item.route}
          activeClassName="selected"
          style={linkColor}
        >
          {item.text}
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItem;
