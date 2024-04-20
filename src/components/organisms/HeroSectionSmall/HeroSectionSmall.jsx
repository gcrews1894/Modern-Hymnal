import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './HeroSectionSmall.css'

export const HeroSectionSmall = ({textAlign, action, heading, text}) => {
  return (
    <Box className={`heroBoxSmall ${textAlign}`}>
      <Grid container className='hero-box-small' height={'auto'}>
        <Grid item xs={12}>
          <Typography variant='subtitle'>{action}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h1'>{heading}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

HeroSectionSmall.propTypes = {
  textAlign: PropTypes.oneOf(['right', 'left', 'center']), 
  action: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string
}