import React from "react";
import MapboxAutocomplete from "react-mapbox-autocomplete";

import { Input, Label } from "reactstrap";

const AddChapterForm = (props) => {
  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    props.setNewChapter({
      ...props.chapter,
      [ev.target.name]: value,
    });
  };

  const _suggestionSelect = (result, lat, lng, text) => {
    console.log(result, lat, lng, text);
    props.setNewChapter({
      ...props.chapter,
      city: text,
      latitude: lat,
      longitude: lng,
    });
  };

  const handleImg = (e) => {
    props.setNewChapterImg(e.target.files[0]);
  };

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
      <div className="dropdown-divider" />
      <Label>Requested By</Label>
      <Input
        value={props.chapter.requestedBy}
        onChange={changeHandler}
        name="requestedBy"
        placeholder="Requested By"
      />
      <br />

      <br />
      <Label>Chapter Image</Label>
      <Input onChange={handleImg} name="chapter_img" type="file" />
      <br />
      <Label>Established Date</Label>
      <Input
        value={props.chapter.established_date}
        onChange={changeHandler}
        name="established_date"
        type="date"
        placeholder={Date.now()}
      />
      <br />
      <Label>Location </Label>
      <MapboxAutocomplete
        publicKey="pk.eyJ1Ijoia2tzbGlkZXIyMTMwIiwiYSI6ImNrYTkzZDF5dzA3bnUzMG1wMTN4andnam4ifQ.zJyId-UEsVM91Luz7TwR4A"
        inputClass="form-control search"
        onSuggestionSelect={_suggestionSelect}
        country="us"
        resetSearch={false}
      />
      <br />
      <Label>State</Label>
      <Input
        value={props.chapter.state}
        onChange={changeHandler}
        name="state"
        placeholder="State"
      />
      <div className="dropdown-divider" />
      <br />
      <Label>Email</Label>
      <Input
        value={props.chapter.email}
        onChange={changeHandler}
        name="email"
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
    </div>
  );
};

export default AddChapterForm;
