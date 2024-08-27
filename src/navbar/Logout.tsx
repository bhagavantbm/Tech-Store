import { Button, Grid, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Logout = () => {
  // Function to close the tab
  const handleLogoutClick = () => {
    if (window.confirm("Are you sure you want to logout and close the tab?")) {
      window.close();
    }
  };

  return (
    <>
      <Paper
        style={{
          height: '200px',
          width: '500px',
          backgroundColor: 'lightsalmon',
          padding: '20px',
          marginTop: '190px',
          marginLeft: '500px',
          borderRadius: '50px'
        }}
      >
        <center>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <br />
            <TextField
              id="outlined-basic"
              label="Enter your password"
              variant="outlined"
            />
            <br />
            <Link to="#">
              <Button onClick={handleLogoutClick} variant="contained">
                Logout
              </Button>
            </Link>
            <br />
          </Grid>
        </center>
      </Paper>
    </>
  );
};

export default Logout;
