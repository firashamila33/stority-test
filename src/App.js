import React, { Component } from "react";
import { connect } from "react-redux";
import { populate_fake_customers } from "./actions";
import CustomersList from "./components/CustomersList";
import SearchBar from "./components/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterActivated: false
    };
  }

  componentWillMount() {
    this.props.populate_fake_customers(11);
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

export default connect(
  null,
  { populate_fake_customers }
)(App);
