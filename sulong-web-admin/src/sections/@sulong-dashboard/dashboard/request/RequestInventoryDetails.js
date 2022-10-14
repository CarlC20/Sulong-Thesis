import { useState } from 'react';
// @mui
import {
  Box,
  Card,
  Stack,
  Table,
  Button,
  Divider,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableHead,
  CardHeader,
  Typography,
  TableContainer,
} from '@mui/material';

// _mock_
import { _bookings } from '../../../../_mock';
//
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
import MenuPopover from '../../../../components/MenuPopover';
import { RequestPopup, RequestManageItem } from './index';

// ----------------------------------------------------------------------

export default function RequestInventoryDetails() {
  const [openPopup, setOpenPopup] = useState(false);
  // eslint-disable-next-line
  const [quantity, setQuantity] = useState(37);
  // eslint-disable-next-line
  const [newQuantity, setNewQuantity] = useState();

  return (
    <>
      <Card>
        <CardHeader
          title="Requests & Inquiries"
          sx={{ mb: 3 }}
          action={
            <Button
              variant="contained"
              // component={RouterLink}
              // to={PATH_DASHBOARD.announcements.addAnnouncement}
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              Add Item
            </Button>
          }
        />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 150 }}>Item</TableCell>
                  <TableCell sx={{ minWidth: 100 }}>Quantity</TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {_bookings.map((row) => (
                  <TableRow key={row.id}>
                    {/* Item */}
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">{row.name}</Typography>
                      </Stack>
                    </TableCell>

                    {/* Quantity */}
                    <TableCell>{quantity}</TableCell>

                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="flex-end" sx={{ flexGrow: 1 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={() => {
                            setOpenPopup(true);
                          }}
                        >
                          Manage Item
                        </Button>
                      </Stack>
                    </TableCell>

                    <TableCell align="right">
                      <MoreMenuButton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <RequestPopup title="Manage Item" openPopup={openPopup} setOpenPopup={setOpenPopup}>
            <RequestManageItem setNewQuantity={setNewQuantity} />
          </RequestPopup>
        </Scrollbar>
        <Divider />
        {/* <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
            View All
          </Button>
        </Box> */}
      </Card>
    </>
  );
}

// ----------------------------------------------------------------------

function MoreMenuButton() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
// =============================================================
