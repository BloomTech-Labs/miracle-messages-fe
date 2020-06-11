import React, { useState } from "react";
import ReunionModal from "./ReunionModal";
import "./Reunions.scss";

import { dummyConnections } from "./dummies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Connections = ({ reunions }) => {
  console.log(reunions);
  const [connections, setConnections] = useState(dummyConnections);
  const maxConnections = 10;

  //This function calculates random indices to display under "Reunions" - can probably remove
  // Probably best to have a carousel to display them, but wanted a way to display only a few
  // on chapter page so I selected indices of reunions randomly
  const randIndices = (max, arrLength) => {
    const calcRand = (length) => Math.floor(Math.random() * length);

    const indices = [];
    for (let i = 0; i < max && i < arrLength; i++) {
      let rand = calcRand(arrLength);
      while (indices.includes(rand)) {
        rand = calcRand(arrLength);
      }
      indices.push(rand);
    }
    return indices;
  };

  const displayIndices = randIndices(maxConnections, reunions.length);

  return (
    <div className="outer-cards-container">
      <h2>Reconnections</h2>
      <div className="cards-container">
        <Carousel responsive={responsive}>
          {reunions
            .filter((el, i) => displayIndices.includes(i))
            .map((el, index) => (
              <ReunionModal connection={el} key={index} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Connections;
