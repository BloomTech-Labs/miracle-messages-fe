import React, { useState } from "react";
import ReunionModal from './ReunionModal'
import './Reunions.scss'

import { dummyConnections } from './dummies'

const Connections = () => {
  const [ connections, setConnections ] = useState(dummyConnections)
  const maxConnections = 3

  //This function calculates random indices to display under "Reunions" - can probably remove
  // Probably best to have a carousel to display them, but wanted a way to display only a few
  // on chapter page so I selected indices of reunions randomly
  const randIndices = (max, arrLength) => {
    const calcRand = (length) => Math.floor(Math.random() * length)

    const indices = []
    for (let i = 0; i < max && i < connections.length; i++){
      let rand = calcRand(arrLength)
      while (indices.includes(rand)){
        rand = calcRand(arrLength)
      }
      indices.push(rand)
    }
    return indices
  }


  const displayIndices = randIndices(maxConnections, connections.length)


  return (
    <div className="outer-cards-container">
      <h2>Reconnections</h2>
      <div className="cards-container">
        {connections
            .filter((el, i) => displayIndices.includes(i))
            .map(el => <ReunionModal connection={el} />)
        }
      </div>
    </div>
  )
} 


export default Connections