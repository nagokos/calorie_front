import {
  Dialog,
  DialogTitle,
  Theme,
  IconButton,
  DialogContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { memo, VFC } from 'react';

import { SignupForm } from '../index';

type Props = {
  dialog: boolean;
  closeDialog: () => void;
};

export const SignupDialog: VFC<Props> = memo((props) => {
  const { dialog, closeDialog } = props;

  return (
    <Dialog
      PaperProps={{
        style: { width: 500 },
      }}
      onClose={closeDialog}
      open={dialog}
    >
      <DialogTitle
        sx={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          mt: 3,
          mb: 2,
        }}
      >
        Sign Up
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeDialog}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme: Theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ pt: 0, pb: 5 }}>
        <SignupForm />
      </DialogContent>
    </Dialog>
  );
});
