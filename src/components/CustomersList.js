import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Zoom from '@material-ui/core/Zoom';
import CustomerCard from "./CustomerCard";
import FakerDialog from './fakerDialog';
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
      <div>
        <Zoom in={filterActivated} style={{ paddingTop: 10, transition: filterActivated ? '900ms' : '0ms' }}>
          <div>
            <Typography
              style={{ color: "#222", fontWeight: "Bold", fontSize: 20 }}
              color="textSecondary"
            >
              {DisplayedListIsEmpty ? 'No' : displayed_custmesrs_List.length } Results Found
            </Typography>
            <Divider variant="middle" />
          </div>
        </Zoom>
        <div style={{ padding: 30 }}>
          <Grid container spacing={24}>
            {!DisplayedListIsEmpty &&
              displayed_custmesrs_List.map(customer => (
                <Grid key={customer._id} item xs={3}>
                  <CustomerCard
                    key={customer._id}
                    className={classes.paper}
                    customer={customer}
                    confirmDeleteCustomer={this.confirmDeleteCustomer}
                  />
                </Grid>
              ))}
            {!filterActivated && DisplayedListIsEmpty && (
              <Typography style={{margin:'auto',textAlign:'center'}} component="h2" variant="display2" gutterBottom>
                  INSERT NEW CUSTOMERS
              </Typography> 
            )}
          </Grid>
        </div>
        <FakerDialog/>
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
