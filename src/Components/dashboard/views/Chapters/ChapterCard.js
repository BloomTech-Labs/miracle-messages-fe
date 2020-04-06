import React, { useState, useEffect } from "react";
import axios from "axios";
//import { axiosWithAuth } from '../../../../Actions/AxiosWithAuth';
import { useOktaAuth } from '@okta/okta-react';

import SponsorList from "./SponsorList.js";
import SelectPartner from "./SelectPartners.js";

import { Card, CardImg, CardBody } from "reactstrap";

const ChapterCard = props => {
  const [ newChapter, setCurrentChapter ] = useState({});
  const [chapter, updateChapter] = useState({
    chapter: {},
    data: {
      allSponsors: [],
      allPartners: [],
      currentSponsors: [],
      currentPartners: []
    }
  });

  const { authState } = useOktaAuth();
  
  // NEEDS WRAPPED IN OKTA AUTH CHECK
  useEffect(() => {
    const id = props.match.params.id
    getAllPartners()
    getChapterPartners(id)
    getChapter(id)
  }, [])
  
  const getChapter = id => {
    console.log(authState.isAuthenticated)
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
          updateChapter({
            ...chapter,
            chapter: res.data
          })
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
          /*
          this.setState({
            data: {
              ...this.state.data,
              allSponsors: sponsors,
              allPartners: partners
            }
          })
          */
          updateChapter({
            ...chapter,
            data: {
              allSponsors: sponsors,
              allPartners: partners
            }
          })
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
        // this.setState({
        //   data: {
        //     ...this.state.data,
        //     currentSponsors: sponsors,
        //     currentPartners: partners
        //   }
        // })
        updateChapter({
          ...chapter,
          data: {
            allSponsors: sponsors,
            allPartners: partners
          }
        })
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

  if (!chapter) {
    return <div>Loading Chapter information...</div>
  }
  return (
      <div className="chapter-flex">
        {/* {console.log(this.state.chapter)} */}
        <Card
          className="s-chapter"
          style={{ maxWidth: "50%", maxHeight: "50%", minWidth: "300px" }}
        >
          <CardImg src={chapter.chapter_img_url} />

          <CardBody>
            <h1>{chapter.title}</h1>
            <h4>Established: </h4>
            <p> {chapter.established_date} </p>
            <h4>Description</h4>
            <p>{chapter.description}</p>
          </CardBody>
        </Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SponsorList
            className="s-chapter-right"
            data={chapter.data}
            unassign={unassignPartner}
          />
          <SelectPartner data={chapter.data} assign={assignPartner} />
        </div>
      </div>
    )
  
}

export default ChapterCard;
