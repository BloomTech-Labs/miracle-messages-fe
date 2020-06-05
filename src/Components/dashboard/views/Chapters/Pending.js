import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";

const Pending = (props) => {
  const [pendingChapters, setPendingChapters] = useState([]);
  const [pendingVolunteers, setPendingVolunteers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/pending/chapters")
      .then((res) => console.log(res));
    axiosWithAuth().get("");
  }, []);

  return (
    <div className="pending-div">
      <h1>Pending Requests</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Pending);
