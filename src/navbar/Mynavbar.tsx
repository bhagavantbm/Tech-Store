import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Laptops'];
const pages1=['mobile-phones']
const settings1 = ['Profile'];
const settings2=['Dashboard'];
const settings3=['Mycart'];
const settings4=['Logout'];


 export const Mynavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <AppBar position="static" sx={{ backgroundColor: 'yellow',color:'black' }}> {/* Custom AppBar color */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop view */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} /> {/* Custom icon color */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',  // Custom text color
              textDecoration: 'none',
            }}
          >
         TECH
          </Typography>

          {/* Hamburger menu for mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'black' }} /> {/* Custom menu icon color */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile view */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black'}} /> {/* Custom icon color */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black', // Custom text color
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Navigation buttons for desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },color: 'black' }}>
            {pages.map((page) => (
              <Link to='laptop'>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',fontStyle:'italic',fontWeight:'bold' }} // Custom button text color
              >
                {page}
              </Button></Link>
            ))}
            {pages1.map((page) => (
              <Link to='mobile'>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',fontStyle:'italic',fontWeight:'bold' }} // Custom button text color
              >
                {page}
              </Button></Link>
            ))}
          </Box>

          {/* User settings menu */}
          <Link to ='/Login'>
          <Button variant="contained" style={{marginRight:'30px'}}>Login</Button></Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="../static/2.jpeg" style={{color:'steelblue'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings1.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to='/Profile'>
                  <Typography textAlign="center">{setting}</Typography></Link>
                 
                </MenuItem>
                
                
              ))}
              {settings2.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                
                  <Link to='/Dashboard'> 
                  <Typography textAlign="center">{setting}</Typography></Link>
                 
                </MenuItem>
                
                
              ))}
                {settings3.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                
                  <Link to='/Mycart'> 
                  <Typography textAlign="center">{setting}</Typography></Link>
                 
                </MenuItem>
                
                
              ))}
              {settings4.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                
                  <Link to='/Logout'> 
                  <Typography textAlign="center">{setting}</Typography></Link>
                 
                </MenuItem>
                
                
              ))}
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


