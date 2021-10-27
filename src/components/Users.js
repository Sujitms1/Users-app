import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  CircularProgress,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import UserDetails from "./UserDetails";

const useStyles = makeStyles((theme) => ({
  usersContainer: {
    textAlign: "center",
    padding: "100px 10px 0px 10px",
  },
  loading: {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    backgroundColor: "black",
  },
  header: {
    margin: "auto",
    fontSize: 30,
  },
}));

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      const results = res.data.data;

      let userData = [];

      results.forEach((user) => {
        let userObject = {
          id: user.id,
          email: user.email,
          firstname: user.first_name,
          lastname: user.last_name,
          image: user.avatar,
        };
        userData.push(userObject);
      });

      setUsers(userData);
    });
  }, []);

  console.log(users);
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.header}>Brand Name</Typography>
        </Toolbar>
      </AppBar>

      <Box>
        {isLoading ? (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={2} className={classes.usersContainer}></Grid>
        )}
      </Box>
    </div>
  );
};

export default Users;
