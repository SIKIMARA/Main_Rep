import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import LocationVoiture from "../../Images/transparentvw.png";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#dfc482" };

  return (
    <Paper style={{ width: 350, padding: 20 }}>
      <Grid align="center">
        <img
          src={LocationVoiture}
          height={70}
          width={160}
          style={{ marginTop: 10 }}
        />
        <h2 style={{ color: "#dfc482" }}>Sign In</h2>
      </Grid>
      <TextField
        color="#dfc482"
        label="Username"
        placeholder="Enter username"
        fullWidth
        required
      />
      <TextField
        color="#dfc482"
        label="Password"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
      />
      <FormControlLabel
        control={<Checkbox name="checkedB" color="#dfc482" />}
        label="Remember me"
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        fullWidth
      >
        Login
      </Button>

      <Typography>
        {" "}
        Do you have an account ?
        <Link href="#" style={{ color: "#dfc482", marginTop: 10 }}>
          Sign Up
        </Link>
      </Typography>
    </Paper>
  );
};

export default Login;
