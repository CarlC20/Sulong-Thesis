import merge from 'lodash/merge';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    year: 'Week',
    data: [
      { name: 'Completed', data: [10, 41, 35] },
      { name: 'Pending', data: [10, 34, 13] },
    ],
  },
  {
    year: 'Month',
    data: [
      { name: 'Completed', data: [148, 91, 69] },
      { name: 'Pending', data: [45, 77, 99] },
    ],
  },
  {
    year: 'Year',
    data: [
      { name: 'Completed', data: [76, 42, 29] },
      { name: 'Pending', data: [80, 55, 34] },
    ],
  },
];

export default function RequestRatio() {
  const [seriesData, setSeriesData] = useState('Year');

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Request & Inquiry', 'Reservation', 'Incident Report'],
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="Total pending and completed"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': { pl: 1, py: 0.5, pr: '24px !important', typography: 'subtitle2' },
              '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'background.neutral' },
              '& .MuiNativeSelect-icon': { top: 4, right: 0, width: 20, height: 20 },
            }}
          >
            {CHART_DATA.map((option) => (
              <option key={option.year} value={option.year}>
                {option.year}
              </option>
            ))}
          </TextField>
        }
      />

      {CHART_DATA.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {item.year === seriesData && (
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={372} />
          )}
        </Box>
      ))}
    </Card>
  );
}
