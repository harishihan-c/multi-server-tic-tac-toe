import React from "react";
import NavBar from "../components/NavBar";
import PlayerCard from "../components/PlayerCard";
import Board from "../components/Board";

const Bot = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-between px-10 mt-10'>
        <PlayerCard />
        <Board />
        <PlayerCard />
      </div>
    </div>
  );
};

export default Bot;
