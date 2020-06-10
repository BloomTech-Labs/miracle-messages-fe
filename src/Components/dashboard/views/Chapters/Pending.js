import React, { useState, useEffect } from "react";
import "./Pending.scss";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import { css } from "@emotion/core";
import { useToasts } from "react-toast-notifications";
import { useOktaAuth } from "@okta/okta-react";

import {
  Table,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "reactstrap";
import PulseLoader from "react-spinners/PulseLoader";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const Pending = (props) => {
  const { authState } = useOktaAuth();

  const oktaInfo = JSON.parse(atob(authState.accessToken.split(".")[1]));

  const groups = oktaInfo.groups;

  const [user, setUser] = useState();

  const [pendingChapters, setPendingChapters] = useState([]);
  //reject modal//
  const [modalIsOpen, setIsOpen] = useState({});
  //affirm modal//
  const [openApproveModal, setApproveModal] = useState({});

  //state for pending leaders for superAdmin view
  const [pendingVolunteers, setPendingVolunteers] = useState([]);

  //state for pending volunteer members for Admin view
  const [pendingMembers, setPendingMembers] = useState([]);

  const { addToast } = useToasts();

  useEffect(() => {
    if (groups.includes("CEO")) {
      axiosWithAuth()
        .get("/api/pending/chapters")
        .then((res) => {
          console.log(res.data);
          setPendingChapters(res.data);
        });
      axiosWithAuth()
        .get("/api/pending/leaders")
        .then((res) => {
          console.log(res.data);
          setPendingVolunteers(res.data);
        });
    } else if (!groups.includes("CEO") && groups.includes("Admins")) {
      axiosWithAuth()
        .get(`api/user/`)
        .then((res) => {
          console.log("current user", res);
          setUser(res.data);
          axiosWithAuth()
            .get(
              `/api/pending/${res.data.leaderOf[0].chaptersid}/Volunteers
        `
            )
            .then((res) => {
              console.log("pending vol", res.data);
            })
            .catch((err) => console.log(err.message));
        });
    }
  }, []);
  //reject modal
  const openModal = (item) => {
    setIsOpen({ ...modalIsOpen, [item]: true });
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  //affirm modal
  const openAffirmModal = (item) => {
    setApproveModal({ ...openApproveModal, [item]: true });
  };
  const closeAffirmModal = () => {
    setApproveModal(false);
  };

  const rejectChapter = (id) => {
    axiosWithAuth()
      .delete(`api/chapter/${id}`)
      .then((res) => {
        axiosWithAuth()
          .get("/api/pending/chapters")
          .then((res) => {
            console.log(res.data);
            addToast("Chapter Request Deleted", {
              appearance: "success",
              autoDismiss: true,
              autoDismissTimeout: "1500",
            });
            setPendingChapters(res.data);
          });

        console.log(res);
      });
  };

  const approveChapter = (id) => {
    axiosWithAuth()
      .put(`api/pending/${id}/approveChapter`)
      .then((res) => {
        axiosWithAuth()
          .get("/api/pending/chapters")
          .then((res) => {
            console.log(res.data);
            addToast("Chapter Approved", {
              appearance: "success",
              autoDismiss: true,
              autoDismissTimeout: "1500",
            });
            setPendingChapters(res.data);
          });

        console.log(res);
      });
  };

  const rejectLeader = (id) => {
    axiosWithAuth()
      .put(`api/pending/${id}/declineLeader`)
      .then((res) => {
        console.log(res);
        axiosWithAuth()
          .get("/api/pending/leaders")
          .then((res) => {
            console.log(res.data);
            addToast("Request Rejected", {
              appearance: "success",
              autoDismiss: true,
              autoDismissTimeout: "1500",
            });
            setPendingVolunteers(res.data);
          });
      });
  };

  const approveLeader = (id) => {
    axiosWithAuth()
      .put(`api/pending/${id}/approveLeader`)
      .then((res) => {
        console.log(res);
        axiosWithAuth()
          .get("/api/pending/leaders")
          .then((res) => {
            console.log(res.data);
            addToast("Request Approved", {
              appearance: "success",
              autoDismiss: true,
              autoDismissTimeout: "1500",
            });
            setPendingVolunteers(res.data);
          });
      });
  };

  const loaderCss = css`
    display: block;
    margin: 10vh auto;
    text-align: center;
  `;

  return (
    <>
      {groups.includes("CEO") ? (
        <>
          <div className="pending-chapter-div">
            <h2>Chapter Requests</h2>
            <Table
              id="pending-table-header"
              hover
              style={{ fontSize: "15px", fontWeight: "bold", border: "none" }}
            >
              <thead>
                <tr className="no-border">
                  <th>Title</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Requested By</th>
                  <th></th>
                </tr>
              </thead>
            </Table>
            {pendingChapters.length > 0 ? (
              pendingChapters.map((chapter) => (
                <>
                  <Table id="pending-chapter-tbl" hover>
                    <tbody>
                      <tr>
                        <th>{chapter.title}</th>
                        <td>{chapter.state}</td>
                        <td>{chapter.city}</td>
                        <td>{chapter.requestedBy.name}</td>
                        <th>
                          {
                            <div className="action-btns">
                              <CheckCircleIcon
                                className="approve-btn"
                                onClick={() => {
                                  openAffirmModal(chapter.id);
                                }}
                              />
                              <CancelIcon
                                className="reject-btn"
                                onClick={() => {
                                  openModal(chapter.id);
                                }}
                              />
                            </div>
                          }
                        </th>
                      </tr>
                    </tbody>
                  </Table>

                  <Modal
                    isOpen={modalIsOpen[chapter.id]}
                    toggle={closeModal}
                    className={props.className}
                  >
                    <ModalHeader toggle={closeModal}>
                      Delete Chapter
                    </ModalHeader>
                    <ModalBody>
                      Are you sure you want to delete this Chapter?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        onClick={() => {
                          rejectChapter(chapter.id);
                        }}
                      >
                        Delete
                      </Button>{" "}
                      <Button color="secondary" onClick={closeModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  <Modal
                    isOpen={openApproveModal[chapter.id]}
                    toggle={closeAffirmModal}
                    className={props.className}
                  >
                    <ModalHeader toggle={closeAffirmModal}>
                      Approve this Chapter
                    </ModalHeader>
                    <ModalBody>
                      Would you like to approve this chapter?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="affirm-btn"
                        onClick={() => {
                          approveChapter(chapter.id);
                        }}
                      >
                        Approve
                      </Button>{" "}
                      <Button color="secondary" onClick={closeAffirmModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </>
              ))
            ) : (
              <PulseLoader css={loaderCss} size={18} color={"#69726F"} />
            )}
          </div>
          <div className="pending-chapter-div pending-admin-div">
            <h2>Chapter Admin Requests</h2>
            <Table
              id="pending-table-header"
              hover
              style={{ fontSize: "15px", fontWeight: "bold", border: "none" }}
            >
              <thead>
                <tr className="no-border">
                  <th></th>
                  <th>Name</th>
                  <th>Chapter</th>
                  <th>Contact</th>
                  <th></th>
                </tr>
              </thead>
            </Table>
            {pendingVolunteers.length > 0 ? (
              pendingVolunteers.map((volunteer) => (
                <>
                  <Table id="pending-chapter-tbl" hover>
                    <tbody>
                      <tr>
                        <th className="leader-pic-div">
                          <img
                            className="leader-avatar"
                            src={volunteer.profile_img_url}
                            alt="leader"
                          />
                        </th>
                        <td>{volunteer.name}</td>
                        <td>{volunteer.ChapterTitle}</td>
                        <td>{volunteer.email}</td>
                        <th>
                          {
                            <div className="action-btns">
                              <CheckCircleIcon
                                className="approve-btn"
                                onClick={() => {
                                  openAffirmModal(volunteer.email);
                                }}
                              />
                              <CancelIcon
                                className="reject-btn"
                                onClick={() => {
                                  openModal(volunteer.email);
                                }}
                              />
                            </div>
                          }
                        </th>
                      </tr>
                    </tbody>
                  </Table>

                  <Modal
                    isOpen={modalIsOpen[volunteer.email]}
                    toggle={closeModal}
                    className={props.className}
                  >
                    <ModalHeader toggle={closeModal}>
                      Reject Request
                    </ModalHeader>
                    <ModalBody>
                      Are you sure you want to reject this request?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        onClick={() => {
                          rejectLeader(volunteer.chaptersid);
                        }}
                      >
                        Delete
                      </Button>{" "}
                      <Button color="secondary" onClick={closeModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  <Modal
                    isOpen={openApproveModal[volunteer.email]}
                    toggle={closeAffirmModal}
                    className={props.className}
                  >
                    <ModalHeader toggle={closeAffirmModal}>
                      Approve this Request
                    </ModalHeader>
                    <ModalBody>
                      Would you like to approve this request?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="affirm-btn"
                        onClick={() => {
                          approveLeader(volunteer.chaptersid);
                        }}
                      >
                        Approve
                      </Button>{" "}
                      <Button color="secondary" onClick={closeAffirmModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </>
              ))
            ) : (
              <PulseLoader css={loaderCss} size={18} color={"#69726F"} />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="pending-chapter-div pending-admin-div">
            <h2>Volunteer Requests</h2>
            <Table
              id="pending-table-header"
              hover
              style={{ fontSize: "15px", fontWeight: "bold", border: "none" }}
            >
              <thead>
                <tr className="no-border">
                  <th></th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Contact</th>
                  <th></th>
                </tr>
              </thead>
            </Table>
            {pendingVolunteers.length > 0 ? (
              pendingVolunteers.map((volunteer) => (
                <>
                  <Table id="pending-chapter-tbl" hover>
                    <tbody>
                      <tr>
                        <th className="leader-pic-div">
                          <img
                            className="leader-avatar"
                            src={volunteer.profile_img_url}
                            alt="leader"
                          />
                        </th>
                        <td>{volunteer.name}</td>
                        <td>{volunteer.ChapterTitle}</td>
                        <td>{volunteer.email}</td>
                        <th>
                          {
                            <div className="action-btns">
                              <CheckCircleIcon
                                className="approve-btn"
                                onClick={() => {
                                  openAffirmModal(volunteer.email);
                                }}
                              />
                              <CancelIcon
                                className="reject-btn"
                                onClick={() => {
                                  openModal(volunteer.email);
                                }}
                              />
                            </div>
                          }
                        </th>
                      </tr>
                    </tbody>
                  </Table>

                  <Modal
                    isOpen={modalIsOpen[volunteer.email]}
                    toggle={closeModal}
                    className={props.className}
                  >
                    <ModalHeader toggle={closeModal}>
                      Reject Request
                    </ModalHeader>
                    <ModalBody>
                      Are you sure you want to reject this request?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="danger"
                        onClick={() => {
                          rejectLeader(volunteer.chaptersid);
                        }}
                      >
                        Delete
                      </Button>{" "}
                      <Button color="secondary" onClick={closeModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  <Modal
                    isOpen={openApproveModal[volunteer.email]}
                    toggle={closeAffirmModal}
                    className={props.className}
                  >
                    <ModalHeader toggle={closeAffirmModal}>
                      Approve this Request
                    </ModalHeader>
                    <ModalBody>
                      Would you like to approve this request?
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="affirm-btn"
                        onClick={() => {
                          approveLeader(volunteer.chaptersid);
                        }}
                      >
                        Approve
                      </Button>{" "}
                      <Button color="secondary" onClick={closeAffirmModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </>
              ))
            ) : (
              <PulseLoader css={loaderCss} size={18} color={"#69726F"} />
            )}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Pending);
