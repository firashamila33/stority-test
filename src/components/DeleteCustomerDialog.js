import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { deleteCustomer } from "../actions";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DeleteCustomerDialog extends Component {
  handleDeleteUser = () => {
    const { customer, deleteCustomer, close } = this.props;
    deleteCustomer(customer._id);
    close();
  };

  render() {
    const { open, close, customer } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={close}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {`Delete Customer: ${customer.name}`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {`Please confirm deleting the Customer named ${customer.name}`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={close} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleDeleteUser} color="secondary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteCustomer }
)(DeleteCustomerDialog);
