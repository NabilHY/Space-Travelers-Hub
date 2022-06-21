import React from "react";
import { useSelector } from "react-redux";

import "./Rockets.css"
function Rockets() {
  const data = useSelector((state) => state.Rockets)
  return (
    <>
      <div>
        {data.map((key) => (
          <header className="container" key={key.id}>
            <img className="image" src={key.img}></img>
            <div className="info">
              <h1>{key.name}</h1>
              <p className="pargraph">{key.description}
              </p>
              <button className="btn">Reserve Rocket</button>
            </div>
          </header>
        ))}
      </div>
    </>

  );
}

export default Rockets;