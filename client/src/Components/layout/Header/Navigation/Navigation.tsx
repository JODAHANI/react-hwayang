import { NavLink } from "react-router-dom";
import "../../../../index.css";
import { Routes, RoutesText } from "../../../../constants/routeItems";

const {
  home,
  worshipAdd,
  worshipResult,
  onlineWorship,
  worshipGuide,
  quietTime,
} = Routes;

const {
  homeText,
  worshipAddText,
  worshipResultText,
  onlineWorshipText,
  worshipGuideText,
  quietTimeText,
} = RoutesText;

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

const Navigation = (): JSX.Element => {
  const navigationItems = [
    { route: home, text: homeText },
    { route: worshipAdd, text: worshipAddText },
    { route: worshipResult, text: worshipResultText },
    { route: onlineWorship, text: onlineWorshipText },
    { route: worshipGuide, text: worshipGuideText },
    { route: quietTime, text: quietTimeText },
  ];

  return (
    <div className="header-bottom">
      <ul className="flex justify-center items-center border-y-2 border-lightGray-500 overflow-x-auto max-sm:text-center max-sm:whitespace-nowrap box-border max-sm:block">
        {navigationItems.map((item) => (
          <NavigationItem key={item.route} item={item} />
        ))}
      </ul>
    </div>
  );
};

const NavigationItem = ({ item }): JSX.Element => {
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

export default Navigation;
