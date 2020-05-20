import React, { useState } from "react"

const ReunionDetails = ({ lDescription, sDescription }) => {
  return (
    <>
      <h2>{sDescription}</h2>
      <p>
        {lDescription}
      </p>
    </>
  )
}

export default ReunionDetails