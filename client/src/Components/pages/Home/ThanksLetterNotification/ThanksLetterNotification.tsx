import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../../constants/routeItems";
const { thanksLetter } = Routes;
const newF = [
  { id: 1, to: "최상훈 목사님", from: "저다한", desc: "어쩌구 저쩌구." },
  { id: 2, to: "백선경 목사님", from: "저희제", desc: "어쩌구 저쩌구." },
  { id: 3, to: "최상훈 목사님", from: "배성국", desc: "어쩌구 저쩌구." },
  { id: 4, to: "백선경 목사님", from: "박정현", desc: "어쩌구 저쩌구." },
  { id: 5, to: "최상훈 목사님", from: "이영광", desc: "어쩌구 저쩌구." },
  {
    id: 6,
    to: "백선경 목사님",
    from: "빛모세",
    desc: "어쩌구 저쩌구.",
  },
];
const ThanksLetterNotification = () => {
  return (
    <section className="max-w-screen-2xl m-auto py-5 ">
      <div className="w-4/5 m-auto">
        <h2 className="text-left font-bold text-2xl text-[#222] pt-8 max-sm:text-lg max-sm:py-0">
          감사편지❣️
        </h2>
        <h3 className="p-3 py-1 text-[#888] max-sm:text-xs">
          - 마음을 담아 감사한 분께 작성해주세요!
        </h3>
        <div className="box overflow-x-auto">
          <ul className="card-wrapper w-screen flex justify-between">
            {newF.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <li className="text-center m-5 mr-2 rounded-lg ">
      <Link
        to={thanksLetter}
        className="letter block w-72 max-sm:w-32 relative p-4"
      >
        <img
          className="block max-w-36 rounded-lg max-h-36 m-auto"
          src="/img/thanksletter.png"
          alt="new family"
        />
        <p className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#fff] z-10 font-extrabold	 w-full">
          {item.to}께
        </p>
      </Link>
    </li>
  );
};

export default ThanksLetterNotification;
