import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

RequestDescription.propTypes = {
  description: PropTypes.string,
};

export default function RequestDescription(props) {
  const { description } = props;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}
