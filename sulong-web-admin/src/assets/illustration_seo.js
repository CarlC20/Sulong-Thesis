// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function SeoIllustration({ ...other }) {
  const theme = useTheme();
  const PRIMARY_LIGHTER = theme.palette.primary.lighter;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;
  const PRIMARY_DARKER = theme.palette.primary.darker;

  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 480 360"
      >
        <defs>
          <linearGradient id="BG" x1="19.496%" x2="77.479%" y1="71.822%" y2="16.69%">
            <stop offset="0%" stopColor={PRIMARY_MAIN} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g>
            <path
              fill="url(#BG)"
              fillRule="nonzero"
              d="M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z"
              opacity="0.2"
            />
            <path
              stroke={PRIMARY_MAIN}
              strokeDasharray="3"
              strokeWidth="2"
              d="M109.63 93.131s-81.642 36.268-84.452 86.768c-2.81 50.499 149.6 41.393 182.928 63.17 33.328 21.776 177.776 54.87 174.992 16.937-2.784-37.933-37.101-51.02-37.101-51.02"
              opacity="0.24"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M323.414 256.208l-49.823-132.95a11.374 11.374 0 00-10.641-7.363H53.147a11.369 11.369 0 00-11.344 11.37c.004 1.157.18 2.305.52 3.409l48.21 150.9a11.319 11.319 0 0011.76 7.806l211.469-17.952a11.373 11.373 0 0010.407-12.254 11.806 11.806 0 00-.755-2.966z"
              opacity="0.12"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M47.943 117.379l48.288 150.979a11.4 11.4 0 0011.786 7.805l63.326-5.36 148.013-12.644a11.316 11.316 0 009.904-7.823c.456-1.421.627-2.918.503-4.405a12.314 12.314 0 00-.729-3.122l-11.838-31.221-21.412-57.238-16.599-44.23a11.37 11.37 0 00-10.641-7.362H58.74A11.345 11.345 0 0047.397 114.1c.015 1.114.2 2.219.546 3.278z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M170.575 270.868l-62.558 5.295a11.4 11.4 0 01-11.785-7.805l-48.289-150.98a11.028 11.028 0 01-.546-3.277 11.34 11.34 0 0111.343-11.343h57.453l54.382 168.11z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M227.879 186.029c2.613-.162 4.368-2.75 3.553-5.237l-8.483-25.895a4.002 4.002 0 00-3.993-2.75l-61.621 2.96c-2.666.129-4.461 2.783-3.588 5.305l9.248 26.717a3.999 3.999 0 004.028 2.683l60.856-3.783zM244.879 234.029c2.613-.162 4.368-2.75 3.553-5.237l-8.483-25.895a4.002 4.002 0 00-3.993-2.75l-61.621 2.96c-2.666.129-4.461 2.783-3.588 5.305l9.248 26.717a3.999 3.999 0 004.028 2.683l60.856-3.783zM253.012 129.347l15.948 52.893a4.007 4.007 0 003.903 2.94l39.559-1.142a2 2 0 001.816-2.7l-20.001-53.4a2 2 0 00-1.755-1.295l-35.906-2.11a3.612 3.612 0 00-3.059 1.462 3.614 3.614 0 00-.505 3.352z"
              opacity="0.18"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M350.082 169.232l-16.495-46.701a4.03 4.03 0 00-3.512-2.732l-69.518-4.111a3.676 3.676 0 00-3.061 1.48 3.663 3.663 0 00-.53 3.359l15.949 52.92a4.057 4.057 0 003.902 2.966l70.091-2.108a3.663 3.663 0 002.898-1.716 3.667 3.667 0 00.276-3.357z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M326.33 161.777c.478 1.24.717 1.86 1.228 2.212.512.35 1.176.35 2.505.35h.314c2.649 0 3.973 0 4.569-.868.596-.87.118-2.105-.839-4.574l-1.586-4.1c-.479-1.236-.718-1.854-1.229-2.204-.511-.351-1.175-.351-2.501-.351h-.305c-2.644 0-3.966 0-4.562.868-.596.868-.121 2.102.829 4.569l1.577 4.098zM304.397 161.779c.478 1.24.717 1.86 1.228 2.21.512.352 1.176.352 2.505.352h.315c2.648 0 3.973 0 4.568-.87.596-.87.118-2.105-.838-4.575l-2.705-6.986c-.479-1.237-.718-1.855-1.229-2.205-.511-.35-1.175-.35-2.501-.35h-.303c-2.645 0-3.967 0-4.563.868-.596.868-.12 2.102.831 4.57l2.692 6.986zM293.442 161.784c.479 1.237.718 1.856 1.229 2.206.511.35 1.175.35 2.502.35h.32c2.648 0 3.972 0 4.568-.87.596-.868.118-2.103-.838-4.573l-9.445-24.417c-.479-1.238-.718-1.856-1.229-2.207-.511-.35-1.175-.35-2.502-.35h-.32c-2.648 0-3.972 0-4.568.869-.596.87-.118 2.104.837 4.574l9.446 24.418z"
            />
            <path
              fill={PRIMARY_DARKER}
              fillRule="nonzero"
              d="M315.375 161.784c.478 1.237.718 1.856 1.229 2.206.511.35 1.174.35 2.501.35h.32c2.648 0 3.972 0 4.568-.87.596-.868.118-2.103-.837-4.573l-6.427-16.612c-.479-1.238-.719-1.856-1.23-2.207-.511-.35-1.174-.35-2.501-.35h-.32c-2.648 0-3.972 0-4.568.87-.596.869-.118 2.104.837 4.573l6.428 16.613z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M282.463 161.782c.479 1.239.718 1.858 1.229 2.208.511.35 1.175.35 2.502.35h.322c2.647 0 3.97 0 4.566-.868.596-.87.119-2.104-.835-4.573l-12.935-33.472c-.479-1.238-.718-1.857-1.229-2.207-.511-.351-1.175-.351-2.502-.351h-.322c-2.647 0-3.97 0-4.566.869-.596.869-.119 2.104.835 4.573l12.935 33.47z"
            />
            <path
              fill={PRIMARY_LIGHTER}
              fillRule="nonzero"
              d="M78.02 149.979a15.22 15.22 0 11.312 1.015l-.156-.495-.157-.52zM111.296 246.58a15.298 15.298 0 0129.321-8.428v.494c0 .156 0 .338.182.494a15.272 15.272 0 01-28.619 10.407c-.156-.494-.286-.99-.442-1.483-.156-.494-.26-.988-.442-1.483zM95.737 193.116a15.272 15.272 0 1130.544 0v1.066a15.271 15.271 0 11-30.544 0v-1.066z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M93.213 145.79l-3.59-11.525a12.641 12.641 0 013.122-.547 12.103 12.103 0 0111.994 8.456c.312 1.014.496 2.062.546 3.122a13.006 13.006 0 01-.286 3.148 11.815 11.815 0 01-2.914 5.516 11.915 11.915 0 01-11.525 3.59 13.21 13.21 0 01-2.94-1.067 12.76 12.76 0 01-2.602-1.821 12.257 12.257 0 01-3.33-5.203l11.525-3.67zM110.801 193.61v-12.072c2.112.016 4.183.58 6.01 1.639a11.366 11.366 0 012.602 1.925 12.027 12.027 0 01-.005 17.068 12.022 12.022 0 01-5.433 3.096 11.575 11.575 0 01-6.244 0 12.202 12.202 0 01-2.914-1.171l5.984-10.485zM126.229 243.355l-3.746-11.474a12.42 12.42 0 016.244-.338 12.077 12.077 0 019.548 11.188 11.417 11.417 0 01-.26 3.122 11.83 11.83 0 01-1.04 2.966 11.976 11.976 0 01-6.921 6.01l-3.746-11.5-.079.026z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M151.154 70.8081996L124.486 83.1403996 128.987 98.8547996z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M151.154 70.8081996L109.604 70.8081996 122.249 78.5352996z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M117.435 90.0869996L124.486 83.1403996 151.154 70.8081996 122.249 78.5352996z"
            />
            <path
              fill={PRIMARY_MAIN}
              fillRule="nonzero"
              d="M117.435 90.0869996L124.486 83.1403996 151.154 70.8081996z"
            />
            <path
              fill={PRIMARY_DARK}
              fillRule="nonzero"
              d="M117.435 90.0869996L124.486 83.1403996 151.154 70.8081996 122.249 78.5352996z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
