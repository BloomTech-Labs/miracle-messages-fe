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
const Chapter = (props) => {
  const { admin, chapterLeaders, volunteer } = useUserGroups();
  const [dropdownOpen, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const history = useHistory();

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
    <Table id="chapter-tbl" hover>
      <tbody>
        <tr>
          <th scope="row">{props.info.title}</th>
          <td>{props.info.state}</td>

          <td>{props.info.numvolunteers} 130</td>

          <td>{props.info.name} Sam A</td>
          <th>
            <ArrowDropDownIcon />
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
