import React, { useState, useEffect } from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  usersContainer: {
    textAlign: "center",
    padding: "80px 10px 0px 10px",
    backgroundColor: "rgb(68, 68, 68)",
  },
}));

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      const results = res.data.data;

      let userData = [];

      userData.push(results);
      setUsers(userData);
    });
  }, []);

  console.log(users);
  return (
    <Box>
      <Grid container spacing={2} className={classes.usersContainer}></Grid>
    </Box>
  );
};

export default Users;
