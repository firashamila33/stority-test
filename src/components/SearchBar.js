import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from 'lodash'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import PersonAdd from '@material-ui/icons/PersonAdd';
import AddCustomerDialog from "./AddCustomerDialog";
import Button from "@material-ui/core/Button";
import Badge from '@material-ui/core/Badge'
import { filterCustomers, initializeFilter } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogeOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ dialogeOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogeOpen: false });
  };

  handleSearchCustomer = event => {
    const searchValue = event.target.value;
    const { initializeFilter, activateFilter, filterCustomers, cusomersList } = this.props;
    
    if (!_.isEmpty(searchValue)) {
      initializeFilter(cusomersList)
      activateFilter(true);
    } else {
      activateFilter(false);
    }
    filterCustomers(event.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#AB0F59" }}>
          <Toolbar>
            <Badge color="primary" badgeContent={this.props.cusomersList.length} invisible={false}>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                STORITY CUSTOMERS
              </Typography>            
            </Badge>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <Button color="default" onClick={console.log('show all')}>Show All</Button> */}
            </div>
            <div className={classes.search} style={{marginRight:'10px'}}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.handleSearchCustomer}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <Button color="inherit" onClick={this.handleOpen}>
                ADD CUSTOMER &nbsp;
                  <PersonAdd fontSize={'default'} className={classes.rightIcon} />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <AddCustomerDialog
          close={this.handleClose}
          open={this.state.dialogeOpen}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
   
});

function mapStateToProps({ cusomersList }) {
  return { cusomersList };
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    { filterCustomers, initializeFilter }
  )(SearchBar)
);
