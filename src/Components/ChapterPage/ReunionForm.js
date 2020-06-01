import React, { useState, useEffect } from "react";
import { TextField, Button} from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles } from "@material-ui/core/styles"
import { states, cities } from "./constants"




const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    padding: "2%"
  },
  textField: {
    marginTop: "2%"
  },
  locationContainer: {
    margin: "2%",
    width: "100%",
    display: "flex",
  },
  locationInputs: {
    width: "45%",
    marginRight: "2%"
  },
  h2: {
    width: "100%",
    fontSize: "1.25rem"
  },
  submitButton: {
    marginTop: "2%"
  }
})


const initialState = {
  volunteersid: '',
  city: 'California',
  state: '',
  story: '',
  reunion_img: ''
}

export const ReunionForm = () => {
  const [ formValues, setFormValues ] = useState(initialState)
  const [ cityOptions, setCityOptions ] = useState([])
  
  const classes = useStyles()
  
  useEffect(() => {
    setCityOptions(cities[formValues.state])
    console.log(cityOptions)
  }, [formValues.state])

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues, 
      [ e.target.name ] : e.target.value
    })

    console.log(formValues)
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2 className={classes.h2}>Location</h2>
      <div className={classes.locationContainer}>
        <Autocomplete
          className={classes.locationInputs}
          id="state"
          inputValue={formValues.state}
          onInputChange={(e, value) => {
            setFormValues({ 
              ...formValues, 
              state: value
            })
          }}
          options={states}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => 
            <TextField 
              {...params}
              label="Select a State" 
              variant="outlined" 
              />}
        />

      {formValues.state &&
        <Autocomplete
          className={classes.locationInputs}
          id="city"
          options={cityOptions}
          inputValue={formValues.city}
          onInputChange={(e, value) => {
            setFormValues({ 
              ...formValues, 
              city: value
            })
          }}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} label="Select a City" variant="outlined" />}
        />}
      </div>

      <h2 className={classes.h2}>Reunion Information and Media</h2>
      <TextField
        required
        className={classes.textField}
        onChange={handleChange}
        label="Title of Submission"
        value={formValues.title}
        variant="outlined"
       />

      <TextField
        required
        multiline
        rows={5}
        className={classes.textField}
        onChange={handleChange}
        label="Reunion Details"
        value={formValues.story}
        variant="outlined"
       />

      <TextField
        required
        className={classes.textField}
        onChange={handleChange}
        label="Reunion Image"
        value={formValues.reunion_img}
        variant="outlined"
        type="file"
        InputLabelProps={{ shrink: true}}
       />

      <TextField
        className={classes.textField}
        onChange={handleChange}
        label="Link to Reunion Video"
        value={formValues.link_to_media}
        variant="outlined"
       />

       <Button 
          type="submit"
          variant="contained"
          className={classes.submitButton}
        >
          Submit Reunion
        </Button>
    </form>
  )
}