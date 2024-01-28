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
    <div className="w-full m-auto mt-10 carousel-item flex-col rounded-2xl border shadow-lg">
      <div className="w-full p-5 flex justify-between items-center border-b-2 border-purple-500">
        <p className="text-xl font-bold text-red-600">Travel Destination</p>
        <div className="flex items-center">
          <Link to="/modifyform" className="flex items-center">
            <button className="text-purple-500 mr-3">
              <LuPenSquare size={20} />
            </button>
          </Link>
          <button>
            <RiDeleteBinFill size={20} />
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center border-b-2 border-purple-500">
        <img src={covers[index] } className="w-5/6 h-[500px] object-cover p-5"/>
      </div>
      <div className="w-9/12 m-auto mt-4">
        <span className="font-bold text-4xl">{item.title}</span>
        <span className="ml-4 text-sm font-bold text-gray-500 underline">
          {item.country}
        </span>
      </div>
      <div className="w-10/12 h-60 m-auto mt-4 p-5">
        <span className="h-full text-xl font-bold">{item.content}</span>
      </div>
    </div>
  );
}
