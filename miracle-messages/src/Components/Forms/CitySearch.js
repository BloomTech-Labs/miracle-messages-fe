// Imports
import React, { Component } from "react";

// Import Material UI components needed
import SearchBar from "material-ui-search-bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//Import React Script Library to load Google object
import Script from "react-load-script";

// dotenv to hide the API key in the environment variables
require("dotenv").config();

const G_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBl5YzFZftBoLGc7BUbB-_eT9iHBbnyJv8&libraries=place`;

class CitySearch extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: "",
      query: ""
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ["(cities)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    this.autocomplete.setFields(["address_components"]);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address
      });
    }
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBl5YzFZftBoLGc7BUbB-_eT9iHBbnyJv8&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <MuiThemeProvider>
          <SearchBar
            id="autocomplete"
            placeholder=""
            hintText="Search City"
            value={this.state.query}
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default CitySearch;
