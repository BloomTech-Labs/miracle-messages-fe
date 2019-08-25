import React from 'react';

import { Button, Input, Label, Dropdown, Container, DropdownToggle, DropdownMenu, DropdownItem,ButtonDropdown } from 'reactstrap';



class SponsorForm extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
          dropdownOpen: false,
          
        };
    }  
      
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

    select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText,
    });
  }

    render() {
        return (
            <div>
                <Label>Organization Name</Label>
                <Input
                value={this.props.sponsor.name}
                onChange={this.props.change}
                name="name"
                />
                <br/>
                <Label>Organization Web Adress</Label>
                <Input
                value={this.props.sponsor.site_url}
                name="site_url"
                onChange={this.props.change}
                type="url"
                placeholder="www.yoursite.com"
                />
                <br/>
                <Label>Logo</Label>
                <Input                
                onChange={this.props.handleImg}
                name="icon_url"
                type="file"
                /><br/>
                <h3>Choose your Interest:</h3>
                <Container className="drop_down">
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle>{this.state.value}</DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem onClickCapture={this.select} value={this.props.sponsor.category}>Sponsor</DropdownItem>
                  <DropdownItem onSelect={this.select} value={this.props.sponsor.category}>Partner</DropdownItem>
                   </DropdownMenu>
                  </ButtonDropdown>
                </Container>
            </div>
        );
    }
}
export default SponsorForm