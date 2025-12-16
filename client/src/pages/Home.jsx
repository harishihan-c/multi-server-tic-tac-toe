import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const Home = () => {
  const navigate = useNavigate();

  const handleClickBot = () => {
    navigate("/bot");
  };

  const handleClickPlayer = () => {
    navigate("/player")
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <div className="flex flex-col flex-1 justify-center items-center gap-10 font-black text-2xl">
        <button onClick={handleClickBot} className="w-80 py-5 rounded-xl bg-[#479979] text-white cursor-pointer">Play with Bot</button>
        <button onClick={handleClickPlayer} className="w-80 py-5 rounded-xl border-[#479979] border-2 text-[#479979] cursor-pointer">Play with Player</button>
      </div>
      <img src={assets.board} alt="" className="absolute right-0 bottom-0 w-80"/>
    </div>
  );
};

export default Home;
