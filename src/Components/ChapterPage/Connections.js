import React, { useState } from "react";
import ConnectionModal from './ConnectionModal'
import './Connections.scss'

import { dummyConnections } from './dummies'

const Connections = () => {
  const [ connections, setConnections ] = useState(dummyConnections)
  const maxConnections = 3

  console.log(connections)

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
  console.log(displayIndices)


  return (
    <div className="outer-cards-container">
      <h2>Reconnections</h2>
      <div className="cards-container">
        {connections
            .filter((el, i) => displayIndices.includes(i))
            .map(el => <ConnectionModal connection={el} />)
        }
      </div>
    </div>
  )
} 


export default Connections