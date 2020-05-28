import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table
} from "reactstrap";
import { useUserGroups } from '../../../../utils/customHooks/useUserGroups';

import UpdateFrom from "./UpdateForm";
import { PlayCircleFilledWhite } from "@material-ui/icons";

const Chapter = props => {
  const { admin, chapterLeaders, volunteer } = useUserGroups();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const history = useHistory();

  const toggle = () => {
    setModal(modal => !modal);
  };

  const toggleEdit = () => {
    setModalEdit(modalEdit => !modalEdit);
  };

  const deleteChapt = () => {
    props.deleteChapter(props.info.id);
    // toggle();
    history.push('/admin/chapters')
  };

    return (
      <Table hover>
      <tbody>
        <tr>
          <th scope="row">{props.info.title}</th>
          <td>{props.info.state}</td>
          <td>{props.info.numvolunteers}</td>
          <td>{props.info.name}</td>
        </tr>
      </tbody>
    </Table>
    

//       <Card
//         className="cardChapter"
//         style={{ maxWidth: "50%", maxHeight: "50%", minWidth: "250px" }}
//       >
//         <CardImg
//           top
//           width="100%"
//           height="auto"
//           className="chapterImg"
//           src={props.info.chapter_img_url}
//         />

//         <CardBody>
//           <CardTitle>{props.info.title}</CardTitle>
//           <CardSubtitle>
//             Volunteers: {props.info.numvolunteers}
//           </CardSubtitle>
//           <CardText>{props.info.description}</CardText>
          
//           {/* only for admins */}
//           {admin && <Button
//             style={{
//               marginRight: "10px",
//               position: "static",
//               marginBottom: "10px"
//             }}
//             onClick={toggleEdit}
//           >
//             Edit
//           </Button>}

//           <Button
//             style={{
//               marginRight: "10px",
//               position: "static",
//               marginBottom: "10px",
//             }}
//           >
//             <Link style={{ color: "white",}} to={`/admin/chapters/${props.info.id}`}>
//               Chapter Info
//             </Link>
//           </Button>

//           <Modal
//             isOpen={modalEdit}
//             toggle={toggleEdit}
//             className={props.className}
//             backdrop="static"
//           >
//             <ModalHeader toggle={toggleEdit}>Edit Chapter</ModalHeader>
//             <ModalBody>
//               <UpdateFrom
//                 toggleEdit={toggleEdit}
//                 chapter={props.info}
//               />
//             </ModalBody>
//           </Modal>
//             {/* admin only option */}
//           {admin && <Button
//             style={{
//               marginRight: "10px",
//               position: "static",
//               marginBottom: "10px"
//             }}
//             color="danger"
//             onClick={toggle}
//           >
//             Delete
//           </Button>}

//           <Modal
//             isOpen={modal}
//             toggle={toggle}
//             className={props.className}
//           >
//             <ModalHeader toggle={toggle}>Delete Chapter</ModalHeader>
//             <ModalBody>
//               Are you sure you want to permanently delete this Chapter?
//             </ModalBody>
//             <ModalFooter>
//               <Button color="danger" onClick={deleteChapt}>
//                 Delete
//               </Button>{" "}
//               <Button color="secondary" onClick={toggle}>
//                 Cancel
//               </Button>
//             </ModalFooter>
//           </Modal>
//         </CardBody>
//       </Card>
//     );
// }
    )};

export default Chapter;
