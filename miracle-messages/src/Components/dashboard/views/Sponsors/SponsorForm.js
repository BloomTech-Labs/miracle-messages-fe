import React from 'react';

import { Input, Label, Button, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';



class SponsorForm extends React.Component {
    constructor(props) {
        super(props);

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
                <Label>Category</Label>
                <Input
                onChange={this.props.change}
                name="category"
                // onChange={this.handleChange}
                type="text"
                placeholder="Sponsor / Partner"
                />
             </div>
        );
    }
  
}
export default SponsorForm