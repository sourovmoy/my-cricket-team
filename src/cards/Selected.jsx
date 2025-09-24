import React from "react";
import SelectedPlayer from "./SelectedPlayer";

const Selected = ({ choosePlayer, removeBtn }) => {
  return (
    <div>
      {choosePlayer.map((player) => (
        <SelectedPlayer
          key={player.id}
          removeBtn={removeBtn}
          player={player}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default Selected;
