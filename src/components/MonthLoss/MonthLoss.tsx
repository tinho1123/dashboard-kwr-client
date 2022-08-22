import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'

interface Props {
  loss: string
}

const MonthLoss: React.FC<Props> = ({ loss }) => {
  return (
    <Box sx={{ m: '1rem', maxWidth: 'fit-content' }}>
    <Card elevation={7} sx={{ p: '1rem' }}>
      <Typography>Gastos:</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <KeyboardArrowDownIcon sx={{ color:'error.main' }} />
      <Typography variant='h5' color='error.main'>R$ -{loss.replace('.', ',')}</Typography>
      </Box>
    </Card>
  </Box>
  )
}

export default MonthLoss