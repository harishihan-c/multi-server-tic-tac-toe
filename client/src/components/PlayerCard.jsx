import React from "react";
import assets from "../assets/assets";

const PlayerCard = () => {
  return (
    <div>
      <div className="w-50 h-35 bg-[#f2f2f2] relative rounded-tl-4xl rounded-b-2xl ">
        <div className="absolute bg-[#479979] w-full h-1/2 flex items-center gap-4 pl-5 py-5 rounded-tl-4xl rounded-br-4xl">
          <div className="rounded-full w-12 h-12 flex justify-center items-center bg-amber-400">
            <span className="text-xl">H</span>
          </div>
          <p className='font-rammetto text-xl text-white '>Harry</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
