import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { CallToAction } from '../../molecules/CallToAction/CallToAction';
import './HeroSectionLarge.css'

import steeple from '/steeple.jpg'
import fieldChurch from '/fieldChurch.jpg'
import hymnal from '/hymnal.jpeg'

export const HeroSectionLarge = ({textSide, title, paragraph, redirectURL, signUpLink, signUpVariant, learnMoreVariant, imageName}) => {
  const images = {
    steeple: steeple,
    fieldChurch: fieldChurch,
    hymnal: hymnal
  }

  return (
    <Box className={`heroBox`}>
      <Grid container spacing={6} className='parentGrid'>
        <Grid item xs={6}>
          {textSide === 'right' ? (
            <Typography variant='h2' className='title'>{title}</Typography>
          ) : (
            <CallToAction paragraph={paragraph} redirectLink={redirectURL} signUpLink={signUpLink} signUpVariant={signUpVariant} learnMoreVariant={learnMoreVariant}/>
          )}
        </Grid>
        <Grid item xs={6}>
            {textSide === 'right' ? (
              <CallToAction paragraph={paragraph} redirectLink={redirectURL} signUpLink={signUpLink} signUpVariant={signUpVariant} learnMoreVariant={learnMoreVariant}/>
            ) : (
              <Typography variant='h2'>{title}</Typography>
            )}
        </Grid>
        <Grid item xs={12} className='center'>
          {/* <div className='heroImageLarge'/> to be remove when img is ready */}
          <img
              className='heroImageLarge'
              alt=""
              src={images[imageName]}
            />
        </Grid>
      </Grid>
    </Box>
  )
}

HeroSectionLarge.propTypes = {
  textSide: PropTypes.oneOf(['right']), 
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
  signUpLink: PropTypes.string.isRequired,
  signUpVariant: PropTypes.oneOf(['text', 'outlined']),
  learnMoreVariant: PropTypes.oneOf(['contained', 'outlined']),
  imageName: PropTypes.oneOf(['steeple', 'fieldChurch'])
}