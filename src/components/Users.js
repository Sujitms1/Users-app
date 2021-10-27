import React, { useState, useEffect } from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

const Users = () => {
  const [users, setUsers] = useState(null);
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
    <div>
      <h1>testing</h1>
    </div>
  );
};

export default Users;
