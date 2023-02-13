import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../../constants/routeItems";
const { newFamily } = Routes;

const newF = [
  {
    src: "img/new/1.jpg",
    name: "조다한",
    position: "청년",
  },
  {
    src: "img/new/1.jpg",
    name: "조희제",
    position: "청년",
  },
  {
    src: "img/new/1.jpg",
    name: "배성국",
    position: "청년",
  },
  {
    src: "img/new/1.jpg",
    name: "박주영",
    position: "청년",
  },
  {
    src: "img/new/1.jpg",
    name: "진가영",
    position: "청년",
  },
  {
    src: "img/new/1.jpg",
    name: "박정현",
    position: "청년",
  },
  {
    src: "img/new/1.jpg",
    name: "박상연",
    position: "청년",
  },
];
const NewFamilyNotification = () => {
  return (
    <section className="max-w-screen-2xl m-auto py-5 ">
      <div className="w-4/5 m-auto">
        <h2 className="text-left font-bold text-2xl text-[#222] pt-8 max-sm:text-lg max-sm:py-0">
          새가족을 소개합니다
        </h2>
        <h3 className="p-3 py-1 text-[#888] max-sm:text-xs">
          - SHINE 영성으로 맞이해주세요!
        </h3>
        <div className="box overflow-x-auto">
          <ul className="card-wrapper w-screen flex justify-between">
            {newF.map((item) => (
              <Card item={item} key={item.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <li className="text-center m-5 mr-2 shadow-md rounded-lg">
      <Link to={newFamily} className="liink block w-full max-sm:w-52">
        <img
          className="block w-full rounded-lg"
          src={item.src}
          alt="new family"
        />
        <div className="py-2">
          <span className=" max-sm:text-sm text-[#444] font-medium px-1">
            {item.name}
          </span>
          <span className=" max-sm:text-sm text-[#444] font-medium">
            {item.position}
          </span>
        </div>
      </Link>
    </li>
  );
};
export default NewFamilyNotification;
