import { Box, useTheme } from '@mui/material';

export function ButtonSpacer () {
  const theme = useTheme();
  return (<Box margin={theme.spacing(1)} />);
}