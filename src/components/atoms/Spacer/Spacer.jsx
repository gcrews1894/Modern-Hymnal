import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';


export function Spacer () {
  const theme = useTheme();
  return (<Box margin={theme.spacing(2)} />);
}