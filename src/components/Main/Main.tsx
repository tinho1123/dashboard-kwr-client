import { Box } from '@mui/material';
import React from 'react'
import Home from '../Home/Home';

interface Props {
  component: string;
  drawerWidth: string;
  mobile: boolean;
}

const Main: React.FC<Props> = ({ component, drawerWidth, mobile }) => {
  return (
    <Box sx={{ width: `100% - ${mobile ? 0 : drawerWidth}`, mt: '4rem', ml: `${mobile ? 0 : drawerWidth}` }}>
      <Home />
    </Box>
  )
}

export default Main