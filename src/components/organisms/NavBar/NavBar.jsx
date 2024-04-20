import { Link } from 'react-router-dom';
import './NavBar.css'
import MHDark from '/MH-dark.svg'

import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function NavBar () {
  return (
    <AppBar color='inherit' position="fixed" className='app-bar'>
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
            <img src={MHDark} className='nav-logo' alt="MT Dark Logo" />
          </Grid>
          <Grid className='right-nav' xs={5}>
            <Box>
              <SignedOut>
                <SignInButton/>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
