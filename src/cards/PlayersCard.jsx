import React, { useState } from "react";
import img from "../assets/images/Group.png";

const PlayersCard = ({
  player,
  setAmount,
  amount,
  setChoosePlayer,
  choosePlayer,
}) => {
  const [click, setClick] = useState(false);
  const restAmount = (playerData) => {
    if (amount < playerData.price) {
      alert("Inefficient Coins 🪙");
      return;
    }
    setClick(true);
    setAmount(amount - playerData.price);
    const newPlayers = [...choosePlayer, player];
    setChoosePlayer(newPlayers);
  };

  return (
    <div className="card shadow-lg p-3 bg-gray-700 hover:scale-[1.02]">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">
          <img className="mr-3" src={img} alt="" />
          {player.name}
        </h2>
        <p className="border-1 my-5"></p>
        <p className="text-[18px]">Batting : {player.batting_style}</p>
        <p className="text-[18px]">Bowling : {player.bowling_style}</p>
        <p className="text-[18px]">Price : ${player.price}</p>
        <div className="card-actions justify-end">
          <button
            disabled={click}
            onClick={() => restAmount(player)}
            className="btn btn-primary hover:scale-[1.02]"
          >
            {click ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
