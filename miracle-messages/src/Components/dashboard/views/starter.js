import React from 'react';
import { Row, Col } from 'reactstrap';
import Visitors from '../visitors/Visitors.js';
import Admins from '../admins/Admins.js';
import Feeds from '../feeds/feeds.js';

class Starter extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6} lg={8}>
            <Visitors />
          </Col>
          <Col sm={6} lg={4}>
            <Feeds />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Admins />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Starter;
