import { Divider, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
  import { useTheme } from '@mui/material/styles';
import { Home, CurrencyExchange, PeopleAlt, Output } from '@mui/icons-material';

interface Props {
  drawerWidth: number
}

export const Sidebar: React.FC<Props> = ({ drawerWidth }) => {

  const theme = useTheme()
  console.log(theme);
  
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
        variant="permanent"
        anchor="left"
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
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{<Output />}</ListItemIcon>
              <ListItemText>Sair</ListItemText>
            </ListItemButton>
          </ListItem>
          </List>
        </Drawer>
        
    </aside>
  )
}
