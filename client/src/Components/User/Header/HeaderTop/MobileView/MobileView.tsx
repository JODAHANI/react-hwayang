import "../../../../../index.css";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface naviTypes {
  route: string;
  text: string;
}

const sidebarContainerCss = "fixed z-50 top-0 w-full h-full bg-[#000]/80";
const sidebarInnerCss =
  "absolute top-0 w-3/5 h-full bg-[#fff] transition-all  duration-100";
const rounded = "rounded-br-lg rounded-tr-lg";
const spanCss = "block w-full h-0.5 absolute bg-[#000] left-0 cursor-pointer";

const MobileView: React.FC<{ login: naviTypes }> = ({ login }): JSX.Element => {
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
            className={`${sidebarContainerCss} left-0`}
            onClick={inputCheckboxHandler}
          >
            <div
              className={`${sidebarInnerCss} ${rounded}  left-0 ease-in `}
            ></div>
          </div>
        ) : (
          <div className={`${sidebarContainerCss} -left-full`}>
            <div className={`${sidebarInnerCss} -left-full ease-out`}></div>
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
          <Link className="flex justify-center items-center" to={login.route}>
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

export default MobileView;
