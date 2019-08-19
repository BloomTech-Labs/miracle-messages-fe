import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg } from 'reactstrap';

class Volunteer extends Component {
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle className="mb-0">
              <i className="mdi mdi-comment-processing-outline mr-2"> </i>
              The Salvation Army
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <CardImg
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/The_Salvation_Army.svg/200px-The_Salvation_Army.svg.png"
              style={{ heigh: '50px', width: '50px' }}
            />

            <span style={{ marginLeft: '190px' }}>
              http://www.salvationarmyusa.org
            </span>

            <Button
              style={{ width: '100px', right: '200px', position: 'absolute' }}
            >
              Update
            </Button>
            <Button
              color="danger"
              style={{ width: '100px', right: '60px', position: 'absolute' }}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle className="mb-0">
              <i className="mdi mdi-comment-processing-outline mr-2"> </i>
              Lambda School
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <CardImg
              src="https://pbs.twimg.com/profile_images/1146473233895440384/p97lN1Jk.png"
              style={{ heigh: '50px', width: '50px' }}
            />

            <span style={{ marginLeft: '190px' }}>
              https://lambdaschool.com/
            </span>

            <Button
              style={{ width: '100px', right: '200px', position: 'absolute' }}
            >
              Update
            </Button>
            <Button
              color="danger"
              style={{ width: '100px', right: '60px', position: 'absolute' }}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle className="mb-0">
              <i className="mdi mdi-comment-processing-outline mr-2"> </i>
              Lending Club
            </CardTitle>
          </CardBody>
          <CardBody className="border-top">
            <CardImg
              src="http://pattymccord.com/wp-content/uploads/2017/12/Lending-Club-Logo.jpg"
              style={{ heigh: '50px', width: '50px' }}
            />

            <span style={{ marginLeft: '190px' }}>
              https://www.lendingclub.com/
            </span>

            <Button
              style={{ width: '100px', right: '200px', position: 'absolute' }}
            >
              Update
            </Button>
            <Button
              color="danger"
              style={{ width: '100px', right: '60px', position: 'absolute' }}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
        <Button className="addBtn" onClick={this.toggle}>
          +
        </Button>
      </>
    );
  }
}
export default Volunteer;
