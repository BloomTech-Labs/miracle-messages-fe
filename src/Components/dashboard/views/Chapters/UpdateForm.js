import React from "react";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import {
  Button,
  Input,
  Label,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Card,
} from "reactstrap";

import { connect } from "react-redux";
import { getData } from "../../../../Actions/index";
import { useToasts } from "react-toast-notifications";

class UpdateForm extends React.Component {
  state = {
    chapter: this.props.chapter,
    current_chapter_imgUrl: this.props.chapter.chapter_img_url,
    current_reunion_imgUrl: this.props.chapter.reunion_img_url,
    newChapterImg: null,
    newReunionImg: null,
  };

  updateChapter = (e) => {
    e.preventDefault();

    const id = this.props.chapter.id;
    const fd = new FormData();
    if (this.state.newChapterImg != null) {
      fd.append("chapter_img", this.state.newChapterImg);
    }
    if (this.state.newReunionImg != null) {
      fd.append("reunion_img", this.state.newReunionImg);
    }
    fd.append("title", this.state.chapter.title);
    fd.append("established_date", this.state.chapter.established_date);
    fd.append("description", this.state.chapter.description);
    fd.append("city", this.state.chapter.city);
    fd.append("state", this.state.chapter.state);
    fd.append("email", this.state.chapter.email);
    fd.append("memberCount", this.state.chapter.memberCount);
    fd.append("msg_delivered", this.state.chapter.msg_delivered);
    fd.append("msg_recorded", this.state.chapter.msg_recorded);
    fd.append("numreunions", this.state.chapter.numreunions);
    fd.append("facebook", this.state.chapter.facebook);
    fd.append("story", this.state.chapter.story);
    fd.append("leaders", this.state.chapter.leaders);

    axiosWithAuth()
      .put(`/api/chapter/${id}`, fd)
      .then((res) => {
        this.props.toggleEdit();
        this.props.getData();
        axiosWithAuth()
          .get(`api/chapter/${id}`)
          .then((res) => {
            this.props.setLeaderChapter(res.data);
            this.props.showEditToast();
          });
      })
      .catch((err) => console.log(err));
  };

  changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    this.setState((prevState) => ({
      chapter: {
        ...prevState.chapter,
        [ev.target.name]: value,
      },
    }));
  };

  handleImg = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <Label>Title</Label>
        <Input
          value={this.state.chapter.title}
          onChange={this.changeHandler}
          name="title"
          placeholder="Title"
        />
        <br />
        <div className="dropdown-divider" />
        <Label>Description</Label>
        <Input
          value={this.state.chapter.description}
          onChange={this.changeHandler}
          name="description"
          type="textarea"
          placeholder="Description"
          rows="5"
        />
        <br />
        <div className="dropdown-divider" />
        <Label>Chapter Leader</Label>
        <Input
          value={this.state.chapter.leaders}
          onChange={this.changeHandler}
          name="Chapter Leader"
          type="textarea"
          placeholder="Name"
        />
                <br />
        <div className="dropdown-divider" />
        <Label>Email</Label>
        <Input
          value={this.state.chapter.email}
          onChange={this.changeHandler}
          name="Email"
          type="textarea"
          placeholder="Email"
        />
        <br />
        <Card>
          <CardImg src={this.state.current_chapter_imgUrl} />
          <CardImgOverlay>
            <CardTitle
              style={{
                fontSize: "2.2rem",
                textAlign: "center",
                textShadow:
                  "-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white",
              }}
            ></CardTitle>
          </CardImgOverlay>
        </Card>
        <Label>Chapter Image</Label>
        <Input onChange={this.handleImg} name="newChapterImg" type="file" />
        <br />
        <Label>Established Date</Label>
        <Input
          value={this.state.chapter.established_date}
          onChange={this.changeHandler}
          name="established_date"
          type="date"
          placeholder={Date.now()}
        />
        <Label>City </Label>
        <Input
          value={this.state.chapter.city}
          onChange={this.changeHandler}
          name="city"
          placeholder="City"
        />
        <Label>State</Label>
        <Input
          value={this.state.chapter.state}
          onChange={this.changeHandler}
          name="state"
          placeholder="State"
        />
        <div className="dropdown-divider" />
        <br />
        <Label>Messages Delivered</Label>
        <Input
          value={this.state.chapter.msg_delivered}
          onChange={this.changeHandler}
          name="msg_delivered"
          type="number"
        />
        <br />
        <Label>Messages Recorded</Label>
        <Input
          value={this.state.chapter.msg_recorded}
          onChange={this.changeHandler}
          name="msg_recorded"
          type="number"
        />
        <br />
        <Label>Chapter Facebook Page</Label>
        <Input
          value={this.state.chapter.facebook}
          onChange={this.changeHandler}
          name="facebook"
          placeholder="facebook link here"
        />
        <br />
        <Card>
          <CardImg src={this.state.current_reunion_imgUrl} />
          <CardImgOverlay>
            <CardTitle
              style={{
                fontSize: "2.2rem",
                textAlign: "center",
                textShadow:
                  "-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white",
              }}
            ></CardTitle>
          </CardImgOverlay>
        </Card>
        <Label>Featured Story Image</Label>
        <Input onChange={this.handleImg} name="newReunionImg" type="file" />
        <Label>Featured Story</Label>
        <Input
          value={this.state.chapter.story}
          onChange={this.changeHandler}
          name="story"
          type="textarea"
          placeholder="Story"
          rows="5"
        />
        <br />
        <Button
          style={{ backgroundColor: "#212121" }}
          onClick={this.updateChapter}
        >
          Update
        </Button>
        {/* {console.log(this.props.chapter_data)} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapter_data: state.mapReducer.chapter_data,
  };
};

export default connect(mapStateToProps, { getData })(UpdateForm);
