import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Table,
} from "reactstrap";

import "./Chapter.scss";
import UpdateFrom from "./UpdateForm";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const Chapter = (props) => {
  /*   const { admin, chapterLeaders, volunteer } = useUserGroups();
   */
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const history = useHistory();
  const [chevOpen, setChevOpen] = useState(false);

  const toggleChev = () => {
    setChevOpen(!chevOpen);
  };

  const toggleDeleteModal = () => {
    setModal((modal) => !modal);
  };

  const toggleEdit = () => {
    setModalEdit((modalEdit) => !modalEdit);
  };

  const deleteChapt = () => {
    props.deleteChapter(props.info.id);
    // toggle();
    history.push("/admin/chapters");
  };

  return (
    <>
      <Table id="chapter-tbl" hover>
        <tbody>
          <tr
            onClick={() => {
              document
                .querySelector(`.toggle-${props.info.id}`)
                .classList.toggle("open-box");
              toggleChev();
            }}
          >
            <th scope="row">{props.info.city}</th>
            <td>{props.info.state}</td>

            <td>{props.info.volunteers.length}</td>

            <td>
              {props.info.leaders.length > 0
                ? props.info.leaders[0].name
                : "Open"}
            </td>
            <th>{!chevOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</th>
          </tr>
        </tbody>
      </Table>
      <div className={`toggle-box toggle-${props.info.id}`}>
        <div className="chapt-pic-con">
          <div className="title-edit">
            <h4>{props.info.title}</h4>
            <div className="icons">
              <div className="icon-inner" onClick={toggleEdit}>
                <EditIcon />
                <p className="edit-label">Edit</p>
              </div>
              <div className="icon-inner" onClick={toggleDeleteModal}>
                <DeleteIcon />
                <p className="delete-label">Delete</p>
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
                <UpdateFrom toggleEdit={toggleEdit} chapter={props.info} />
              </ModalBody>
            </Modal>
            <Modal
              isOpen={modal}
              toggle={toggleDeleteModal}
              className={props.className}
            >
              <ModalHeader toggle={toggleDeleteModal}>
                Delete Chapter
              </ModalHeader>
              <ModalBody>
                Are you sure you want to permanently delete this Chapter?
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={deleteChapt}>
                  Delete
                </Button>{" "}
                <Button color="secondary" onClick={toggleDeleteModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <img src={props.info.chapter_img_url} alt="chapter view" />
        </div>
        <div className="chapt-info-con">
          <p>
            <span>Description: </span>
            {props.info.description}
          </p>
          <p>
            <span>Contact: </span>
            {props.info.email}
          </p>
        </div>
        <hr></hr>
        <h4>Volunteers</h4>

        <div className="members">
          {props.info.volunteers.length > 0 ? (
            props.info.volunteers.map((v) => (
              <div className="member-details">
                <img src={v.profile_img_url} alt="volunteer" />
                <div className="volunteer-info">
                  <p className="volunteer-name">{v.name}</p>
                  <p className="volunteer-email">{v.email}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="not-available">No Members Yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Chapter;

//   <Button
//   >
//     <Link style={{ color: "white",}} to={`/admin/chapters/${props.info.id}`}>
//       Chapter Info
//     </Link>
//   </Button>
