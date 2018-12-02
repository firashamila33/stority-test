import React, { Component } from "react";
import CustomersList from "./components/CustomersList";
import SearchBar from "./components/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterActivated: false
    };
  }

  
  activateFilter = filterActivated => {
    this.setState({ filterActivated });
  };

  render() {
    return (
      <div>
        <SearchBar activateFilter={this.activateFilter} />
        <CustomersList filterActivated={this.state.filterActivated} />
      </div>
    );
  }
}

export default App;
