import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './HeroSectionSmall.css'

export const HeroSectionSmall = ({textAlign, action, heading, text}) => {
  return (
    <Box className={`heroBoxSmall ${textAlign}`}>
      <Grid container className='hero-box-small' height={'auto'} xs={6}>
        <Grid item xs={12}>
          <Typography variant='subtitle2' fontSize={18}>{action}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h2' gutterBottom>{heading}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' fontSize={24}>{text}</Typography>
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