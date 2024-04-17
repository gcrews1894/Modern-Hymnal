import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { appTheme } from "./theme";


import AppRoutes from './AppRoutes';

function App() {
  const theme = createTheme(appTheme);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
