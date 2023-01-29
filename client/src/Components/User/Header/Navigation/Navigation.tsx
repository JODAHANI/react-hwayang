import "../../../../index.css";
import NavigationItem from "./NavigationItem";
import {
  Home,
  WorshipApply,
  WorshipResult,
  OnlineWorship,
  WorshipGuidance,
  QuietTime,
} from "../../../../constants/Route";

const Navigation = (): JSX.Element => {
  const navigationItems = [
    Home,
    WorshipApply,
    WorshipResult,
    OnlineWorship,
    WorshipGuidance,
    QuietTime,
  ];

  return (
    <div className="header-bottom">
      <ul className="flex justify-center items-center border-y-2 border-lightGray-500 overflow-x-auto max-sm:text-center max-sm:whitespace-nowrap box-border max-sm:block">
        {navigationItems.map((item, i) => (
          <NavigationItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
