import React, { Component } from "react";
import CustomersList from "./components/CustomersList"
import SearchBar from "./components/SearchBar"
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CustomersList/>
      </div>
    )
  }
}

export default App;
