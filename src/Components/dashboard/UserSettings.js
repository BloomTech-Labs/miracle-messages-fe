import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import CircularProgress from "@material-ui/core/CircularProgress";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { registerUser } from "../../Actions/index";
import { useLoggedInUser } from "../../Hooks/useLoggedInUser";

import "./UserSettings.scss";

const UserSettings = (props) => {
  const [user, updateUser] = useState(null);
  const [changes, updateChanges] = useState(null);
  const [edit, setEdit] = useState(false);
  const [submitting, submitStatus] = useState(false);
  const oktaUser = useLoggedInUser();

  const cancel = () => {
    updateChanges(user);
    setEdit(false);
  };

  const handleChanges = (event) => {
    updateChanges({
      ...changes,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    submitStatus(true);
    await axiosWithAuth()
      .put("/api/user/update", changes)
      .then(() => {
        updateUser(changes);
        setEdit(false);
        submitStatus(false);
      })
      .catch((error) => {
        console.log(error);
        submitStatus(false);
      });
  };

  const handleUpload = (e) => {
    const fd = new FormData();
    fd.append("profile_img", e.target.files[0]);
    submitStatus(true);
    axiosWithAuth()
      .put("/api/user/update", fd)
      .then(() => {
        axiosWithAuth()
          .get("api/user")
          .then((res) => {
            updateUser(res.data);
            updateChanges(res.data);
            props.registerUser(oktaUser);
          })
          .catch((error) => {
            console.log(error);
          });

        setEdit(false);
        submitStatus(false);
      })
      .catch((error) => {
        console.log(error);
        submitStatus(false);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("api/user")
      .then((res) => {
        updateUser(res.data);
        updateChanges(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-settings">
      {user ? (
        <div className="settings-container">
          <div className="settings-image-container">
            <img src={user.profile_img_url} alt={user.name} />
            <div className="upload-btn">
              <label
                htmlFor="file-upload"
                className={
                  submitting ? "custom-upload submitting" : "custom-upload"
                }
              >
                {submitting ? "Uploading" : "Upload Image"}
              </label>
              <input
                id="file-upload"
                onChange={handleUpload}
                name="newChapterImg"
                type="file"
              />
            </div>
          </div>
          <div className="settings-info-container">
            <h1>
              {user.name}
              {!edit && (
                <div className="icon-container" onClick={() => setEdit(!edit)}>
                  <CreateIcon
                    style={{ fontSize: "2rem", marginLeft: ".5rem" }}
                  />
                </div>
              )}
            </h1>
            <div className="settings-info">
              <div>City</div>
              {edit ? (
                <TextField
                  id="city"
                  name="city"
                  onChange={handleChanges}
                  value={changes.city}
                />
              ) : (
                <div className="settings-read-only">{user.city}</div>
              )}
            </div>
            <div className="settings-info">
              <div>State</div>
              {edit ? (
                <TextField
                  id="state"
                  name="state"
                  onChange={handleChanges}
                  value={changes.state}
                />
              ) : (
                <div className="settings-read-only">{user.state}</div>
              )}
            </div>
            <div className="settings-info">
              <div>Contact</div>
              {edit ? (
                <TextField
                  id="email"
                  name="email"
                  onChange={handleChanges}
                  value={changes.email}
                />
              ) : (
                <div className="settings-read-only">{user.email}</div>
              )}
            </div>
            <div className="settings-bio">
              <div>Bio</div>
              {edit ? (
                <TextField
                  id="bio"
                  multiline
                  name="bio"
                  rows={6}
                  variant="outlined"
                  onChange={handleChanges}
                  value={changes.bio}
                />
              ) : (
                <div>{user.bio}</div>
              )}
            </div>
            {submitting ? (
              <CircularProgress className={edit ? "" : "hidden"} />
            ) : (
              <div className={edit ? "edit-buttons" : "edit-buttons hidden"}>
                <Button
                  variant="contained"
                  className="save-btn"
                  onClick={handleSave}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  className="cancel-btn"
                  onClick={cancel}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userImg: state.loginReducer.userImg,
  };
};

export default connect(mapStateToProps, { registerUser })(UserSettings);
