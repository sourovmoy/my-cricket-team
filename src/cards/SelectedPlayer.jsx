import React from "react";

const SelectedPlayer = ({ player }) => {
  return (
    <div className="flex justify-between shadow-2xl p-6 mb-5 items-center">
      <div className="flex items-center gap-10">
        <img
          className="bg-white h-18 w-18 rounded-2xl"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
        />
        <div>
          <h3 className="text-2xl font-bold">{player.name}</h3>
          <p className="text-xl font-semibold">{player.batting_style}</p>
        </div>
      </div>
      <a href="">❌</a>
    </div>
  );
};

export default SelectedPlayer;
