import React, { use } from "react";
import PlayersCard from "./PlayersCard";
import Selected from "./Selected";

const Card = ({
  players,
  setAmount,
  amount,
  choosePlayer,
  setChoosePlayer,
}) => {
  const playersData = use(players);

  return (
    <div className="my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {playersData.map((player) => (
          <PlayersCard
            key={player.id}
            setAmount={setAmount}
            amount={amount}
            player={player}
            setChoosePlayer={setChoosePlayer}
            choosePlayer={choosePlayer}
          ></PlayersCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
