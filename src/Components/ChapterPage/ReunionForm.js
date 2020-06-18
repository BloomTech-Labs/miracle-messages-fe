import React, { useState, useEffect } from "react";
import { TextField, Button} from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { makeStyles } from "@material-ui/core/styles"
import { states, cities } from "./constants"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { useParams } from "react-router-dom";




const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: "2%"
  },
  textField: {
    marginTop: "2%"
  },
  locationContainer: {
    margin: "2% 0",
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


const requiredInputs = {
  state: '',
  city: '',
  title: '',
  story: ''
}

export const ReunionForm = () => {
  const [ formValues, setFormValues ] = useState(requiredInputs)
  const [ reunionImg, setReunionImg ] = useState()
  const [ cityOptions, setCityOptions ] = useState()
  const { id } = useParams()
  const classes = useStyles()
  
  useEffect(() => {
    setCityOptions(cities[formValues.state])
  }, [formValues.state])

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData()
    form.append("reunion_img", reunionImg, reunionImg.name)
    Object.keys(formValues).forEach(el => {
      form.append(el, formValues[el])
    })

    axiosWithAuth()
      .post(`/api/chapter/${id}/reunions`, form)
      .then(res => {
        console.log(res)
      })
  }

  const handleChange = (e) => {
    if (e.target.name === "reunion_img"){
      const file = e.target.files[0]
      setReunionImg(file)
    } else {
      setFormValues({
        ...formValues, 
        [ e.target.name ] : e.target.value
      })
    }
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
              required
              label="Select a State" 
              variant="outlined" 
              />}
        />

      {cityOptions ?
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
          renderInput={(params) => 
            <TextField 
              {...params} 
              required
              label="Select a City" 
              variant="outlined" 
              />}
        /> : null}
      </div>

      <h2 className={classes.h2}>Reunion Information and Media</h2>
      <TextField
        required
        className={classes.textField}
        onChange={handleChange}
        label="Case Person's Name"
        inputProps={{
          name: "title",
          onChange: handleChange
        }}
        value={formValues.title}
        variant="outlined"
       />

      <TextField
        required
        multiline
        rows={5}
        inputProps={{
          name: "story",
          onChange: handleChange
        }}
        className={classes.textField}
        label="Reunion Details"
        value={formValues.story}
        variant="outlined"
       />

      <TextField
        required
        className={classes.textField}
        inputProps={{
          name: "reunion_img",
          onChange: handleChange
        }}
        label="Reunion Image"
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