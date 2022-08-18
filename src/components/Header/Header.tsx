import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { useContext, useState } from 'react';
import { Dehaze } from '@mui/icons-material';
import { ButtonContext } from '../../context/ButtonContext'
interface Props {
  drawerWidth: string;
  mobile: boolean;
}
const date = new Date().toLocaleDateString('pt-br', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const Header: React.FC<Props> = ({ drawerWidth, mobile }) => {
  const [dateCount, setDateCount] = useState(date);
  const { toogleDrawer }: any = useContext(ButtonContext)
  
  
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
  <Box >
    <AppBar
    position='fixed'
    sx={{ width: `calc(100% - ${mobile ? 0: drawerWidth})`, ml: `${mobile ? 0 : drawerWidth}` }}
    >
    <Toolbar>
      {mobile && 
      
        <Dehaze 
          style={{ marginRight: '20px'}}
          onClick={toogleDrawer} 
        />
        
      }
      <Typography variant='h6' noWrap component='div'>
        {dateCount}
      </Typography>
    </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header;