import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardImg,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import { deleteSponsor, getSponsor } from "../../../../Actions/index"
import { useUserGroups } from '../../../../utils/customHooks/useUserGroups';
import { connect } from "react-redux";
import UpdateSponsor from "./UpdateSponsor";
const Sponsor = props => {
  const { admin, chapterLeaders, volunteer } = useUserGroups();
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [sponsor, setSponsor] = useState({
    name: "",
    site_url: "",
    icon_url: null,
    category: ""
  });

  const remove = () => {
    const id = props.sponsor.id
    // console.log(id);
    axiosWithAuth()

      .delete(`/api/partner/${id}`)
      .then(res => {
        toggle()
        props.getSponsor()
      })
      .catch(err => console.log(err));
  }

  const toggle = () => {
    setModal(modal => !modal);
  }

  const toggleEdit = () => {
    setEditModal(editModal => !editModal)
  }

    return (
      <>
        <Card
          className="partnersCard"
          style={{ maxWidth: "60%", minWidth: "650px" }}
        >
          <CardBody>
            <CardTitle className="mb-0">
              <h4>
                {props.sponsor.name} | {props.sponsor.category}
              </h4>
            </CardTitle>
          </CardBody>
          <CardBody
            className="border-top"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <CardImg
                src={props.sponsor.icon_url}
                style={{ heigh: "50px", width: "50px" }}
              />
              <span style={{ marginLeft: "2rem" }}>
                {props.sponsor.site_url}
              </span>
            </div>
            <div>
              {admin && <Button
                style={{ width: "100px", marginLeft: ".5rem" }}
                onClick={toggleEdit}
              >
                Update
              </Button>}
              <Modal
                isOpen={editModal}
                toggle={toggleEdit}
                className={props.className}
                backdrop="static"
              >
                <ModalHeader toggle={toggleEdit}>
                  Update Sponsor
                </ModalHeader>
                <ModalBody>
                  <UpdateSponsor
                    toggleEdit={toggleEdit}
                    sponsor={props.sponsor}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggleEdit}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>

              {admin && <Button
                color="danger"
                style={{ width: "100px", marginLeft: ".5rem" }}
                onClick={toggle}
              >
                Delete
              </Button>}

              <Modal
                isOpen={modal}
                toggle={toggle}
                className={props.className}
              >
                <ModalHeader toggle={toggle}>Delete Sponsor</ModalHeader>
                <ModalBody>
                  Are you sure you want to permanently delete this Sponsor? Will
                  Be Deleted From All The Chapters!!!
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={remove}>
                    Delete
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </>
    )
}

const mapStateToProps = state => {
  return {
    sponsorData: state.partnerReducer.sponsorData
  }
}
export default connect(mapStateToProps, { deleteSponsor, getSponsor })(Sponsor)
