// Imports
import React, { Component } from "react";

// Import Search Bar Components
import SearchBar from "material-ui-search-bar";

//Import React Scrit Libraray to load Google object
import Script from "react-load-script";

class CitySearch extends Component {
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: "",
      query: ""
    };
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default CitySearch;
