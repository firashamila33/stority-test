import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CustomerCard from "./CustomerCard";

const styles = theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
      padding: theme.spacing.unit,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing.unit,
    },
    divider: {
      margin: `${theme.spacing.unit * 2}px 0`,
    },
  });

class CustomersList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={ {padding :50}}>
        <Grid container spacing={24}>
            
                {this.props.cusomersList.map(customer =>
                    <Grid  key={customer._id} item xs={3}>
                        <CustomerCard key={customer._id} className={classes.paper} customer={customer} />
                    </Grid>
                )}
        </Grid>

      </div>
    );
  }
}

CustomersList.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps({ cusomersList }){
    return { cusomersList }
}

export default withStyles(styles)(connect(mapStateToProps)(CustomersList));