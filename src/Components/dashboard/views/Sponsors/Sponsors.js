import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../../utils/axiosWithAuth";

import Sponsor from "./Sponsor";
import { getSponsor } from "../../../../Actions/index";
import SponsorForm from "../Sponsors/SponsorForm";
import { connect } from "react-redux";
import { useUserGroups } from "../../../../utils/customHooks/useUserGroups";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Sponsors = (props) => {
  const { admin } = useUserGroups();
  const [modal, setModal] = useState(false);
  const [sponsor, setSponsor] = useState({
    name: "",
    site_url: "",
    icon_url: null,
    category: "",
  });

  const addSponsor = (e) => {
    e.preventDefault();
    console.log(sponsor.icon_url);
    const fd = new FormData();
    fd.append("partner_icon", sponsor.icon_url);
    fd.append("name", sponsor.name);
    fd.append("site_url", sponsor.site_url);
    fd.append("category", sponsor.category);
    console.log(fd.getAll("partner_icon"));
    axiosWithAuth()
      .post("/api/partner", fd)
      .then((res) => {
        console.log(res);

        toggle();
        props.getSponsor();
      })
      .catch((err) => console.log(err));
    setSponsor({
      name: "",
      site_url: "",
      icon_url: null,
      category: "",
    });
  };

  const handleImg = (e) => {
    setSponsor({
      ...sponsor,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleInputChange = (e) => {
    setSponsor({
      ...sponsor,
      [e.target.name]: e.target.value,
    });
  };

  const toggle = () => {
    setModal((modal) => !modal);
  };

  useEffect(() => {
    props.getSponsor();
  }, [props]);

  return (
    <div onSubmit={toggle}>
      {props.sponsorData.map((sponsor) => {
        return <Sponsor sponsor={sponsor} key={sponsor.id} />;
      })}
      {admin && (
        <Button className="addBtn" onClick={toggle}>
          +
        </Button>
      )}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={props.className}
        backdrop="static"
      >
        <ModalHeader toggle={toggle}>Add Sponsor</ModalHeader>
        <ModalBody>
          <SponsorForm
            change={handleInputChange}
            sponsor={sponsor}
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
  );
};

const mapStateToProps = (state) => {
  return {
    sponsorData: state.partnerReducer.sponsorData,
  };
};

export default connect(mapStateToProps, { getSponsor })(Sponsors);
