// import React from 'react';
// import axios from 'axios';

// class ChapterCard extends React.Component {
//   state = {
//     chapter: null
//   };

//   componentDidMount() {
//     const target = this.props.match.params.id;
//     const id = 1;
//     console.log(`my idddddddddd is : ${id} and ${target}`);
//     // this.getChapter(id);
//     axios
//       .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
//       .then(res => {
//         console.log(res);
//         this.setState({ chapter: res.data });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   componentDidUpdate(newProps) {
//     if (this.props.match.params.id !== newProps.match.params.id) {
//       this.getChapter(newProps.match.params.id);
//     }
//   }

//   getChapter = id => {
//     axios
//       .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
//       .then(res => {
//         console.log(res);
//         this.setState({ chapter: res.data });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   render() {
//     // console.log(this.state.chapter.latitude);
//     if (!this.state.chpater) {
//       return <div>Loading Chapter information...</div>;
//     }
//     return (
//       <div>
//         <h1 style={{ color: 'red' }}>hello</h1>
//         <h1>{this.state.chapter.city}</h1>
//       </div>
//     );
//   }
// }

// export default ChapterCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChapterCard = props => {
  const [chapter, setChapter] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`https://miracle-messages-staging.herokuapp.com/api/chapter/${id}`)
      .then(response => {
        setChapter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!chapter) {
    return <div>Loading movie information...</div>;
  }

  //   const { title, director, metascore, stars } = movie;
  return (
    <div>
      <h1 style={{ color: 'red' }}>hello</h1>
      <h1>{chapter.city}</h1>
    </div>
  );
};

export default ChapterCard;
