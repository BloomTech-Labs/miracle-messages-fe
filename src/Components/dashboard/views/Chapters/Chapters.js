import React, { useState, useEffect } from "react";
import axios from "axios";

import Chapter from "./Chapter";

import { connect } from "react-redux";
import { getData, getSponsor } from "../../../../Actions/index";
import { useOktaAuth } from '@okta/okta-react';

import SponsorForm from "../Sponsors/SponsorForm";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { set } from "react-ga";


const Chapters = props => {
  const [ newChapter, setNewChapter ] = useState({
    name: "",
    site_url: "",
    icon_url: null,
    category: ""
  });
  const [ modal, setModal ] = useState(false)
  
  
  const deleteChapter = id => {
    axios
      .delete(`https://miracle-messages-dev.herokuapp.com/api/chapter/${id}`)
      .then(res => {
        props.getData();
      })
      .catch(err => console.log(err));
  }
  
  useEffect(() => {
    props.getData();
  }, [])





  // my code starts here

  const toggle = () => {
    setModal(!modal)
  };

  const addSponsor = e => {
    e.preventDefault();
    console.log(newChapter.icon_url);
    const fd = new FormData();
    fd.append("partner_icon", newChapter.icon_url);
    fd.append("name", newChapter.name);
    fd.append("site_url", newChapter.site_url);
    fd.append("category", newChapter.category);
    console.log(fd.getAll("partner_icon"));
    axios
      .post("https://miracle-messages-dev.herokuapp.com/api/partner", fd)
      .then(res => {
        console.log(res);

        toggle();
        getSponsor();
      })
      .catch(err => console.log(err));

    // this.setState({
    //   sponsor: {
    //     name: "",
    //     site_url: "",
    //     icon_url: null,
    //     category: ""
    //   }
    // });
  };

  const handleInputChange = e => {
    setNewChapter({
      ...newChapter,
      [e.target.name]: e.target.value
    })
  };
  const handleImg = e => {
    setNewChapter({
      ...newChapter,
      [e.target.name]: e.target.files[0]
    })
  };


  return (
    <div className="chapter-felx">
      {props.chapter_data.map(chapter => {
        if (chapter.approved === true) {
          return (
            <Chapter
              info={chapter}
              key={chapter.id}
              deleteChapter={deleteChapter}
            />
          )
        }
      })}
      <Button className="addBtn" onClick={toggle}>
          +
        </Button>
        <Modal
          isOpen={modal}
          toggle={toggle}
          // className={className}
          backdrop="static"
        >
          <ModalHeader toggle={toggle}>Add Sponsor</ModalHeader>
          <ModalBody>
            <SponsorForm
              change={handleInputChange}
              sponsor={newChapter}
              handleImg={handleImg}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={addSponsor}>
              Add Sponsor
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    chapter_data: state.mapReducer.chapter_data
  }
};

export default connect(mapStateToProps, { getSponsor, getData })(Chapters);
