import { Box, Grid, Typography } from '@mui/material';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import PropTypes from 'prop-types';
import './HeroSectionMedium.css'

export const HeroSectionMedium = ({textSide, title, paragraph, withIcon}) => {
  return (
    <Box className={`heroBoxMedium`}>
      <Grid container spacing={6} className='parentGrid'>
        <Grid item xs={6} className='alignTextCenter'>
          {textSide === 'right' ? (
            <Box>
              {withIcon && <MenuBookRoundedIcon fontSize='large'/>}
              <Typography variant='h3' className='title'>{title}</Typography>
              <Typography variant='h6' className='body'>{paragraph}</Typography>
            </Box>
            ) : (
              <div className='heroImageMedium'>
                {/* <img
                    className='heroImageLarge'
                    alt=""
                    src=""
                  /> */}
              {/*to be remove when img is ready */}
              </div>
              )}
        </Grid>
        <Grid item xs={6} className='alignTextCenter'>
            {textSide === 'right' ? (
              <div className='heroImageMedium'>
                {/* <img
                    className='heroImageLarge'
                    alt=""
                    src=""
                  /> */}
              {/*to be remove when img is ready */}
              </div>
            ) : (
              <Box>
                {withIcon && <MenuBookRoundedIcon fontSize='large'/>}
                <Typography variant='h3' className='title'>{title}</Typography>
                <Typography variant='h6' className='body'>{paragraph}</Typography>
              </Box>
            )}
        </Grid>
      </Grid>
    </Box>
  )
}

HeroSectionMedium.propTypes = {
  textSide: PropTypes.oneOf(['right']), 
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  withIcon: PropTypes.bool
}