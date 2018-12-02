import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux'
import { deleteCustomer } from '../actions'
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SnackBar extends Component {
  handleClose = () => {
    this.props.close();
  };

  
  render() {
    const { classes } = this.props;
    const { open, messageInfo, customerId, deleteCustomer } = this.props;

    return (
      <div>
        <Snackbar
          key={messageInfo.key}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{messageInfo}</span>}
          action={[
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={() => {
                if(this.props.undoAdd)deleteCustomer(customerId);
                this.handleClose();
              }}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

SnackBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(null,{ deleteCustomer })((SnackBar)));
