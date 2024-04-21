import { Box, Grid } from '@mui/material';
import './AboutPage.css'

import NavBar from '../../components/organisms/NavBar/NavBar.jsx';

import { BottomNav } from '../../components/organisms/BottomNav/BottomNav.jsx';
import { HeroSectionMedium } from '../../components/organisms/HeroSectioinMedium/HeroSectionMedium.jsx';
import { Spacer } from '../../components/atoms/Spacer/Spacer.jsx';

export const AboutPage = () => {
  return (
    <Box className='page'>
      <NavBar />
      <Grid container className='page-content' height={'auto'}>
        <Grid item xs={12}>
          About
        </Grid>
        <Grid item xs={12}>
          <HeroSectionMedium
            textSide={'right'}
            title={'Experience the Richness of Historic Worship.'}
            paragraph={"The Modern Hymnal benefits individuals and churches by connecting them to the rich worhsip traditions of the historic church. Through our curated music playlists, educational materials, worship elements, and liturgical guides, we provide a pathway to a deeper, more meaningful worship experience."}
          />
        </Grid>
      </Grid>
      <BottomNav/>
      <Spacer/>
    </Box>
  )
}