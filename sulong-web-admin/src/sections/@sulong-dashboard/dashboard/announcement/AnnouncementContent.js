import PropTypes from 'prop-types';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, Typography, IconButton } from '@mui/material';

// utils
import { fDate } from '../../../../utils/formatTime';
// components
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

const OverlayStyle = styled('h1')(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
}));

const TitleStyle = styled('h1')(({ theme }) => ({
  ...theme.typography.h2,
  top: 0,
  zIndex: 10,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10),
  },
}));

const FooterStyle = styled('div')(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'flex-end',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

AnnouncementContent.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function AnnouncementContent({ post }) {
  const { cover, title, author, createdAt } = post;
  // const { coverUrl, title, author, createdAt } = post;

  return (
    <Box sx={{ position: 'relative' }}>
      <TitleStyle>{title}</TitleStyle>

      <FooterStyle>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <Avatar alt={author.name} src={author.avatarUrl} sx={{ width: 48, height: 48 }} /> */}
          <Box sx={{ ml: 2 }}>
            {/* <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
              {author.name}
            </Typography> */}
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              {fDate(createdAt)}
            </Typography>
          </Box>
        </Box>

        <IconButton variant="contained" color="error">
          <Iconify icon="ant-design:delete-filled" />
        </IconButton>
      </FooterStyle>

      <OverlayStyle />
      <Image alt="post cover" src={cover} ratio="16/9" />
      {/* <Image alt="post cover" src={coverUrl} ratio="16/9" /> */}
    </Box>
  );
}
