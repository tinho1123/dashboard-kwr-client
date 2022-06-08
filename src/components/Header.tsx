import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

interface Props {
  drawerWidth: number;
}
const date = new Date().toLocaleDateString('pt-br', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

export const Header: React.FC<Props> = ({ drawerWidth }) => {
  const [dateCount, setDateCount] = useState(date);

  setInterval(() => {
    setDateCount(new Date().toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }))
  }, 1000)
  
return (
  <Box>
    <AppBar
    position='fixed'
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
    <Toolbar>
      <Typography variant='h6' noWrap component='div'>
        {dateCount}
      </Typography>
    </Toolbar>
    </AppBar>
  </Box>
  )
}
