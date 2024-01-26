import React from "react";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

export default function Header() {
  return (
    <header className="flex justify-between items-center m-3">
      <div>
        <p className="font-bold text-5xl text-purple-600">TravelDiary</p>
      </div>
      <Link to="">
        <button>
          <TfiWrite size={30} />
        </button>
      </Link>
    </header>
  );
}
