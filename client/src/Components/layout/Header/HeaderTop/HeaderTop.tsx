import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../index.css";

import { Routes, RoutesText } from "../../../../constants/routeItems";
import { RouteType } from "../../../../constants/types";
// 모바일
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NaviItemType = {
  item: RouteType;
};

const { login, signUp, prayerRequest, graceSharing } = Routes;
const { loginText, signUpText, prayerRequestText, graceSharingText } =
  RoutesText;

const deskTopLeftNavigationItem = [
  { route: prayerRequest, text: prayerRequestText },
  { route: graceSharing, text: graceSharingText },
];

const deskTopRightNavigationItem = [
  { route: login, text: loginText },
  { route: signUp, text: signUpText },
];

const headerTopCss = "flex justify-between items-center m-auto p-6 px-5";

const HeaderTop = (): JSX.Element => {
  return (
    <div className="header-top ">
      <div className={`desk-top ${headerTopCss}`}>
        <DeskTopView />
      </div>
      <div className={`mobile ${headerTopCss}`}>
        <MobileView />
      </div>
    </div>
  );
};

// 데스크탑View 컴포넌트
const DeskTopView = () => {
  return (
    <>
      <div className="text-[#333] font-bold">
        <ul className="flex justify-center items-center text-xs ">
          {deskTopLeftNavigationItem.map((item) => (
            <NavigationItem key={item.route} item={item} />
          ))}
        </ul>
      </div>
      <Link to="/">
        <h2 className="text-3xl font-black hover:text-zinc-700 transition-all tracking-wider max-md:text-2xl">
          Anointing Hwayang
        </h2>
      </Link>
      <div>
        <ul className="flex justify-center items-center text-xs text-[#333] font-bold ">
          {deskTopRightNavigationItem.map((item) => (
            <NavigationItem key={item.route} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

const mobileSidebarContainerCss = "fixed z-50 top-0 w-full h-full bg-[#000]/80";
const mobileSidebarInnerCss =
  "absolute top-0 w-3/5 h-full bg-[#fff] transition-all  duration-100";
const rounded = "rounded-br-lg rounded-tr-lg";
const spanCss = "block w-full h-0.5 absolute bg-[#000] left-0 cursor-pointer";

//모바일 View 컴포넌트
const MobileView = (): JSX.Element => {
  const [inputCheckbox, setinputCheckbox] = useState(false);

  const inputCheckboxHandler = () => {
    setinputCheckbox((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <div className="text-sm font-semibold w-4	h-3 cursor-pointer">
        <input
          id="trigger"
          type="button"
          className="hidden"
          onClick={inputCheckboxHandler}
        />
        <label
          className="block relative w-full h-full cursor-pointer"
          htmlFor="trigger"
        >
          <span className={`${spanCss} top-0`}></span>
          <span className={`${spanCss} top-1/2`}></span>
          <span className={`${spanCss} top-full`}></span>
        </label>
        {inputCheckbox ? (
          <div
            className={`${mobileSidebarContainerCss} left-0`}
            onClick={inputCheckboxHandler}
          >
            <div
              className={`${mobileSidebarInnerCss} ${rounded}  left-0 ease-in `}
            ></div>
          </div>
        ) : (
          <div className={`${mobileSidebarContainerCss} -left-full`}>
            <div
              className={`${mobileSidebarInnerCss} -left-full ease-out`}
            ></div>
          </div>
        )}
      </div>
      <Link to="/">
        <h2 className="text-xl font-black hover:text-zinc-700 transition-all ">
          Anointing Hwayang
        </h2>
      </Link>
      <div className="text-sm font-medium w-4	h-5">
        <div className=" flex justify-center items-center">
          <Link className="flex justify-center items-center" to={login}>
            <FontAwesomeIcon
              className="my-0.5 text-[#000]"
              icon={faUser}
              size="lg"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

const NavigationItem = ({ item }: NaviItemType): JSX.Element => {
  return (
    <li className="px-3">
      <Link to={item.route}>{item.text}</Link>
    </li>
  );
};

export default HeaderTop;
