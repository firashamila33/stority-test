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
import faker from "faker/locale/de";
import { connect } from "react-redux";
import { addCustomer } from "../actions";
import {editCustomer} from '../actions/CRUD'

class AddCustomerDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id:-1,
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

  handleSubscribeBtn = () => {
    const { name, sex, birthDate } = this.state;
    const { addCustomer, close, customer, editCustomer }= this.props;

    if (_.isEmpty(name)) {
      this.setState({ nameError: "provide a name" });
      console.log("erroooooor")
      return 0;
    } else {
      this.setState({ nameError: "" });
    }
    if (_.isEmpty(birthDate)) {
      this.setState({ birthDateError: "select a birth date" });
      return 0;
    } else {
      this.setState({ birthDateError: "" });
    }
    
    if(customer){
      this.setState({ _id: customer._id})
      editCustomer({
        _id: customer._id,
        name,
        sex,
        birthDate,
        avatar: customer.avatar,
      })
    }else{
      const _id = Math.floor(Math.random() * 990000) + 1;
      this.setState({ _id });
      addCustomer({
        _id,
        name,
        sex,
        birthDate,
        avatar: faker.fake("{{internet.avatar}}"),
      });
    }
    this.handleToggleSnack()
    this.setState({ name: '' , birthDate:''})
    close();
  }

  

  render() {
    const { customer } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
          maxWidth={'xs'}
          fullWidth
        >
          <DialogTitle id="form-dialog-title">
            {customer ? `EDIT ${customer.name}` : 'Add a Customer'} 
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
              defaultValue= {customer ? customer.name : ''}
              onChange={this.handleChange("name")}
              error={this.state.nameError.length > 0}
              helperText={this.state.nameError}
              fullWidth
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customer ? customer.sex ==='female' : this.state.sex === "female"}
                    onChange={this.handleChange("sex")}
                    value="female"
                  />
                }
                label="female"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customer ? customer.sex ==='male' : this.state.sex === "male"}
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
              defaultValue= {customer ? customer.birthDate : ''}
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
            <Button onClick={this.handleSubscribeBtn} color="primary">
              {!customer ? 'Add' : 'Edit'}
            </Button>
          </DialogActions>
        </Dialog>
        <SnackBar 
          open={this.state.snackIsOpen}
          close={this.handleToggleSnack} 
          customerId={this.state._id} 
          messageInfo={`Customer ${this.state.name} ${customer ? 'Edited' : 'Aded'}`}
          undoAdd={true}
        />
      </div>
    );
  }
}

function mapStateToProps({cusomersList}){
  return({cusomersList})
}

export default connect(
   mapStateToProps,
  { addCustomer, editCustomer }
)(AddCustomerDialog);
