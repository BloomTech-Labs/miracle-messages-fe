import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";

import Chapter from "./Chapter";
import "./Chapters.scss";

import { connect } from "react-redux";
import { getData, getSponsor } from "../../../../Actions/index";
import { useToasts } from "react-toast-notifications";

//import SponsorForm from "../Sponsors/SponsorForm";
import AdminSearchBar from "./AdminSearchBar";
import AddChapterForm from "./AddChapterForm";
import { useUserGroups } from "../../../../utils/customHooks/useUserGroups";
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

  const { admin, chapterLeaders, volunteer } = useUserGroups();
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
  /*  const [chapter, setChapter] = useState({
    current_chapter_imgUrl: null,
    current_reunion_imgUrl: null,
    newChapterImg: null,
    newReunionImg: null,
  }); */
  const [modal, setModal] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  console.log(newChapter);
  const deleteChapter = (id) => {
    axiosWithAuth()
      .delete(`/api/chapter/${id}`)
      .then((res) => {
        props.getData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    props.getData();
    axiosWithAuth()
      .get(`api/user/`)
      .then((res) => console.log("current user", res));
  }, []);

  const toggle = () => {
    setModal((modal) => !modal);
  };

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
                  <th>Members</th>
                  <th>Leader</th>
                  <th></th>
                </tr>
              </thead>
            </Table>

            {searchArray.length === 0
              ? props.chapter_data.map((chapter) => {
                  if (chapter.approved === true) {
                    return (
                      <Chapter
                        info={chapter}
                        key={chapter.id}
                        deleteChapter={deleteChapter}
                      />
                    );
                  }
                })
              : searchArray.map((chapter) => {
                  if (chapter.approved === true) {
                    return (
                      <Chapter
                        info={chapter}
                        key={chapter.id}
                        deleteChapter={deleteChapter}
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
        <></>
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
