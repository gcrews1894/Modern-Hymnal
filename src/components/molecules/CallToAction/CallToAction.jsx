import { Grid, Typography, Button } from '@mui/material';
import { redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CallToAction.css'

import { SignUpButton, SignedOut } from "@clerk/clerk-react";
import { ButtonSpacer } from '../../atoms/ButtonSpacer/ButtonSpacer';

export const CallToAction = ({paragraph, redirectLink, signUpVariant, learnMoreVariant, alignment}) => {
  return (
    <Grid container xs={12}>
      {paragraph && <Typography variant='h6'>{paragraph}</Typography>}
      <Grid container xs={12} className={`call-to-action-buttons ${alignment}`}>
        <Button className={`learn-more ${learnMoreVariant}`} color='primary' variant={learnMoreVariant} size='large' onClick={() => redirect(redirectLink)}>Learn More</Button>
        <ButtonSpacer/>
        <SignedOut>
          <SignUpButton>
            <Button className={`sign-up ${signUpVariant === 'text' ? 'hiddenBorder' : ''}`} color='inherit' variant={signUpVariant} size='large'>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
      </Grid>
    </Grid>
  )
}

CallToAction.propTypes = {
  paragraph: PropTypes.string,
  redirectLink: PropTypes.string.isRequired,
  signUpVariant: PropTypes.oneOf(['text', 'outlined']),
  learnMoreVariant: PropTypes.oneOf(['contained', 'outlined']),
  alignment: PropTypes.oneOf(['center', 'left', 'right'])
}