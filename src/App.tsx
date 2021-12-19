import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './assets/theme/Theme';
import { Router } from './router/Router';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};
