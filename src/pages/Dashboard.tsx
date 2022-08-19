import { useTheme } from "@mui/system";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ButtonProvider from "../context/ButtonContext";
import DataContextProvider from "../context/DataContext";

interface Props {
  component: React.ReactNode
}

const Dashboard: React.FC<Props> = ({ component }) => {
  const theme = useTheme();
  const drawerWidthSpacing = 30;
  const mobile = window.screen.width < 600;

  return (
      <DataContextProvider>
        <ButtonProvider>
          <Sidebar
            drawerWidth={theme.spacing(drawerWidthSpacing)}
            mobile={mobile}
          />
          <Header
            drawerWidth={theme.spacing(drawerWidthSpacing)}
            mobile={mobile}
          />
          {component}
        </ButtonProvider>
      </DataContextProvider>

  );
};

export default Dashboard;
