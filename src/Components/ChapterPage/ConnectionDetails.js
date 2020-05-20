import React, { useState } from "react"

const ConnectionDetails = ({ lDescription, sDescription }) => {
  return (
    <>
      <h2>{sDescription}</h2>
      <p>
        {lDescription}
      </p>
    </>
  )
}

export default ConnectionDetails