import { Snackbar } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

const Toasty = ({ open, text, severity, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Toasty;
