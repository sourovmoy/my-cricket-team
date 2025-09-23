import React, { use } from "react";
import PlayersCard from "./PlayersCard";
import Selected from "./Selected";

const Card = ({ players }) => {
  const playersData = use(players);
  console.log(playersData);

  return (
    <div className="my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {playersData.map((player) => (
          <PlayersCard key={player.id} player={player}></PlayersCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
