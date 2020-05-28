import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core"

//  volunteersid needs to be an oktaId
//


const initialState = {
  volunteersid: '',
  city: '',
  state: '',
  story: '',
  reunion_img: ''
}

const ReunionForm = () => {
  const [ formValues, setFormValues ] = useState(initialState)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Reunion City"
        value={formValues.city}
        variant="outlined"
       />
      <TextField
        label="Reunion City"
        value={formValues.city}
        variant="outlined"
       />
      <TextField
        label="Reunion City"
        value={formValues.city}
        variant="outlined"
       />
       <Button />
    </form>
  )
}