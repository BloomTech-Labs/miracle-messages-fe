import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import CircularProgress from "@material-ui/core/CircularProgress";
import CreateIcon from "@material-ui/icons/Create";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./UserSettings.scss";

const UserSettings = () => {
  const [user, updateUser] = useState(null);
  const [changes, updateChanges] = useState(null);
  const [edit, setEdit] = useState(false);
  const [submitting, submitStatus] = useState(false);

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
                <div>{user.city}</div>
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
                <div>{user.state}</div>
              )}
            </div>
            <div className="settings-info">
              <div>Country</div>
              {edit ? (
                <TextField
                  id="country"
                  name="country"
                  onChange={handleChanges}
                  value={changes.country}
                />
              ) : (
                <div>{user.country}</div>
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

export default UserSettings;
