import React from "react";

// import { Input, Label } from "reactstrap";
import "../../../Forms/VolunteerForm.scss";

class ChapterForm extends React.Component {
  render() {
    return (
      <form className="form">
        {/* {console.log(this.props)} */}
        <div className="formBox">
          <label>Title</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.title}
            onChange={this.props.change}
            name="title"
            placeholder="Title"
          />
        </div>

        <div className="formBox">
          <label>Establishment Date</label>
        </div>
        <div className="formBox">
          <input
            onChange={this.props.change}
            name="established_date"
            value={this.props.chapter.established_date}
            placeholder="Establishment Date"
          />
        </div>

        <div className="formBox">
          <label>Description</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.description}
            onChange={this.props.change}
            name="description"
            type="textarea"
            placeholder="Description"
            rows="5"
          />
        </div>

        <div className="formBox">
          <label>Chapter Image</label>
        </div>
        <div className="formBox">
          <input
            onChange={this.props.handleImg}
            name="chapter_img"
            type="file"
          />
        </div>

        <div className="formBox">
          <label>City</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.city}
            onChange={this.props.change}
            name="city"
            placeholder="City"
          />
        </div>

        <div className="formBox">
          <label>State</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.state}
            onChange={this.props.change}
            name="state"
            placeholder="State"
          />
        </div>

        <div className="formBox">
          <label>Latitude</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.latitude}
            onChange={this.props.change}
            name="latitude"
            placeholder="Latitude"
          />
        </div>

        <div className="formBox">
          <label>Longitude</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.longitude}
            onChange={this.props.change}
            name="longitude"
            placeholder="Longitude"
          />
        </div>

        <div className="formBox">
          <label>Contact Email</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.email}
            onChange={this.props.change}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="formBox">
          <label>Number of Volunteers</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.numvolunteers}
            onChange={this.props.change}
            name="numvolunteers"
            placeholder="Volunteers"
          />
        </div>

        <div className="formBox">
          <label>Number of Delivered Messages</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.msg_delivered}
            onChange={this.props.change}
            name="msg_delivered"
            placeholder="Delivered Messages"
          />
        </div>

        <div className="formBox">
          <label>Number of Recorded Messages</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.msg_recorded}
            onChange={this.props.change}
            name="msg_recorded"
            placeholder="Recorded Messages"
          />
        </div>

        <div className="formBox">
          <label>Number of Reunions</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.numreunions}
            onChange={this.props.change}
            name="numreunions"
            placeholder="Reunions"
          />
        </div>

        <div className="formBox">
          <label>Featured Story Image</label>
        </div>
        <div className="formBox">
          <input
            onChange={this.props.handleImg}
            name="reunion_img"
            type="file"
          />
        </div>

        <div className="formBox">
          <label>Featured Story</label>
        </div>
        <div className="formBox">
          <input
            value={this.props.chapter.story}
            onChange={this.props.change}
            name="story"
            type="textarea"
            placeholder="Story"
            rows="5"
          />
        </div>
      </form>
    );
  }
}

export default ChapterForm;
