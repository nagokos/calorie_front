import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './assets/theme/Theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Sign Up</Button>
    </ThemeProvider>
  );
};
