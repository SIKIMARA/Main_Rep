import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LocationVoiture from "../../Images/transparentvw.png";
const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const btnStyle = { backgroundColor: "#dfc482" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper style={{ width: 350, padding: 20 }}>
        <Grid align="center">
          <img
            src={LocationVoiture}
            height={70}
            width={160}
            style={{ marginTop: 10 }}
          />
          <h2 style={{ color: "#dfc482" }}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" />
          <TextField fullWidth label="Email" placeholder="Enter your email" />

          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#dfc482", marginTop: 10 }}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
