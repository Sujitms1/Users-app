import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const UserDetails = ({ firstName, lastName, email, avatar }) => {
  return (
    <Grid item xs={12} sm={2} key={id}>
      <Card className={classes.card}>
        <CardMedia image={image} className={classes.cardMedia} />
        <CardContent className={classes.cardContent}>
          <Typography></Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserDetails;
