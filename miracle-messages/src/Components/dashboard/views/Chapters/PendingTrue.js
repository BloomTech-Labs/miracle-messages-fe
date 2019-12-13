import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Input,
  Label,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Card
} from "reactstrap";

import { connect } from "react-redux";
import { getData } from "../../../../Actions/index";

const PendingTrue = props => {
  const [approve, setApprove] = useState({
    approved: false
  });

  const id = props.chapter.id;

  const changeHandler = event => {
    setApprove({ ...approve, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/chapter/${id}`, approve)
      .then(res => {
        res.status(200).json(console.log(res));
      })
      .catch(err => console.log(err));
  };
  // state = {
  //   chapter: this.props.chapter
  // };

  // updateChapter = e => {
  //   e.preventDefault();

  //   const id = this.props.chapter.id;
  //   const fd = new FormData();

  //   fd.append("approved", this.state.chapter.approved);

  //   this.setState(prevState => ({
  //     chapter: {
  //       ...prevState.chapter,
  //       [prevState.chapter.approved]: true
  //     }
  //   }));

  //   axios
  //     .put(`http://localhost:5000/api/chapter/${id}`, fd)
  //     .then(res => {
  //       this.props.toggleEdit();
  //       this.props.getData();
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <div onSubmit={submitForm}>
      <Button
        color="info"
        name="approved"
        value={approve.approved === true}
        onClick={changeHandler}
      >
        Appprove New Chapter
      </Button>
      {/* {console.log(this.props.chapter_data)} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data
  };
};

export default PendingTrue;
