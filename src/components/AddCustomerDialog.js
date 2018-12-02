import React, { Component } from "react";
import _ from 'lodash'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import PersonPin from '@material-ui/icons/PersonPin';
import SnackBar from './SnackBar';
import { connect } from "react-redux";
import { addCustomer } from "../actions";

class AddCustomerDialog extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      nameError: "",
      sex: "male",
      birthDate: "",
      birthDateError: "",
      snackIsOpen: false,
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleToggleSnack = () => {
    this.setState({snackIsOpen: !this.state.snackIsOpen })
  }

  createUser = () => {
    console.log(this.state)

    console.log(_.isEmpty(this.state.name))
    if (_.isEmpty(this.state.name)) {
      this.setState({ nameError: "provide a name" });
      console.log('I am setting nameEroor')
      return 0;
    } else {
      this.setState({ nameError: "" });
    }
    if (_.isEmpty(this.state.birthDate)) {
      this.setState({ birthDateError: "select a birth date" });
      return 0;
    } else {
      this.setState({ birthDateError: "" });
    }
    console.log(this.state)

    const { name, sex, birthDate } = this.state;
    const _id = Math.floor(Math.random() * 70) + 1;

    if(_.isEmpty(this.state.nameError) && _.isEmpty(this.state.birthDateError)){
      console.log(_.isEmpty(this.state.nameError))
      console.log(_.isEmpty(this.state.birthDateError))
      console.log(this.state)
      this.props.addCustomer({
        _id,
        name,
        sex,
        birthDate,
        avatar: `http://i.pravatar.cc/200?img=${_id}`
      });
  
      this.handleToggleSnack()
      this.props.close();
    }
    
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
          Add a Customer
          <PersonPin/>
          </DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              onChange={this.handleChange("name")}
              error={this.state.nameError.length > 0}
              helperText={this.state.nameError}
              fullWidth
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sex === "female"}
                    onChange={this.handleChange("sex")}
                    value="female"
                  />
                }
                label="female"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sex === "male"}
                    onChange={this.handleChange("sex")}
                    value="male"
                    color="primary"
                  />
                }
                label="Male"
              />
            </FormGroup>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.handleChange("birthDate")}
              error={this.state.birthDateError.length > 0}
              helperText={this.state.birthDateError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.createUser.bind(this)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
        <SnackBar open={this.state.snackIsOpen} close={this.handleToggleSnack} messageInfo={`Customer ${this.state.name} Aded`}/>
      </div>
    );
  }
}

function mapStateToProps({cusomersList}){
  return({cusomersList})
}

export default connect(
   mapStateToProps,
  { addCustomer }
)(AddCustomerDialog);
