import { Link } from 'react-router-dom';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './NavBar.css'
import MHDark from '/MH-dark.svg'
import { navItems } from '../../../constants/navItems';

export default function NavBar () {
  return (
    <AppBar color='inherit' position="fixed" className='app-bar'>
      <Toolbar>
        <Grid container xs={12}>
          <Grid container className='left-nav' xs={5}>
            {navItems.map((item, index) => {
              return (
                <Grid key={item.title[0] + index} item xs={navItems / 12}>
                  <Typography variant="h6">
                    <Link className='links'>{item.title}</Link>
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
          <Grid className='center-nav' xs={2}>
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
