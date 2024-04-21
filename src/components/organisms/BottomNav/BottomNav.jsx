import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import MHResponsive from '/MH-responsive.svg'
import './BottomNav.css'

import {bottomNav} from '../../../constants/navItems'
import { ButtonSpacer } from '../../atoms/ButtonSpacer/ButtonSpacer';

export const BottomNav = () => {
  return (
    <Grid container xs={12} sx={{display: 'flex', justifyContent:'space-around', marginTop: '4rem'}}>
      <Grid item xs={3}>
        <img src={MHResponsive} className='bottom-nav-logo' alt="MT Dark Logo" />
      </Grid>
      <Grid item xs={6} sx={{textAlign: 'center',display: 'flex', justifyContent: 'space-around'}}>
        <Link to='/about'>About Us</Link>
        <Link>Contact Us</Link>
        <Link>Support Us</Link>
        <Link>Blog</Link>
      </Grid>
      <Grid item xs={3} sx={{display: 'flex', justifyContent:'flex-end'}}>
        {bottomNav.map((item, index) => {
          return (
            <>
              <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} className='bottom-nav-icon'/>
              </Link>
              <ButtonSpacer/>
            </>
          )
        })}
      </Grid>
    </Grid>
  )
}