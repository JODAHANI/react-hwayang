import { Link } from "react-router-dom";
import TopNavigationItem from "../TopNavigationItem/TopNavigationItem";
import type { NaviTypes } from "../../../../../constants/Types";

const DeskTop: React.FC<{
  login: NaviTypes;
  signUp: NaviTypes;
  prayRequest: NaviTypes;
  graceSharing: NaviTypes;
}> = ({ login, signUp, prayRequest, graceSharing }): JSX.Element => {
  const LeftNavigationItem = [prayRequest, graceSharing];
  const RightNavigationItem = [login, signUp];

  return (
    <>
      <div className="text-[#333] font-bold">
        <ul className="flex justify-center items-center text-xs ">
          {LeftNavigationItem.map((item, i) => (
            <TopNavigationItem key={i} item={item} />
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
          {RightNavigationItem.map((item, i) => (
            <TopNavigationItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DeskTop;
