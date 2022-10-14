import { useState } from 'react';
import { format } from 'date-fns';
import { sentenceCase } from 'change-case';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Stack,
  Table,
  Avatar,
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
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
import MenuPopover from '../../../../components/MenuPopover';

// ----------------------------------------------------------------------

export default function ReservationDetails() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <>
      <Card>
        <CardHeader title="Reservations" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 240 }}>User</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Date</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>E-mail</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Event</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Facility</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Request Letter</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {_bookings.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={row.name} src={row.avatar} />
                        <Typography variant="subtitle2">{row.name}</Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>{format(new Date(row.checkIn), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{format(new Date(row.checkOut), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{format(new Date(row.checkOut), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{format(new Date(row.checkOut), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{format(new Date(row.checkOut), 'dd MMM yyyy')}</TableCell>

                    <TableCell>
                      <Label
                        variant={isLight ? 'ghost' : 'filled'}
                        color={(row.status === 'completed' && 'success') || (row.status === 'pending' && 'warning')}
                      >
                        {sentenceCase(row.status)}
                      </Label>
                    </TableCell>

                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="flex-end" sx={{ flexGrow: 1 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="info"
                          endIcon={<Iconify icon={'eva:checkmark-circle-2-outline'} />}
                        >
                          Complete
                        </Button>
                        <Button
                          fullWidth
                          variant="contained"
                          color="error"
                          endIcon={<Iconify icon={'eva:close-circle-fill'} />}
                        >
                          Reject
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
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
            View All
          </Button>
        </Box>
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
        <MenuItem>
          <Iconify icon={'eva:download-fill'} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:printer-fill'} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}
