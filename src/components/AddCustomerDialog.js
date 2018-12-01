import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

import { connect } from 'react-redux' 
import { addCustomer } from '../actions'

class AddCustomerDialog extends Component {
  constructor(props){
    super();
    this.state={
      name: '',
      nameError: '',
      sex : 'male',
      birthDate: '',   
      birthDateError: '',
    } 
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  createUser = () => {
    if( this.state.name.length == 0){
      this.setState({ nameError: 'provide a name'})
    }else {
      this.setState({ nameError: ''})
    }
    if( this.state.birthDate.length == 0){
      this.setState({ birthDateError: 'select a birth date'})
    }else{
      this.setState({ birthDateError: ''})
    }
    
    const { name, sex, birthDate } = this.state;
    this.props.addCustomer({_id:Math.floor(Math.random() * 70) + 1  , name, sex, birthDate});
    this.props.close();
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a Customer</DialogTitle>
          <DialogContent style={{display:'flex',flexDirection:'column', justifyContent: 'space-between'}}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              onChange={this.handleChange('name')}
              error={this.state.nameError.length > 0}
              helperText={this.state.nameError}
              fullWidth
            />
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sex == 'female'}
                    onChange={this.handleChange('sex')}
                    value="female"
                  />
                }
                label="female"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.sex == 'male'}
                    onChange={this.handleChange('sex')}
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
                shrink: true,
              }}
              onChange={this.handleChange('birthDate')}
              error={this.state.birthDateError.length > 0}
              helperText={this.state.birthDateError}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
              Cancel
            </Button>
            <Button onClick={this.createUser}color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default connect(null,{addCustomer})(AddCustomerDialog)
