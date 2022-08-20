import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Box } from '@mui/system';

interface Props {
  chartData: any
}

const LineChart: React.FC<Props> = ({ chartData }) => {
  return (
    <Box sx={{ width: '500px'}}>
      <Line data={chartData}  />
    </Box>
  ) 
}

export default LineChart