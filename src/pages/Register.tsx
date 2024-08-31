import React, { useState } from 'react';  // Added useState for managing input values
import { Button, Grid, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";

export const Login = () => {
  const [email, setEmail] = useState("");   // Added state for email
  const [password, setPassword] = useState(""); // Added state for password

  const handleLogin = () => {  // Added a function to handle the login action
    // Add your login logic here, e.g., API call
    console.log("Login attempt:", { email, password });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>  // Adjusted layout for better centering
      <Paper
        style={{
          padding: '50px',  // Reduced padding for better layout on smaller screens
          margin: '20px',  // Reduced margin for smaller screens
          backgroundColor: 'transparent',
          borderRadius: '20px',  // Adjusted border-radius
          border: '2px groove crimson'  // Simplified border style
        }}
        className="abcd"
      >
        <center><h1 style={{ color: 'violet' }}>TECH WORLD</h1></center>
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <br />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            value={email}  // Controlled input linked to state
            onChange={(e) => setEmail(e.target.value)}  // Update state on change
            style={{ backgroundColor: 'lightblue', borderRadius: '40px' }}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"  // Added type="password" for password input
            variant="filled"
            value={password}  // Controlled input linked to state
            onChange={(e) => setPassword(e.target.value)}  // Update state on change
            style={{ backgroundColor: 'lightblue', borderRadius: '40px' }}
          />
          <br />
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
            <Link to='/Register'>
              <Button
                variant="contained"
                style={{ color: 'black', backgroundColor: 'lightskyblue', borderRadius: '10px' }}
              >
                Register
              </Button>
            </Link>
            <Button
              variant="contained"
              style={{ color: 'black', backgroundColor: 'lightskyblue', borderRadius: '10px' }}
              onClick={handleLogin}  // Attached the handleLogin function to the Login button
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
