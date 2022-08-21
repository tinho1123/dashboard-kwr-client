import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'

interface Props {
  gain: string
}

const MonthGain: React.FC<Props> = ({ gain }) => {
  return (
    <Box>
      <Card elevation={7} sx={{ p: '1rem' }}>
        <Typography>Valor ganho:</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <KeyboardArrowUpIcon sx={{ color:'success.main' }} />
        <Typography variant='h5' color='success.main'>R$ {gain.replace('.', ',')}</Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default MonthGain