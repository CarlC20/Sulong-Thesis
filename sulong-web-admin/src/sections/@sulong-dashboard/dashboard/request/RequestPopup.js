import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';

RequestPopup.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  openPopup: PropTypes.bool,
  setOpenPopup: PropTypes.bool,
};

export default function RequestPopup(props) {
  // eslint-disable-next-line
  const { title, children, openPopup, setOpenPopup } = props;
  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Dialog maxWidth="md" open={openPopup}>
      <DialogTitle sx={{ display: 'flex' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button onClick={handleClose} color="error">
          X
        </Button>
      </DialogTitle>
      <DialogContent sx={{ p: 5 }}>{children}</DialogContent>
    </Dialog>
  );
}
