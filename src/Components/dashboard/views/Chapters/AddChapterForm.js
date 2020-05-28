import React, { useState } from "react"
import {axiosWithAuth} from "../../../../utils/axiosWithAuth";
import {
  Button,
  Input,
  Label,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Card
} from "reactstrap"


const AddChapterForm = props => {
    const [chapter, setChapter ] = useState({
        current_chapter_imgUrl: null,
        current_reunion_imgUrl: null,
        newChapterImg: null,
        newReunionImg: null
      })

  const addDaChaptaaa = e => {
    e.preventDefault()

    const id = chapter.id
    const fd = new FormData()
    if (chapter.newChapterImg != null) {
      fd.append("chapter_img", chapter.newChapterImg)
    }
    if (chapter.newReunionImg != null) {
      fd.append("reunion_img", chapter.newReunionImg)
    }
    fd.append("title", chapter.title)
    fd.append("established_date", chapter.established_date)
    fd.append("description", chapter.description)
    fd.append("city", chapter.city)
    fd.append("state", chapter.state)
    fd.append("msg_delivered", chapter.msg_delivered)
    fd.append("msg_recorded", chapter.msg_recorded)
    fd.append("facebook", chapter.facebook)
    fd.append("story", chapter.story)

    // axiosWithAuth()
    //   .post(`/api/chapter/`, fd)
    //   .then(res => {
    //     props.toggle()
    //     console.log(res)
    //     console.log(res)
    //   })
    //   .catch(err => {
    //       console.log(err);
    //       console.log(err.response);
    //   })

    
  }

  const changeHandler = ev => {
    ev.persist()
    let value = ev.target.value

    props.setChapter({
        ...props.chapter,
        [ev.target.name]: value
    })
  }

  const handleImg = e => {
    props.setChapter({
        ...props.chapter,
        [e.target.name]: e.target.files[0]
    })
  }




    return (
      <div>
        <Label>Title</Label>
        <Input
          value={props.chapter.title}
          onChange={changeHandler}
          name="title"
          placeholder="Title"
        />
        <br />
        <div className="dropdown-divider" />
        <Label>Description</Label>
        <Input
          value={props.chapter.description}
          onChange={changeHandler}
          name="description"
          type="textarea"
          placeholder="Description"
          rows="5"
        />
        <br />
        <Label>Chapter Image</Label>
        <Input onChange={handleImg} name="newChapterImg" type="file" />
        <br />
        <Label>Established Date</Label>
        <Input
          value={props.chapter.established_date}
          onChange={changeHandler}
          name="established_date"
          type="date"
          placeholder={Date.now()}
        />
        <Label>City </Label>
        <Input
          value={props.chapter.city}
          onChange={changeHandler}
          name="city"
          placeholder="City"
        />
        <Label>State</Label>
        <Input
          value={props.chapter.state}
          onChange={changeHandler}
          name="state"
          placeholder="State"
        />
        <div className="dropdown-divider" />
        <Label>Contact Email</Label>
        <Input
          value={props.chapter.email}
          onChange={changeHandler}
          name="email"
          type="email"
          placeholder="Email"
        />
        <br />
        <Label>Messages Delivered</Label>
        <Input
          value={props.chapter.msg_delivered}
          onChange={changeHandler}
          name="msg_delivered"
          type="number"
        />
        <br />
        <Label>Messages Recorded</Label>
        <Input
          value={props.chapter.msg_recorded}
          onChange={changeHandler}
          name="msg_recorded"
          type="number"
        />
        <br />
        <Label>Chapter Facebook Page</Label>
        <Input
          value={props.chapter.facebook}
          onChange={changeHandler}
          name="facebook"
          placeholder="facebook link here"
        />
        <br />
        <Input onChange={handleImg} name="newReunionImg" type="file" />
        <Label>Featured Story</Label>
        <Input
          value={props.chapter.story}
          onChange={changeHandler}
          name="story"
          type="textarea"
          placeholder="Story"
          rows="5"
        />
        <br />

      </div>
    )
  }

export default AddChapterForm;
