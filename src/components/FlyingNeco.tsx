import React, { useState } from 'react';

interface FlyingNecoProps {
  position: number;
}

const necoGifs = [
  "https://i.redd.it/numhxgqamjo91.gif",
];

function FlyingNeco({ position }: FlyingNecoProps) {
  const [style] = useState(() => ({
    top: `${Math.random() * 80}vh`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 10}s`,
  }));

  return (
    <img
      src={necoGifs[Math.floor(Math.random() * necoGifs.length)]}
      className="flying-neco w-16 h-16"
      style={style}
      alt="Flying Neco Arc"
      draggable="false"
    />
  );
}

export default FlyingNeco;
