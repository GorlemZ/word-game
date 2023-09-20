import React from "react";

export function Banner(isHappy) {
  console.log(isHappy);
  if (isHappy.isWinner) {
    return <div className="happy banner">Diofa hai vinto vecio</div>;
  } else return <div className="sad banner">Nope, ritenta</div>;
}
