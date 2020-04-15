import React, { useState } from "react"
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";

const PendingTrue = props => {
  const [approved, setApprove] = useState({
    [props.chapter.approved]: false
  })

  const id = props.chapter.id

  const changeHandler = () => {
    setApprove((props.chapter.approved = true))
  }

  const submitForm = () => {
    axiosWithAuth()
      .put(`/api/chapter/${id}`, {
        approved
      })
      .then(res => {
        res.status(200).json(console.log(res))
      })
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={submitForm}>
      <button color="info" name="approved" onClick={changeHandler}>
        Appprove New Chapter
      </button>
    </form>
  )
}

export default PendingTrue
