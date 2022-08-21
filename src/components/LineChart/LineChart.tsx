import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

interface Props {
  chartData: any;
  optionsData: any;
}

const LineChart: React.FC<Props> = ({ chartData, optionsData }) => {
  return (
    <Box sx={{ width: '500px'}}>
      <Paper elevation={7}>
        <Line data={chartData} options={optionsData} />
      </Paper>  
    </Box>
  ) 
}

export default LineChart