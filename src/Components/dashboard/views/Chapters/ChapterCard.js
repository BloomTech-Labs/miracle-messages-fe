import React, { useState, useEffect } from "react";
import axios from "axios";
//import { axiosWithAuth } from '../../../../Actions/AxiosWithAuth';
import { useOktaAuth } from '@okta/okta-react';

import SponsorList from "./SponsorList.js";
import SelectPartner from "./SelectPartners.js";

import { Card, CardImg, CardBody } from "reactstrap";

const ChapterCard = props => {
  const [ currentChapter, setCurrentChapter ] = useState({})
  const [ sponsors, setSponsors ] = useState([]);
  const [ partners, setPartners ] = useState([])
  const [ currentSponsors, setCurrentSponsors ] = useState([])
  const [ currentPartners, setCurrentPartners ] = useState([])

  // const [chapter, updateChapter] = useState({
  //   chapter: {
  //   },
  //   data: {
  //     allSponsors: [],
  //     allPartners: [],
  //     currentSponsors: [],
  //     currentPartners: []
  //   }
  // });

  const { authState } = useOktaAuth();
  
  // NEEDS WRAPPED IN OKTA AUTH CHECK
  useEffect(() => {
    const id = props.match.params.id
    getAllPartners()
    getChapterPartners(id)
    getChapter(id)
  }, [])
  
  const getChapter = id => {
    if (authState.isAuthenticated) {
      const { accessToken } = authState;
      try {
        axios
        .get(`https://miracle-messages-dev.herokuapp.com/api/chapter/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(res => {
          //this.setState({ chapter: res.data })
          setCurrentChapter(res.data)
          // updateChapter({
          //   ...chapter,
          //   chapter: res.data
          // })
        })
        .catch(error => {
          // console.error(error)
        })
      }
      catch (err) {
        console.log('User has no token', err)
      }
    }
  }
  
  const getAllPartners = () => {
    if (authState.isAuthenticated) {
      const { accessToken } = authState;
      try {
        axios
        .get(`https://miracle-messages-dev.herokuapp.com/api/partner`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(res => {
          const data = res.data
          let sponsors = []
          let partners = []
          
          data.forEach(element => {
            if (element.category === "partner") {
              partners.push(element)
            } else {
              sponsors.push(element)
            }
          })
          setPartners(partners)
          setSponsors(sponsors)
          /*
          this.setState({
            data: {
              ...this.state.data,
              allSponsors: sponsors,
              allPartners: partners
            }
          })
          */
          // updateChapter({
          //   ...chapter,
          //   data: {
          //     allSponsors: sponsors,
          //     allPartners: partners
          //   }
          // })
        })
        .catch(error => console.log(error))
      }
      catch (err) {
        console.log('Not Auth\'d')
      }
    }
    
  }

  const getChapterPartners = id => {
    if (authState.isAuthenticated) {
      const { accessToken } = authState;
      try {
    axios
      .get(`https://miracle-messages-dev.herokuapp.com/api/chapter/${id}/partners`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(res => {
        const data = res.data
        let sponsors = []
        let partners = []
        data.forEach(element => {
          if (element.category === "partner") {
            partners.push(element)
          } else {
            sponsors.push(element)
          }
        })
        setCurrentPartners(partners)
        setCurrentSponsors(sponsors)
        // this.setState({
        //   data: {
        //     ...this.state.data,
        //     currentSponsors: sponsors,
        //     currentPartners: partners
        //   }
        // })
        // updateChapter({
        //   ...chapter,
        //   data: {
        //     allSponsors: sponsors,
        //     allPartners: partners
        //   }
        // })
      })
      .catch(err => console.log(err))
    }
    catch (err) {
      console.log('Not Auth\'d')
    }
  }
}

  const unassignPartner = id => {
    if (authState.isAuthenticated) {
      const { accessToken } = authState;
      try {
    const chapterid = props.match.params.id
    axios
      .delete(
        `https://miracle-messages-dev.herokuapp.com/api/chapter/${chapterid}/partners/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
      .then(res => {
        getAllPartners()
        getChapterPartners(chapterid)
      })
      .catch(err => console.log(err))
     }
       catch (err) {

    }
  }
}

  const assignPartner = id => {
    const chapterid = props.match.params.id
    if (authState.isAuthenticated) {
      const { accessToken } = authState;
      try {
        const partnerId = { partnerId: id }
    axios
      .post(`https://miracle-messages-dev.herokuapp.com/api/chapter/${chapterid}/partners`, partnerId, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(res => {
        console.log(res)
        getAllPartners()
        getChapterPartners(chapterid)
      })
      .catch(err => console.log(err))
      }
      catch (err) {
        console.log('Not Auth\'d')
      }
    }
  }

  if (!currentChapter) {
    return <div>Loading Chapter information...</div>
  }
  return (
      <div className="chapter-flex">
        {/* {console.log(this.state.chapter)} */}
        <Card
          className="s-chapter"
          style={{ maxWidth: "50%", maxHeight: "50%", minWidth: "300px" }}
        >
          <CardImg src={currentChapter.chapter_img_url} />

          <CardBody>
            <h1>{currentChapter.title}</h1>
            <h4>Established: </h4>
            <p> {currentChapter.established_date} </p>
            <h4>Description</h4>
            <p>{currentChapter.description}</p>
            <h4>City: </h4>
            <p> {currentChapter.city} </p>
            <h4>State: </h4>
            <p> {currentChapter.state} </p>
            <h4>Email: </h4>
            <p> {currentChapter.email} </p>
            <h4>Volunteers: </h4>
            <p> {currentChapter.numvolunteers} </p>
            <h4>Delivered Messages: </h4>
            <p> {currentChapter.msg_delivered} </p>
            <h4>Messages Recorded: </h4>
            <p> {currentChapter.msg_recorded} </p>
            <h4>Reunions: </h4>
            <p> {currentChapter.numreunions} </p>
            <h4>currentChapter Facebook Link: </h4>
            <p> {currentChapter.facebook} </p>
            <h4>Featured Story</h4>
            <p>{currentChapter.story}</p>
            <CardImg src={currentChapter.reunion_img_url} />
          </CardBody>
        </Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SponsorList
            className="s-chapter-right"
            // data={currentChapter}
            currentSponsors={currentSponsors} currentPartners={currentPartners} 
            unassign={unassignPartner}
          />
          <SelectPartner sponsors={sponsors} partners={partners}  assign={assignPartner} />
        </div>
      </div>
    )
  
}

export default ChapterCard;