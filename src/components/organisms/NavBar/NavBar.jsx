import {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

import { AppBar, Box, Grid, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function NavBar () {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar color='inherit' position="fixed">
      <Toolbar>
        <Grid container spacing={0}>
          <Grid className='left-nav' xs={4}>
            <Box>
              <Typography variant="h6">
                <Link className='links'>Worship Resources</Link>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                <Link className='links'>Music Playlists</Link>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                <Link className='links'>Liturgical Guides</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid className='center-nav' xs={3}>
            <Typography variant="h4">
              MH
            </Typography>
          </Grid>
          <Grid className='right-nav' xs={5}>
            <Box>
              {/* <Button className='menu-button' variant='outlined' size='medium' onClick={handleClick}>Menu</Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu> */}
              {/* <SignedOut>
                <SignInButton/>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn> */}
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
