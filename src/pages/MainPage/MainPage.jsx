import { Box, Grid } from '@mui/material';

import './MainPage.css'
import NavBar from '../../components/organisms/NavBar/NavBar.jsx';

import { HeroSectionLarge } from '../../components/organisms/HeroSection/HeroSectionLarge.jsx';
import { HeroSectionMedium } from '../../components/organisms/HeroSectioinMedium/HeroSectionMedium.jsx';

export const MainPage = () => {
  return (
    <Box className='page'>
      <NavBar />
      <Grid container className='page-content' height={'auto'}>
        <Grid item xs={12}>
          <HeroSectionLarge
            textSide={'right'}
            title={'Inspiring a Reformation in Christian Worship Practices'}
            paragraph={'The Modern Hymnal is dedicated to curating biblically rich and theologically deep resources that inspire a reformation in Christian worship practices. With values rooted in gospel centrality, historical connectednedd, and theological richness, we provide music playlists, educational materials, curated worship elements, and liturgical guides that connect individuals and churches to the worship traditions of the historic church.'}
            signUpVariant={'outlined'}
            learnMoreVariant={'contained'}
            imageName={'fieldChurch'}
          />
        </Grid>
        <Grid item xs={12}>
          <HeroSectionLarge
            textSide={'right'}
            title={'Gospel Centrality: The Heart of Worship'}
            paragraph={"At The Modern Hymnal, we believe that gospel centrality is essential in worship practices. By placing the gospel message at the center of our worship, we are reminded of God's love, grace, and redemption. It is through the gospel that we find true meaning and purpose in our worship, and it is through the gospel that lives are transformed."}
            signUpVariant={'text'}
            learnMoreVariant={'outlined'}
            imageName={'steeple'}
          />
        </Grid>
        <Grid item xs={12}>
          <HeroSectionMedium
            withIcon
            textSide={'right'}
            title={'Embrace the richness of worship traditions with our curated resources.'}
            paragraph={"Historical connectedness in worship traditions provides a sense of sense of continuity and depth, allowing individuals and churches to tap into the wisdom and experiences of those who have gone before us."}
          />
        </Grid>
        <Grid item xs={12}>
          <HeroSectionLarge
            textSide={'left'}
            title={'Deepening Worship Through Theological Richness'}
            paragraph={"At The Modern Hymnal, we believe that theological richness is of utmost importance in worship resources. Our curated music playlists, educational materials, worship elements, and liturgical guides are designed to connect individuals and churches to the worship traditions of the historic church. By emphasizing gospel centrality, historical connectedness, and theological depth, we aim to inspire a reformation in Christian worship practices."}
            signUpVariant={'text'}
            learnMoreVariant={'outlined'}
            imageName={'hymnal'}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
