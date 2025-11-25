import React from "react";

const Board = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <p className="font-rammetto text-2xl text-[#515151]">Round</p>
      <div className="mt-4 bg-[#f6fbf9] px-5 py-5 rounded-4xl">
        <div className="grid grid-cols-3 grid-rows-3 w-sm bg-[#CEDFD8] gap-2 rounded-4xl ">
          <div className="aspect-square  bg-[#f6fbf9]"></div>
          <div className="aspect-square  bg-[#f6fbf9]"></div>
          <div className="aspect-square  bg-[#f6fbf9]"></div>

          <div className="aspect-square  bg-[#f6fbf9]"></div>
          <div className="aspect-square  bg-[#f6fbf9]"></div>
          <div className="aspect-square  bg-[#f6fbf9]"></div>

          <div className="aspect-square  bg-[#f6fbf9]"></div>
          <div className="aspect-square  bg-[#f6fbf9]"></div>
          <div className="aspect-square  bg-[#f6fbf9]"></div>
        </div>
      </div>
    </div>
  );
};

export default Board;
