import React from "react";
import { Link } from "react-router-dom";
import type { NaviTypes } from "../../../../../constants/Types";

const NavigationItem: React.FC<{ item: NaviTypes }> = ({
  item,
}): JSX.Element => {
  return (
    <li className="px-3">
      <Link to={item.route}>{item.text}</Link>
    </li>
  );
};

export default NavigationItem;
