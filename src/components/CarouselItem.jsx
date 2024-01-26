import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { LuPenSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.jpg";
import travel3 from "../assets/travel3.jpg";

const covers = [travel1, travel2, travel3];

export default function CarouselItem({ item, index }) {
  return (
    <div className="w-4/5 h-auto m-auto mt-10 carousel-item flex-col rounded-2xl border shadow-lg">
      <div className="w-full p-5 flex justify-between items-center">
        <p className="text-xl font-bold text-red-600">Travel Destination</p>
        <div className="flex items-center">
          <Link to="" className="flex items-center">
            <button className="text-purple-500 mr-3">
              <LuPenSquare size={20} />
            </button>
          </Link>
          <button>
            <RiDeleteBinFill size={20} />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={covers[index]} className="w-9/12"/>
      </div>
      <div className="w-9/12 m-auto mt-4">
        <span className="font-bold text-4xl">{item.title}</span>
        <span className="ml-4 text-sm font-bold text-gray-500 underline">
          {item.country}
        </span>
      </div>
      <div className="w-9/12 h-full m-auto mt-4">
        <span className="text-xl font-bold">{item.content}</span>
      </div>
    </div>
  );
}
