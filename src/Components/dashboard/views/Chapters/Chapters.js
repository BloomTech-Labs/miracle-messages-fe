import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";

import Chapter from "./Chapter";
import UpdateFrom from "./UpdateForm";

import "./Chapters.scss";

import { connect } from "react-redux";
import { getData, getSponsor } from "../../../../Actions/index";
import { useToasts } from "react-toast-notifications";
import EditIcon from "@material-ui/icons/Edit";

//import SponsorForm from "../Sponsors/SponsorForm";
import AdminSearchBar from "./AdminSearchBar";
import AddChapterForm from "./AddChapterForm";
import { useOktaAuth } from "@okta/okta-react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

const Chapters = (props) => {
  const { addToast } = useToasts();

  const { authState } = useOktaAuth();

  const oktaInfo = JSON.parse(atob(authState.accessToken.split(".")[1]));

  const groups = oktaInfo.groups;

  const [newChapter, setNewChapter] = useState({
    title: "",
    description: "",
    requestedBy: "",
    latitude: "",
    longitude: "",
    city: "",
    state: "",
    msg_recorded: "",
    msg_delivered: "",
    established_date: "",
    email: "",
    facebook: "",
  });
  const [newChapterImg, setNewChapterImg] = useState();
  //add chapter modal in superAdmin view//
  const [modal, setModal] = useState(false);
  //edit chapter modal in Admin view//
  const [modalEdit, setModalEdit] = useState(false);
  const [leaderChapter, setLeaderChapter] = useState();
  const [searchArray, setSearchArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  console.log(newChapter);
  const deleteChapter = (id) => {
    axiosWithAuth()
      .delete(`/api/chapter/${id}`)
      .then(() => {
        props.getData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    props.getData();
    axiosWithAuth()
      .get(`api/user/`)
      .then((res) => {
        console.log("current user", res);
        if (!groups.includes("CEO") && groups.includes("Admins")) {
          axiosWithAuth()
            .get(`api/chapter/${res.data.leaderOf[0].chaptersid}`)
            .then((res) => {
              console.log(res);
              setLeaderChapter(res.data);
            });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //toggles add chapter modal for superAdmin view
  const toggle = () => {
    setModal((modal) => !modal);
  };
  //toggles edit chapter for regular Admin view
  const toggleEdit = () => {
    setModalEdit((modalEdit) => !modalEdit);
  };

  //code for incorperating sponsors//

  /*  const addSponsor = (e) => {
    e.preventDefault();
    console.log(newChapter.icon_url);
    const fd = new FormData();
    fd.append("partner_icon", newChapter.icon_url);
    fd.append("name", newChapter.name);
    fd.append("site_url", newChapter.site_url);
    fd.append("category", newChapter.category);
    console.log(fd.getAll("partner_icon"));
    axiosWithAuth()
      .post("/api/partner", fd)
      .then((res) => {
        console.log(res);

        toggle();
        getSponsor();
      })
      .catch((err) => console.log(err));
  }; */

  const showEditToast = () => {
    addToast("Chapter Successfully Updated", {
      appearance: "success",
      autoDismiss: true,
      autoDismissTimeout: "1500",
    });
  };

  const addChapter = (e) => {
    e.preventDefault();

    const addChapterFd = new FormData();
    if (newChapterImg) {
      addChapterFd.append("chapter_img", newChapterImg);
    }
    Object.keys(newChapter).forEach((a) => {
      if (newChapter[a] !== "") addChapterFd.append(a, newChapter[a]);
    });

    axiosWithAuth()
      .post(`/api/chapter/`, addChapterFd)
      .then((res) => {
        toggle();
        console.log(res);
        addToast("Chapter Successfully Added", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: "1500",
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        addToast("Error Adding Chapter", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: "1500",
        });
      });
  };

  return (
    <>
      <div className="analytics-title">
        {" "}
        <h2>This Week's Analytics</h2>
      </div>

      <div className="analytics">
        <div className="activity-analytics">
          <iframe
            width="100%"
            height="400px"
            seamless
            frameborder="0"
            scrolling="no"
            title="analytics-chart"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZ1coSLo_pmg64fqyvlXjp2miqrV2Ej-A9_GqOFW2973S-4dxPF8whQ3YN1CL9Yy0btW1Vnzsr4wV/pubchart?oid=1887857798&amp;format=interactive"
          ></iframe>
        </div>
        <div className="region-analytics">
          <iframe
            width="445.5"
            title="region-chart"
            height="334.125"
            seamless
            frameborder="0"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWZ1coSLo_pmg64fqyvlXjp2miqrV2Ej-A9_GqOFW2973S-4dxPF8whQ3YN1CL9Yy0btW1Vnzsr4wV/pubchart?oid=943953138&amp;format=interactive"
          ></iframe>
        </div>
      </div>
      {groups.includes("CEO") ? (
        <>
          <AdminSearchBar
            chapterData={props.chapter_data}
            setSearchArray={setSearchArray}
            searchArray={searchArray}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div className="chapter-felx">
            <Table
              id="chapter-table-header"
              hover
              style={{ fontSize: "15px", fontWeight: "bold", border: "none" }}
            >
              <thead>
                <tr className="no-border">
                  <th>Chapter</th>
                  <th>State</th>
                  <th className="members-count-th">Members</th>
                  <th>Leader</th>
                  <th></th>
                </tr>
              </thead>
            </Table>

            {searchArray.length === 0
              ? // eslint-disable-next-line array-callback-return
                props.chapter_data.map((chapter) => {
                  if (chapter.approved === true) {
                    return (
                      <Chapter
                        info={chapter}
                        key={chapter.id}
                        deleteChapter={deleteChapter}
                        setLeaderChapter={setLeaderChapter}
                        showEditToast={showEditToast}
                      />
                    );
                  }
                })
              : // eslint-disable-next-line array-callback-return
                searchArray.map((chapter) => {
                  if (chapter.approved === true) {
                    return (
                      <Chapter
                        info={chapter}
                        key={chapter.id}
                        deleteChapter={deleteChapter}
                        setLeaderChapter={setLeaderChapter}
                        showEditToast={showEditToast}
                      />
                    );
                  }
                })}
            <div className="add-btn-div">
              <Button
                style={{ backgroundColor: "#212121" }}
                className="addBtn"
                onClick={toggle}
                onMouseEnter={() => {
                  document.querySelector(".add-label").classList.add("show");
                }}
                onMouseLeave={() => {
                  document.querySelector(".add-label").classList.remove("show");
                }}
              >
                +
              </Button>
              <p className="add-label">Add Chapter</p>
            </div>
            {/* <Button className="addBtn" onClick={toggle}>
           +
         </Button> */}
            <Modal
              isOpen={modal}
              toggle={toggle}
              // className={className}
              backdrop="static"
            >
              <ModalHeader toggle={toggle}>Add Chapter</ModalHeader>
              <ModalBody>
                <AddChapterForm
                  toggle={toggle}
                  setNewChapter={setNewChapter}
                  setNewChapterImg={setNewChapterImg}
                  chapter={newChapter}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  style={{ backgroundColor: "#212121" }}
                  onClick={addChapter}
                >
                  Add Chapter
                </Button>{" "}
                <Button style={{ backgroundColor: "#212121" }} onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </>
      ) : (
        <>
          {leaderChapter && (
            <div className="chapter-con">
              <h1>Chapter Overview</h1>
              <div className="inner-con">
                <div className="head-div">
                  <h3>{leaderChapter.title}</h3>
                  <div className="icons">
                    <div className="icon-inner">
                      <EditIcon onClick={toggleEdit} />
                      <p className="edit-label">Edit</p>
                    </div>
                  </div>
                  <Modal
                    isOpen={modalEdit}
                    toggle={toggleEdit}
                    className={props.className}
                    backdrop="static"
                  >
                    <ModalHeader toggle={toggleEdit}>Edit Chapter</ModalHeader>
                    <ModalBody>
                      <UpdateFrom
                        toggleEdit={toggleEdit}
                        chapter={leaderChapter}
                        setLeaderChapter={setLeaderChapter}
                        showEditToast={showEditToast}
                      />
                    </ModalBody>
                  </Modal>
                </div>
                <p className="photo-title">Main Photo:</p>

                <img
                  className="chapt-photo"
                  src={leaderChapter.chapter_img_url}
                  alt="chapter"
                />
              </div>
              <div className="inner-con">
                <p>
                  <span className="p-start">Description:</span>{" "}
                  {leaderChapter.description}
                </p>
              </div>
              <div className="inner-con">
                <p>
                  <span className="p-start">State:</span> {leaderChapter.state}
                </p>
              </div>
              <div className="inner-con">
                <p>
                  <span className="p-start">City:</span> {leaderChapter.city}
                </p>
              </div>
              <div className="inner-con">
                <p>
                  <span className="p-start">Email:</span> {leaderChapter.email}
                </p>
              </div>
              <div className="volunteers-con">
                <h3>Volunteers</h3>
                {leaderChapter.volunteers.map((v) => (
                  <div className="volunteer-con-inner">
                    <img src={v.profile_img_url} alt="volunteer" />
                    <div className="volunteer-info">
                      <p>{v.name}</p>
                      <p>{v.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { chapterInfo, volunteers, reunions } = state.chapterInfoReducer;

  return {
    chapter_data: state.mapReducer.chapter_data,
    chapterInfo,
    volunteers,
    volunteerCount: volunteers.length,
    reunions,
    reunionCount: reunions.length,
  };
};

export default connect(mapStateToProps, { getSponsor, getData })(Chapters);
