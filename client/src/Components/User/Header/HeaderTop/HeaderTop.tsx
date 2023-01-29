import "../../../../index.css";
import { useEffect, useState } from "react";
import DeskTopView from "./DeskTopView/DeskTopView";
import MobileView from "./MobileView/MobileView";
import {
  Login,
  SignUp,
  PrayRequest,
  GraceSharing,
} from "../../../../constants/Route";

const HeaderTop = (): JSX.Element => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const windowInnerWidth = window.innerWidth;
    setwindowWidth(windowInnerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <div className="header-top flex justify-between items-center m-auto p-6 px-5">
      {windowWidth > 640 && (
        <DeskTopView
          login={Login}
          signUp={SignUp}
          prayRequest={PrayRequest}
          graceSharing={GraceSharing}
        />
      )}
      {windowWidth < 640 && <MobileView login={Login} />}
    </div>
  );
};

export default HeaderTop;
