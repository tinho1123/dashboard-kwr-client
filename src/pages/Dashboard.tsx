import { useTheme } from '@mui/system'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  const theme = useTheme()
  console.log(theme);
  
  return (
    <div>
      <Sidebar drawerWidth={240}/>
      <Header drawerWidth={240} />
    </div>
  )
}

export default Dashboard;