import { Box, Grid } from '@mui/material';

import NavBar from '../../components/organisms/NavBar/NavBar.jsx';

import { BottomNav } from '../../components/organisms/BottomNav/BottomNav.jsx';
import { Spacer } from '../../components/atoms/Spacer/Spacer.jsx';

export const ContactPage = () => {
  return (
    <Box className='page'>
      <NavBar />
      <Grid container className='page-content' height={'auto'}>
        Contact
      </Grid>
      <BottomNav/>
      <Spacer/>
    </Box>
  )
}