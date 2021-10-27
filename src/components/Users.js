import React, { useState, useEffect } from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import UserDetails from "./UserDetails";

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
      setUsers(results);
    });
  }, []);

  console.log(users);
  return (
    <Box>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2} className={classes.usersContainer}>
          {users.map((user) => {
            return (
              <UserDetails
                key={user.id}
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                avatar={user.avatar}
              />
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Users;
