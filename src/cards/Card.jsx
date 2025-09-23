import React, { use } from "react";
import PlayersCard from "./PlayersCard";

const Card = ({ players }) => {
  const playersData = use(players);
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Available Players</h3>
        </div>
        <div className="items-center">
          <button className="btn border-3 mb-10 bg-[#E7FE29] text-black font-semibold rounded-l-2xl hover:scale-[1.02]">
            Available
          </button>
          <button className="btn border-3 mb-10 rounded-r-2xl text-white font-semibold hover:scale-[1.02]">
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-20">
        {playersData.map((player) => (
          <PlayersCard key={player.id} player={player}></PlayersCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
