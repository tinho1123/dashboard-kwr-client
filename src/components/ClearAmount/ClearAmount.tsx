import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import React from 'react'

interface Props {
  gain: string;
  loss: string;
}

const ClearAmount: React.FC<Props> = ({ gain, loss }) => {
  const clearAmount = (+gain - +loss).toFixed(2).toString()
  console.log(clearAmount);
    
  return (
    <Box sx={{ m: '1rem', maxWidth: 'fit-content' }}>
    <Card elevation={7} sx={{ p: '1rem' }}>
      <Typography>Lucro Líquido:</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {+clearAmount > 0
        ? (
        <>
          <KeyboardArrowUp sx={{ color:'success.main' }} />
          <Typography variant='h5' color='success.main'>R$ {clearAmount.replace('.', ',')}</Typography>
        </>
        ) : +clearAmount < 0
        ? (
        <>
          <KeyboardArrowDown sx={{ color:'error.main' }} />
          <Typography variant='h5' color='error.main'>R$ {clearAmount.replace('.', ',')}</Typography>
        </>
        ): (
          <Typography variant='h5' color='grey.A700'>R$ {clearAmount.replace('.', ',')}</Typography>        )}
        
      </Box>
    </Card>
  </Box>
  )
}

export default ClearAmount