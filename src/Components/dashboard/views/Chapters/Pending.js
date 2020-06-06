import React, { useState, useEffect } from "react";
import "./Pending.scss";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";
import { Table } from "reactstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const Pending = (props) => {
  const [pendingChapters, setPendingChapters] = useState([]);
  const [pendingVolunteers, setPendingVolunteers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/pending/chapters")
      .then((res) => {
        console.log(res);
        setPendingChapters(res.data);
      });
    axiosWithAuth().get("");
  }, []);

  return (
    <div className="pending-div">
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
      {pendingChapters.map((chapter) => (
        <Table id="pending-chapter-tbl" hover>
          <tbody>
            <tr>
              <th>{chapter.title}</th>
              <td>{chapter.state}</td>
              <td>{chapter.city}</td>
              <td>{chapter.requestedBy}</td>
              <th>
                {
                  <div className="action-btns">
                    <CheckCircleIcon className="approve-btn" />
                    <CancelIcon className="reject-btn" />
                  </div>
                }
              </th>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Pending);
