import { useTheme } from '@mui/system'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  const theme = useTheme()
  const drawerWidthSpacing = 30
  const mobile = window.screen.width < 600
  
  return (
    <div>
      <Sidebar drawerWidth={theme.spacing(drawerWidthSpacing)} mobile={mobile}/>
      <Header drawerWidth={theme.spacing(drawerWidthSpacing)} mobile={mobile} />
    </div>
  )
}

export default Dashboard;