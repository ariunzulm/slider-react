"use client";

import { Quote } from "lucide-react";
import { SquareChevronRight } from "lucide-react";
import { SquareChevronLeft } from "lucide-react";
import { useState } from "react";
import data from "./data";

export default function Slider() {
  const [person, setPerson] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    // if (index === person.length) {
    //   setIndex(0);
    // } else {
    //   setIndex((prev) => prev + 1);
    // }
    if (index === person.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  const prevSlide = () => {
    // if (index === person.length) {
    //   setIndex(0);
    // } else {
    //   setIndex((prev) => prev - 1);
    // }
    if (index === 0) setIndex(person.length - 1);
    else setIndex(index - 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div className="w-200 h-112.5 shadow-2xl flex">
        <button onClick={prevSlide}>
          <SquareChevronLeft
            className="w-10 h-10 fill-slate-500 text-white cursor-pointer hover:fill-violet-500 "
            strokeWidth={1}
          />
        </button>

        <div
          className={`"flex transition ease-out duration-300 translate-x-[-${
            index * 100
          }]`}
        >
          <DataSlider data={data[index]} />
        </div>

        <button onClick={nextSlide}>
          <SquareChevronRight
            className="w-10 h-10 fill-slate-500 text-white cursor-pointer hover:fill-violet-500"
            fill="currentColor"
            strokeWidth={1}
          />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {data.map((dot, i) => {
          return (
            <div
              key={"dot" + i}
              className={`rounded-full w-2 h-2 ${
                i === index ? "bg-violet-600" : "bg-white"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

const DataSlider = ({ data }) => {
  const { id, imageURl, name, role, description } = data;
  return (
    <div key={id} className="flex-col flex justify-center items-center gap-3">
      <img
        src={imageURl}
        alt={name}
        className="w-37.5 h-37.5 object-cover rounded-full border-violet-200 border-4"
      />
      <h1 className="text-violet-500 text-[20px] font-medium ">{name}</h1>
      <p className="text-gray-700 text-[16px] font-medium ">{role}</p>
      <p className="text-gray-500 text-[16px] font-medium mt-5 mx-10 text-center">
        {description}
      </p>
      <Quote
        className="text-violet-600 w-12 h-12"
        fill="currentColor"
        strokeWidth={1}
      />
    </div>
  );
};
