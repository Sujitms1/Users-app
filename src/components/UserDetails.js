import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90,90,90)",
    },
  },
  cardContent: {
    textAlign: "center",
  },
}));

const UserDetails = ({ firstName, lastName, email, avatar, key }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={2} key={key}>
      <Card className={classes.card}>
        <CardMedia />
        <CardContent className={classes.cardContent}>
          <Typography></Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserDetails;
