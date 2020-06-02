import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useUserGroups } from "../../../../utils/customHooks/useUserGroups";

import "./Chapter.scss";
import UpdateFrom from "./UpdateForm";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import EditIcon from "@material-ui/icons/Edit";
const Chapter = (props) => {
  /*   const { admin, chapterLeaders, volunteer } = useUserGroups();
   */ const [dropdownOpen, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const history = useHistory();
  const [chevOpen, setChevOpen] = useState(false);

  const toggleChev = () => {
    setChevOpen(!chevOpen);
  };

  const toggle = () => {
    setModal((modal) => !modal);
  };

  const toggleEdit = () => {
    setModalEdit((modalEdit) => !modalEdit);
  };

  const toggleDrop = () => setOpen(!dropdownOpen);

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

            <td>{props.info.memberCount}</td>

            <td>
              {props.info.leaders.length > 0
                ? props.info.leaders[0].name
                : "Open"}
            </td>
            <th>
              {!chevOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}

              {/* <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDrop}>
              <DropdownToggle
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  background: "none",
                  color: "black",
                  fontSize: "20px",
                  border: "none",
                }}
                caret
              ></DropdownToggle>
              <DropdownMenu style={{ width: "100vw" }}>
                <DropdownItem>
                  <Card
                    className="cardChapter"
                    style={{
                      maxWidth: "50%",
                      maxHeight: "50%",
                      minWidth: "350px",
                    }}
                  >
                    <CardImg
                      top
                      width="100%"
                      height="auto"
                      className="chapterImg"
                      src={props.info.chapter_img_url}
                    />
                  </Card>
                </DropdownItem>
                <DropdownItem>
                  {admin && (
                    <Button
                      style={{
                        marginRight: "10px",
                        position: "static",
                        backgroundColor: "#212121",
                        opacity: "0.95",
                      }}
                      onClick={toggleEdit}
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    style={{
                      marginRight: "10px",
                      position: "static",
                      backgroundColor: "#212121",
                      opacity: "0.95",
                    }}
                  >
                    <Link
                      style={{ color: "white" }}
                      to={`/admin/chapters/${props.info.id}`}
                    >
                      Chapter Info
                    </Link>
                  </Button>

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
                        chapter={props.info}
                      />
                    </ModalBody>
                  </Modal>

                  {admin && (
                    <Button
                      style={{
                        marginRight: "10px",
                        position: "static",
                        backgroundColor: "#212121",
                        opacity: "0.95",
                      }}
                      onClick={toggle}
                    >
                      Delete
                    </Button>
                  )}

                  <Modal
                    isOpen={modal}
                    toggle={toggle}
                    className={props.className}
                  >
                    <ModalHeader toggle={toggle}>Delete Chapter</ModalHeader>
                    <ModalBody>
                      Are you sure you want to permanently delete this Chapter?
                    </ModalBody>
                    <Button color="danger" onClick={deleteChapt}>
                      Delete
                    </Button>{" "}
                    <Button
                      style={{ backgroundColor: "#212121" }}
                      onClick={toggle}
                    >
                      Cancel
                    </Button>
                  </Modal>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown> */}
            </th>
          </tr>
        </tbody>
      </Table>
      <div className={`toggle-box toggle-${props.info.id}`}>
        <div className="chapt-pic-con">
          <div className="title-edit">
            <h4>{props.info.title}</h4>
            <EditIcon />
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

    // <Card
    //   className="cardChapter"
    //   style={{ maxWidth: "50%", maxHeight: "50%", minWidth: "250px" }}
    // >
    //   <CardImg
    //     top
    //     width="100%"
    //     height="auto"
    //     className="chapterImg"
    //     src={props.info.chapter_img_url}
    //   />

    // <CardBody>
    //   <CardTitle>{props.info.title}</CardTitle>
    //   <CardSubtitle>
    //     Volunteers: {props.info.numvolunteers}
    //   </CardSubtitle>
    //   <CardText>{props.info.description}</CardText>

    //   {/* only for admins */}
    //   {admin && <Button
    //     style={{
    //       marginRight: "10px",
    //       position: "static",
    //       marginBottom: "10px"
    //     }}
    //     onClick={toggleEdit}
    //   >
    //     Edit
    //   </Button>}

    //   <Button
    //     style={{
    //       marginRight: "10px",
    //       position: "static",
    //       marginBottom: "10px",
    //     }}
    //   >
    //     <Link style={{ color: "white",}} to={`/admin/chapters/${props.info.id}`}>
    //       Chapter Info
    //     </Link>
    //   </Button>

    //   <Modal
    //     isOpen={modalEdit}
    //     toggle={toggleEdit}
    //     className={props.className}
    //     backdrop="static"
    //   >
    //     <ModalHeader toggle={toggleEdit}>Edit Chapter</ModalHeader>
    //     <ModalBody>
    //       <UpdateFrom
    //         toggleEdit={toggleEdit}
    //         chapter={props.info}
    //       />
    //     </ModalBody>
    //   </Modal>
    //     {/* admin only option */}
    //   {admin && <Button
    //     style={{
    //       marginRight: "10px",
    //       position: "static",
    //       marginBottom: "10px"
    //     }}
    //     color="danger"
    //     onClick={toggle}
    //   >
    //     Delete
    //   </Button>}

    //   <Modal
    //     isOpen={modal}
    //     toggle={toggle}
    //     className={props.className}
    //   >
    //     <ModalHeader toggle={toggle}>Delete Chapter</ModalHeader>
    //     <ModalBody>
    //       Are you sure you want to permanently delete this Chapter?
    //     </ModalBody>
    //     <ModalFooter>
    //       <Button color="danger" onClick={deleteChapt}>
    //         Delete
    //       </Button>{" "}
    //       <Button color="secondary" onClick={toggle}>
    //         Cancel
    //       </Button>
    //     </ModalFooter>
    //   </Modal>
    // </CardBody>
    //       </Card>
    //     );
    // }
  );
};

export default Chapter;
