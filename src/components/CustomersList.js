import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CustomerCard from "./CustomerCard";
import _ from "lodash";

class CustomersList extends Component {
  render() {
    const {
      classes,
      filterActivated,
      cusomersList,
      customerFiltredList
    } = this.props;

    let displayed_custmesrs_List = filterActivated
      ? customerFiltredList
      : cusomersList;
    let DisplayedListIsEmpty = _.isEmpty(displayed_custmesrs_List);
    return (
      <div style={{ padding: 50 }}>
        <Grid container spacing={24}>
          {!DisplayedListIsEmpty &&
            displayed_custmesrs_List.map(customer => (
              <Grid key={customer._id} item xs={3}>
                <CustomerCard
                  key={customer._id}
                  className={classes.paper}
                  customer={customer}
                />
              </Grid>
            ))}
          {filterActivated && DisplayedListIsEmpty && <h1>NO RESULT FOUND</h1>}
          {!filterActivated && DisplayedListIsEmpty && (
            <h1>INSERT NEW CUSTOMERS</h1>
          )}
        </Grid>
      </div>
    );
  }
}

CustomersList.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

function mapStateToProps({ cusomersList, customerFiltredList }) {
  return { cusomersList, customerFiltredList };
}

export default withStyles(styles)(connect(mapStateToProps)(CustomersList));
