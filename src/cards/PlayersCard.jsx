import React from "react";
import img from "../assets/images/Group.png";

const PlayersCard = ({ player }) => {
  console.log(player);

  return (
    <div className="card w-96 shadow-sm p-3 bg-gray-700 hover:scale-[1.02]">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <img className="mr-2" src={img} alt="" />
          {player.name}
        </h2>
        <p>Price : ${player.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary hover:scale-[1.02]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
