import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const Selected = ({ choosePlayer }) => {
  return (
    <div>
      {choosePlayer.map((player) => (
        <SelectedPlayer player={player}></SelectedPlayer>
      ))}
    </div>
  );
};

export default Selected;
