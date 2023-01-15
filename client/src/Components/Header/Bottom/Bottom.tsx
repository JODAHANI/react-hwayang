import { NavLink } from "react-router-dom";
import "../../../index.css";
const linkColor = (isActive: boolean) => {
  return {
    color: isActive ? "#35C5F0" : "#444",
    borderBottom: isActive ? "3px solid #35C5F0" : "none",
    paddingBottom: "1.2rem",
  };
};
const Bottom = () => {
  return (
    <div className="header-bottom">
      <ul className="flex justify-center items-center border-y-2 border-lightGray-500 overflow-x-auto max-sm:text-center max-sm:whitespace-nowrap box-border max-sm:block">
        <li className="p-5 text-base font-bold max-sm:py-3 max-sm:text-xs max-sm:inline-block ">
          <NavLink exact to="/" activeClassName="selected" style={linkColor}>
            홈
          </NavLink>
        </li>
        <li className="p-5 text-base font-bold max-sm:py-3 max-sm:text-xs max-sm:inline-block ">
          <NavLink
            to="/worship-apply"
            activeClassName="selected"
            style={linkColor}
          >
            예배신청
          </NavLink>
        </li>
        <li className="p-5 text-base font-bold max-sm:py-3 max-sm:text-xs max-sm:inline-block ">
          <NavLink
            to="/worship-result"
            activeClassName="selected"
            style={linkColor}
          >
            신청결과/취소
          </NavLink>
        </li>
        <li className="p-5 text-base font-bold max-sm:py-3 max-sm:text-xs max-sm:inline-block ">
          <NavLink
            to="/online-worship"
            activeClassName="selected"
            style={linkColor}
          >
            온라인 예배
          </NavLink>
        </li>
        <li className="p-5 text-base font-bold max-sm:py-3 max-sm:text-xs max-sm:inline-block ">
          <NavLink
            to="/worship-Guidance"
            activeClassName="selected"
            style={linkColor}
          >
            예배안내
          </NavLink>
        </li>
        <li className="p-5 text-base font-bold max-sm:py-3 max-sm:text-xs max-sm:inline-block ">
          <NavLink
            to="/quiet-time"
            activeClassName="selected"
            style={linkColor}
          >
            큐티하기
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Bottom;
