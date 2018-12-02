import React,{Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grow from '@material-ui/core/Grow';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import DeleteCustomerDialog from './DeleteCustomerDialog'
import EditCustomer from './AddCustomerDialog'



class CustomerCard extends Component{

  constructor() {
    super()
    this.state = {
        hoverDelete: false,
        hoverEdit: false,
        openConfirmDialog: false,
        confirmDeleteCustomer: false,
        openEditDialog: false

    }
    this.ToggleDeleteHover = this.ToggleDeleteHover.bind(this);
    this.ToggleEditHover = this.ToggleEditHover.bind(this);
    this.toggleConfirmDialog = this.toggleConfirmDialog.bind(this);
    this.toggleEditDialog = this.toggleEditDialog.bind(this);
    
} 

ToggleDeleteHover() {
  this.setState({ hoverDelete: !this.state.hoverDelete });
}

ToggleEditHover() {
  this.setState({ hoverEdit: !this.state.hoverEdit });
}

toggleConfirmDialog(){
  this.setState({ openConfirmDialog: !this.state.openConfirmDialog});
}

toggleEditDialog(){
  this.setState({ openEditDialog: !this.state.openEditDialog });
}



render(){
  const { name, birthDate, sex, avatar } = this.props.customer;
  const { classes } = this.props;
  return (
    <div>
      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...({ timeout: 1500 })}
      >
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {birthDate}
              </Typography>
              <Typography style={{ fontSize: 15, fontWeight: 'bold', color: `${sex === 'male' ? `#222` : `#AB0F59`}` }} variant="subtitle2" >
                {sex}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Edit Customer"
                onMouseEnter={this.ToggleEditHover}
                onMouseLeave={this.ToggleEditHover}
                onClick={this.toggleEditDialog}
              >
                <Edit color={this.state.hoverEdit ? 'primary' : 'action'} />
              </IconButton>
              <IconButton aria-label="Delete"
                onMouseEnter={this.ToggleDeleteHover}
                onMouseLeave={this.ToggleDeleteHover}
                onClick={this.toggleConfirmDialog}
              >
                <Delete color={this.state.hoverDelete ? 'secondary' : 'action'} />
              </IconButton>
            </div>
          </div>
          <CardMedia className={classes.cover} image={avatar} />

        </Card>

      </Grow>
      <DeleteCustomerDialog
        customer = {this.props.customer}
        close={this.toggleConfirmDialog}
        open={this.state.openConfirmDialog}
      />
      <EditCustomer
          customer ={this.props.customer}
          close={this.toggleEditDialog}
          open={this.state.openEditDialog}
      />
    </div>
  

  );
}
}

CustomerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

export default withStyles(styles, { withTheme: true })(CustomerCard);
