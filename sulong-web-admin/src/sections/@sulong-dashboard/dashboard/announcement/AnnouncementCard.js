import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Card, Avatar, Typography, CardContent } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// utils
import { fDate } from '../../../../utils/formatTime';
// components
import Image from '../../../../components/Image';
// import Iconify from '../../../../components/Iconify';
import TextMaxLine from '../../../../components/TextMaxLine';
// import TextIconLabel from '../../../../components/TextIconLabel';
import SvgIconStyle from '../../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.8),
}));

// ----------------------------------------------------------------------

AnnouncementCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function AnnouncementCard({ post, index }) {
  const isDesktop = useResponsive('up', 'md');
  const { cover, title, author, createdAt } = post;
  // const { coverUrl, title, author, createdAt } = post;

  const latestPost = index === 0 || index === 1 || index === 2;

  if (isDesktop && latestPost) {
    return (
      <Card>
        {/* <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            zIndex: 9,
            top: 24,
            left: 24,
            width: 40,
            height: 40,
            position: 'absolute',
          }}
        /> */}
        <PostContent title={title} createdAt={createdAt} index={index} />
        <OverlayStyle />
        <Image alt="cover" src={cover} sx={{ height: 360 }} />
        {/* <Image alt="cover" src={coverUrl} sx={{ height: 360 }} /> */}
      </Card>
    );
  }

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <SvgIconStyle
          src="https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg"
          sx={{
            width: 80,
            height: 36,
            zIndex: 9,
            bottom: -15,
            position: 'absolute',
            color: 'background.paper',
          }}
        />
        {/* <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            left: 24,
            zIndex: 9,
            width: 32,
            height: 32,
            bottom: -16,
            position: 'absolute',
          }}
        /> */}
        <Image alt="cover" src={cover} ratio="4/3" />
        {/* <Image alt="cover" src={coverUrl} ratio="4/3" /> */}
      </Box>

      <PostContent title={title} createdAt={createdAt} />
    </Card>
  );
}

// ----------------------------------------------------------------------

PostContent.propTypes = {
  createdAt: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
};

export function PostContent({ title, createdAt, index }) {
  const isDesktop = useResponsive('up', 'md');

  const linkTo = `${PATH_DASHBOARD.announcements.root}/${paramCase(title)}`;

  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <Link to={linkTo} color="inherit" component={RouterLink}>
        <TextMaxLine variant={isDesktop && latestPostLarge ? 'h5' : 'subtitle2'} line={2} persistent>
          {title}
        </TextMaxLine>
      </Link>
    </CardContent>
  );
}
