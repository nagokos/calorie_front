import { Card, Container, Typography, Box, Grid, Button } from '@mui/material';
import { memo, useState, VFC } from 'react';

import { SignupDialog } from '../components/index';

export const Login: VFC = memo(() => {
  const [dialog, setDialog] = useState<boolean>(false);

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <Container sx={{ mt: 22 }}>
        <Box sx={{ mx: 'auto' }}>
          <Card elevation={0} sx={{ bgcolor: '#EDEFFE', borderRadius: 3 }}>
            <Grid container>
              <Grid item xs={6}>
                <Box ml={10}>
                  <Typography
                    fontWeight="bold"
                    marginTop={17}
                    textAlign="left"
                    variant="h4"
                  >
                    Are you ready to lose weight?
                  </Typography>
                  <Typography
                    color="text.secondary"
                    marginTop={2}
                    textAlign="left"
                    variant="h5"
                  >
                    そろそろ痩せませんか？
                  </Typography>
                  <Box textAlign="left">
                    <Button
                      onClick={openDialog}
                      color="purple"
                      sx={{ mt: 3, mr: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Button variant="outlined" color="purple" sx={{ mt: 3 }}>
                      Sign Up With Google
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box mt={9} mb={3}>
                  <img
                    width={500}
                    alt="fitness"
                    src="src/assets/img/Coach-bro.svg"
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
      <SignupDialog dialog={dialog} closeDialog={closeDialog} />
    </>
  );
});
