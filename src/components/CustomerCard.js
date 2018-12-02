import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grow from '@material-ui/core/Grow';


function MediaControlCard({ classes, theme, customer }) {
  const { name, birthDate, sex, avatar } = customer;
  return (
    <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
        {...( { timeout: 1500 })}
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
            <Typography style={{color:`${sex=='male' ? `#222` : `#AB0F59`}`}} variant="subtitle2" >
              {sex}
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={avatar} />
      </Card>
  </Grow>

  );
}

MediaControlCard.propTypes = {
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

export default withStyles(styles, { withTheme: true })(MediaControlCard);
