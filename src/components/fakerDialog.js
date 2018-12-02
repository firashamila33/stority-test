import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PersonPin from "@material-ui/icons/PersonPin";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { populate_fake_customers } from "../actions";

class FakerDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 12
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeValue = (event, value) => {
    this.setState({ value: Math.floor(value) });
  };

  handleFake = () => {
    this.props.populate_fake_customers(this.state.value);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        maxWidth={"xs"}
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          Select how many Custumers to Fake
          <PersonPin />
        </DialogTitle>
        <DialogContent>
          <Typography id="label">{this.state.value}</Typography>
          <Slider
            classes={{ container: classes.slider }}
            value={this.state.value}
            aria-labelledby="label"
            onChange={this.handleChangeValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleFake} color="primary">
            Fake
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = {
  root: {
    width: 160
  },
  slider: {
    padding: "22px 0px"
  }
};
FakerDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    null,
    { populate_fake_customers }
  )(FakerDialog)
);
