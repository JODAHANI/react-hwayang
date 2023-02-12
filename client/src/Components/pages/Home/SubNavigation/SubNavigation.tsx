import React from "react";
import { Link } from "react-router-dom";

import {
  Routes,
  RoutesText,
  RoutesImgUrl,
} from "../../../../constants/routeItems";
const { prayerRequest, ministerLetter, proclamation, graceSharing } = Routes;
const {
  prayerRequestText,
  ministerLetterText,
  proclamationText,
  graceSharingText,
} = RoutesText;
const {
  prayerRequestImg,
  ministerLetterImg,
  proclamationImg,
  graceSharingImg,
} = RoutesImgUrl;
const subNavigationItems = [
  {
    route: prayerRequest,
    title: prayerRequestText,
    imgUrl: prayerRequestImg,
  },
  {
    route: ministerLetter,
    title: ministerLetterText,
    imgUrl: ministerLetterImg,
  },
  {
    route: graceSharing,
    title: graceSharingText,
    imgUrl: graceSharingImg,
  },
  {
    route: proclamation,
    title: proclamationText,
    imgUrl: proclamationImg,
  },
];
const SubNavigation = () => {
  return (
    <section className="max-w-screen-2xl m-auto py-28 max-md:py-9">
      <nav className="w-4/5 m-auto">
        {/* <nav className="w-4/5 m-auto border-2 border-blue-400"> */}
        <ul className="flex justify-around	">
          {subNavigationItems.map((item) => (
            <SubNavigationItem key={item.route} item={item} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

const SubNavigationItem = ({ item }) => {
  return (
    <li className="sub-navi-item">
      {/* <li className="sub-navi-item border-2 border-[#222]"> */}
      <Link className="text-center" to={item.route}>
        <img
          className="sub-navi-img rounded-3xl block m-auto"
          src={item.imgUrl}
          alt="icon"
        />
        <h2 className="py-3 text-center text-[#555] font-bold text-base max-md:text-xs ">
          {item.title}
        </h2>
      </Link>
    </li>
  );
};

export default SubNavigation;
// 기도요청 , 은혜공유 , 사역자 편지, 한줄선포.
