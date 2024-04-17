import { Box, Grid,Typography, Button } from '@mui/material';
import { redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CallToAction.css'

import { SignUpButton, SignedOut } from "@clerk/clerk-react";

export const CallToAction = ({paragraph, redirectLink, signUpLink, signUpVariant, learnMoreVariant}) => {
  return (
    <Box>
      <Typography variant='h6'>{paragraph}</Typography>
      <Grid container>
        <Grid className='call-to-action-buttons' xs={6}>
          <Button className={`learn-more ${learnMoreVariant}`} color='primary' variant={learnMoreVariant} size='large' onClick={() => redirect(redirectLink)}>Learn More</Button>
          <SignedOut>
            <SignUpButton>
              <Button className={`sign-up ${signUpVariant === 'text' ? 'hiddenBorder' : ''}`} color='inherit' variant={signUpVariant} size='large'>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </Grid>
      </Grid>
    </Box>
  )
}

CallToAction.propTypes = {
  paragraph: PropTypes.string.isRequired,
  redirectLink: PropTypes.string.isRequired,
  signUpLink: PropTypes.string.isRequired,
  signUpVariant: PropTypes.oneOf(['text', 'outlined']),
  learnMoreVariant: PropTypes.oneOf(['contained', 'outlined'])
}