import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <h5 style={{ paddingTop: "10px", float: "left", paddingLeft: "20px" }}>
        {" "}
        People you may know
      </h5>
      <Link
        to="/recommendations"
        style={{
          paddingTop: "10px",
          paddingRight: "10px",
          float: "right",
          fontSize: "17px"
        }}
      >
        See All
      </Link>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <React.Fragment>
              <br />
              <button className="btn btn-sm btn-danger">Add Friend</button>{" "}
              <button className="btn btn-sm btn-danger">Remove</button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <React.Fragment>
              <br />
              <button className="btn btn-sm btn-danger">Add Friend</button>{" "}
              <button className="btn btn-sm btn-danger">Remove</button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <React.Fragment>
              <br />
              <button className="btn btn-sm btn-danger">Add Friend</button>{" "}
              <button className="btn btn-sm btn-danger">Remove</button>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}