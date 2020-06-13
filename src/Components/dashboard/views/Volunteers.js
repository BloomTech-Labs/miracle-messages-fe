import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Volunteer from "./Volunteer.js";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  const getVolunteers = () => {
    axiosWithAuth()
      .get("/api/volunteer")
      .then((res) => {
        // console.log(res)
        setVolunteers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVolunteers();
  }, []);

  return (
    <div>
      {volunteers.map((vol, key) => {
        return (
          <Volunteer
            getVolunteers={() => getVolunteers()}
            vol={vol}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default Volunteers;
