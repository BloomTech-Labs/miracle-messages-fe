import React from 'react';

import img1 from '../../../Assets/Imgs/1.jpg';

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table
} from 'reactstrap';

class Admins extends React.Component {
  toggle10 = () => {
    this.setState({
      tooltipOpen10: !this.state.tooltipOpen10
    });
  };

  toggle20 = () => {
    this.setState({
      tooltipOpen20: !this.state.tooltipOpen20
    });
  };

  toggle30 = () => {
    this.setState({
      tooltipOpen30: !this.state.tooltipOpen30
    });
  };

  toggle40 = () => {
    this.setState({
      tooltipOpen40: !this.state.tooltipOpen40
    });
  };

  render() {
    return (
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Admins Acitvity</CardTitle>
              <CardSubtitle>Overview of Latest Month</CardSubtitle>
            </div>
            <div className="ml-auto d-flex no-block align-items-center">
              <div className="dl">
                <Input type="select" className="custom-select">
                  <option value="0">Monthly</option>
                  <option value="1">Daily</option>
                  <option value="2">Weekly</option>
                  <option value="3">Yearly</option>
                </Input>
              </div>
            </div>
          </div>
          <Table className="no-wrap v-middle" responsive>
            <thead>
              <tr className="border-0">
                <th className="border-0">Admins</th>
                <th className="border-0">Roles</th>

                <th className="border-0">Members</th>
                <th className="border-0">Budget</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img1}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5>
                      <span>hgover@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td>Chapter Head</td>

                <td>35</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  $96K
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img1}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">
                        Daniel Kristeen
                      </h5>
                      <span>Kristeen@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td>Chapter Head</td>

                <td>35</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  $96K
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img1}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">
                        Julian Josephs
                      </h5>
                      <span>Josephs@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td>Chapter Head</td>

                <td>35</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  $96K
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img1}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5>
                      <span>hgover@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td>Chapter Head</td>

                <td>35</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  $96K
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default Admins;
