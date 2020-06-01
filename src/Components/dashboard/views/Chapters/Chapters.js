import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";

import Chapter from "./Chapter";
import "./Chapters.scss";

import { connect } from "react-redux";
import { getData, getSponsor } from "../../../../Actions/index";

import SponsorForm from "../Sponsors/SponsorForm";
import AdminSearchBar from "./AdminSearchBar";
import AddChapterForm from "./AddChapterForm";
import { useUserGroups } from "../../../../utils/customHooks/useUserGroups";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { set } from "react-ga";

const Chapters = (props) => {
  const { admin, chapterLeaders, volunteer } = useUserGroups();
  const [newChapter, setNewChapter] = useState({
    name: "",
    site_url: "",
    icon_url: null,
    category: "",
  });
  const [chapter, setChapter] = useState({
    current_chapter_imgUrl: null,
    current_reunion_imgUrl: null,
    newChapterImg: null,
    newReunionImg: null,
  });
  const [modal, setModal] = useState(false);

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
  }, []);

  const toggle = () => {
    setModal((modal) => !modal);
  };

  const addSponsor = (e) => {
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
  };

  const handleInputChange = (e) => {
    setNewChapter({
      ...newChapter,
      [e.target.name]: e.target.value,
    });
  };
  const handleImg = (e) => {
    setNewChapter({
      ...newChapter,
      [e.target.name]: e.target.files[0],
    });
  };

  const addChapter = (e) => {
    e.preventDefault();

    const id = chapter.id;
    const fd = new FormData();
    if (chapter.newChapterImg != null) {
      fd.append("chapter_img", chapter.newChapterImg);
    }
    if (chapter.newReunionImg != null) {
      fd.append("reunion_img", chapter.newReunionImg);
    }
    fd.append("title", chapter.title);
    fd.append("established_date", chapter.established_date);
    fd.append("description", chapter.description);
    fd.append("city", chapter.city);
    fd.append("state", chapter.state);
    fd.append("email", chapter.email);
    fd.append("numvolunteers", chapter.numvolunteers);
    fd.append("msg_delivered", chapter.msg_delivered);
    fd.append("msg_recorded", chapter.msg_recorded);
    fd.append("numreunions", chapter.numreunions);
    fd.append("facebook", chapter.facebook);
    fd.append("story", chapter.story);

    axiosWithAuth()
      .post(`/api/chapter/`, fd)
      .then((res) => {
        toggle();
        console.log(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <>
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
      <AdminSearchBar />
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

        {props.chapter_data.map((chapter) => {
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
        <Button
          style={{ backgroundColor: "#212121" }}
          className="addBtn"
          onClick={toggle}
        >
          +
        </Button>
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
              setChapter={setChapter}
              chapter={chapter}
            />
          </ModalBody>
          <ModalFooter>
            <Button style={{ backgroundColor: "#212121" }} onClick={addChapter}>
              Add Chapter
            </Button>{" "}
            <Button style={{ backgroundColor: "#212121" }} onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chapter_data: state.mapReducer.chapter_data,
  };
};

export default connect(mapStateToProps, { getSponsor, getData })(Chapters);
