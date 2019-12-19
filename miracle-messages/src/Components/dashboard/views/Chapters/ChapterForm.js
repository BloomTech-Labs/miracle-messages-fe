// import React from "react"
// import { Button } from "reactstrap"
// import "../../../Forms/VolunteerForm.scss"

// class ChapterForm extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <strong className="main-bold">
//           <h2>Create a Chapter Request</h2>
//         </strong>
//         <form className="form">
//           <section className="input-wrapper">
//             <div className="formBox">
//               <label>Title</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.title}
//                 onChange={this.props.change}
//                 name="title"
//               />
//             </div>

//             <div className="formBox">
//               <label>Establishment Date</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 onChange={this.props.change}
//                 name="established_date"
//                 value={this.props.chapter.established_date}
//               />
//             </div>

//             <div className="formBox">
//               <label>Description</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.description}
//                 onChange={this.props.change}
//                 name="description"
//                 type="textarea"
//                 rows="5"
//               />
//             </div>

//             <div className="formBox">
//               <label>Chapter Image</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="image-input"
//                 onChange={this.props.handleImg}
//                 name="chapter_img"
//                 type="file"
//               />
//             </div>

//             <div className="formBox">
//               <label>City</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.city}
//                 onChange={this.props.change}
//                 name="city"
//               />
//             </div>

//             <div className="formBox">
//               <label>State</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.state}
//                 onChange={this.props.change}
//                 name="state"
//               />
//             </div>

//             <div className="formBox">
//               <label>Latitude</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.latitude}
//                 onChange={this.props.change}
//                 name="latitude"
//               />
//             </div>

//             <div className="formBox">
//               <label>Longitude</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.longitude}
//                 onChange={this.props.change}
//                 name="longitude"
//               />
//             </div>

//             <div className="formBox">
//               <label>Contact Email</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.email}
//                 onChange={this.props.change}
//                 name="email"
//                 type="email"
//               />
//             </div>

//             <div className="formBox">
//               <label>Number of Volunteers</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.numvolunteers}
//                 onChange={this.props.change}
//                 name="numvolunteers"
//               />
//             </div>

//             <div className="formBox">
//               <label>Number of Delivered Messages</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.msg_delivered}
//                 onChange={this.props.change}
//                 name="msg_delivered"
//               />
//             </div>

//             <div className="formBox">
//               <label>Number of Recorded Messages</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.msg_recorded}
//                 onChange={this.props.change}
//                 name="msg_recorded"
//               />
//             </div>

//             <div className="formBox">
//               <label>Number of Reunions</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="input"
//                 value={this.props.chapter.numreunions}
//                 onChange={this.props.change}
//                 name="numreunions"
//               />
//             </div>

//             <div className="formBox">
//               <label>Featured Story Image</label>
//             </div>
//             <div className="formBox">
//               <input
//                 className="image-input"
//                 onChange={this.props.handleImg}
//                 name="reunion_img"
//                 type="file"
//               />
//             </div>

//             <div className="formBox">
//               <label>Featured Story</label>
//             </div>
//             <div className="formBox">
//               <textarea
//                 className="textarea"
//                 value={this.props.chapter.story}
//                 onChange={this.props.change}
//                 name="story"
//                 type="text"
//                 placeholder="Everybody has a story to tell, and we would love to hear yours!"
//                 rows="5"
//               />
//             </div>
//           </section>
//           <Button
//             style={{
//               height: "45px",
//               width: "300px",
//               backgroundColor: "#5cbe80",
//               fontFamily: "Open Sans",
//               fontSize: "24px",
//               color: "#ffffff",
//               letterSpacing: "0.9px",
//               textAlign: "center",
//               margin: "35px 0 100px 0",
//               paddingBottom: "30px"
//             }}
//             color="success"
//             onClick={this.props.addChapter}
//           >
//             Send Chapter Request
//           </Button>
//         </form>
//       </div>
//     )
//   }
// }

// export default ChapterForm

import React from "react";
import { Button } from "reactstrap";
import "../../../Forms/VolunteerForm.scss";

class ChapterForm extends React.Component {
  render() {
    return (
      <div className="main">
        <strong className="main-bold">
          <h2>Create a Chapter Request</h2>
        </strong>

        <form className="chapter-form">
          {/* PLEASE DELETE THIS DIV AFTER SYNCING STATE/CITY TO AUTO FILL AND REPLACE LAT/LONG FOR THE FORM */}
          <div className="chapter-div">
            <h6>
              ***please use this link to get the desired location for intended
              chapter***
            </h6>
            <a href="https://www.latlong.net/" target="_blank">
              Find your intended location here
            </a>
          </div>
          {/* PLEASE DELETE THIS DIV AFTER SYNCING STATE/CITY TO AUTO FILL AND REPLACE LAT/LONG FOR THE FORM */}
          <section className="input-wrapper">
            <div className="chapter-div">
              <div className="formBox">
                <label>*Title of Chapter</label>
              </div>

              <div className="formBox">
                <input
                  className="input"
                  value={this.props.chapter.title}
                  onChange={this.props.change}
                  name="title"
                  placeholder="Please use name of City in title."
                />
              </div>

              <div className="formBox">
                <label>*Contact Email</label>
              </div>
              <div className="formBox">
                <input
                  className="input"
                  value={this.props.chapter.email}
                  onChange={this.props.change}
                  name="email"
                  type="email"
                  placeholder="So we may get in contact with you."
                />
              </div>

              <div className="formBox">
                <label>*Latitude</label>
              </div>
              <div className="formBox">
                <input
                  className="input"
                  value={this.props.chapter.latitude}
                  onChange={this.props.change}
                  name="latitude"
                />
              </div>
            </div>

            <div className="chapter-div">
              <div className="formBox">
                <label>*City</label>
              </div>
              <div className="formBox">
                <input
                  className="input"
                  value={this.props.chapter.city}
                  onChange={this.props.change}
                  name="city"
                />
              </div>

              <div className="formBox">
                <label>*State</label>
              </div>
              <div className="formBox">
                <input
                  className="input"
                  value={this.props.chapter.state}
                  onChange={this.props.change}
                  name="state"
                />
              </div>

              <div className="formBox">
                <label>*Longitude</label>
              </div>
              <div className="formBox">
                <input
                  className="input"
                  value={this.props.chapter.longitude}
                  onChange={this.props.change}
                  name="longitude"
                />
              </div>
            </div>

            <div className="chapter-div chapter-div-bottom">
              <div className="formBox">
                <label className="labelV2">
                  *Please upload an image of you helping out someone in your
                  area along with this Chapter Request.* (May be used as the
                  main page image for this requested chapter.)
                </label>
              </div>
              <div className="formBox">
                <input
                  className="image-input"
                  onChange={this.props.handleImg}
                  name="chapter_img"
                  type="file"
                />
              </div>

              <div className="formBox">
                <label className="labelV2">
                  *Give us some details and information about this chapter and
                  what your goals might be by partnering and outreaching with
                  Miracle Messages.*
                </label>
              </div>
              <div className="formBox">
                <textarea
                  className="textarea"
                  value={this.props.chapter.description}
                  onChange={this.props.change}
                  name="description"
                  type="text"
                  placeholder="Everybody has a story to tell, and we would love to hear yours!"
                  rows="5"
                />
              </div>
            </div>
          </section>
          <Button
            style={{
              height: "50px",
              width: "300px",
              backgroundColor: "#5cbe80",
              fontFamily: "Open Sans",
              fontSize: "24px",
              color: "#ffffff",
              letterSpacing: "0.9px",
              textAlign: "center",
              margin: "1rem auto",
              paddingBottom: "30px"
            }}
            color="success"
            onClick={this.props.addChapter}
          >
            Send Chapter Request
          </Button>
        </form>
      </div>
    );
  }
}

export default ChapterForm;
