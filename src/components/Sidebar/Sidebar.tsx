import { Divider, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Home, CurrencyExchange, PeopleAlt, Output, SportsBar } from '@mui/icons-material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { ButtonContext } from '../../context/ButtonContext'

interface Props {
  drawerWidth: string;
  mobile: boolean,
}

const Sidebar: React.FC<Props> = ({ drawerWidth, mobile }) => {
  const navigate = useNavigate();
  const { openDrawer, toogleDrawer }: any = useContext(ButtonContext)

    return (
    <aside>
        <Drawer
        sx={{ 
          width: drawerWidth,
          display: 'flex',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={ mobile ? 'temporary' : 'permanent' }
        anchor="left"
        open={openDrawer}
        onClose={toogleDrawer}
        >
          <Toolbar 
          sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Typography variant='h6' component="div">KWR Gestão</Typography>
          </Toolbar>

        <Divider />

        <List sx={{ flex: 1 }}>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<Home/>}</ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<SportsBar/>}</ListItemIcon>
              <ListItemText>Produtos</ListItemText>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<CurrencyExchange/>}</ListItemIcon>
              <ListItemText>Vendas</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<PeopleAlt/>}</ListItemIcon>
              <ListItemText>Fiados</ListItemText>
            </ListItemButton>
          </ListItem>

        </List>

        <Divider />
          <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {
              localStorage.removeItem('admin')
              navigate('/')
            }}>
              <ListItemIcon>{<Output />}</ListItemIcon>
              <ListItemText>Sair</ListItemText>
            </ListItemButton>
          </ListItem>
          </List>
        </Drawer>
        
    </aside>
  )
}

export default Sidebar;