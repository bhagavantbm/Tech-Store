import React, { useState } from 'react';
import { Button, Grid, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here, e.g., API call
    console.log("Login attempt:", { email, password });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>  
      <Paper
        style={{
          padding: '50px',
          margin: '20px',
          backgroundColor: 'transparent',
          borderRadius: '20px',
          border: '2px groove crimson'
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: 'lightblue', borderRadius: '40px' }}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            <Link to='/Home'>
            <Button
              variant="contained"
              style={{ color: 'black', backgroundColor: 'lightskyblue', borderRadius: '10px' }}
              onClick={handleLogin}
            >
              Login
            </Button></Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
