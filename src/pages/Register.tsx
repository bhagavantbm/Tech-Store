import { Button, Grid, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";

export const Register = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '20px' }}>  
      <Paper
        style={{
          padding: '40px 20px',
          backgroundColor: 'transparent',
          borderRadius: '20px',
          border: '2px groove crimson',
          width: '100%',
          maxWidth: '400px',  // Added max-width to prevent overflow on larger screens
          marginTop: '0',      // Removed excessive top margin
        }}
        className="abcd"
      >
        <center><h1 style={{ color: 'violet', marginTop: '-20px' }}>TECH WORLD</h1></center>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <br />
          <TextField
            id="name"
            label="Name"
            variant="filled"
            style={{ backgroundColor: 'lightblue', borderRadius: '40px', width: '100%' }}  // Full width for better mobile layout
          />
          <br />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            style={{ backgroundColor: 'lightblue', borderRadius: '40px', width: '100%' }}  // Full width for better mobile layout
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
            style={{ backgroundColor: 'lightblue', borderRadius: '40px', width: '100%' }}  // Full width for better mobile layout
          />
          <br />
          <TextField
            id="confirm-password"
            label="Confirm Password"
            type="password"
            variant="filled"
            style={{ backgroundColor: 'lightblue', borderRadius: '40px', width: '100%' }}  // Full width for better mobile layout
          />
          <br />
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            style={{ width: '100%' }}
          >
            <Link to='/Register' style={{ width: '45%' }}>  {/* Adjusted width for better spacing */}
              <Button
                variant="contained"
                style={{ color: 'black', backgroundColor: 'lightskyblue', borderRadius: '10px', width: '100%' }}
              >
                Register
              </Button>
            </Link> 
            <Link to='/Login' style={{ width: '45%' }}>  {/* Adjusted width for better spacing */}
              <Button
                variant="contained"
                style={{ color: 'black', backgroundColor: 'lightskyblue', borderRadius: '10px', width: '100%' }}
              >
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
