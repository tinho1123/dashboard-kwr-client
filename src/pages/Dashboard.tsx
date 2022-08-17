import { useTheme } from "@mui/system";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import ButtonProvider from "../context/ButtonContext";

const Dashboard = () => {
  const theme = useTheme();
  const drawerWidthSpacing = 30;
  const mobile = window.screen.width < 600;

  return (
    <div>
      <ButtonProvider>
        <Sidebar
          drawerWidth={theme.spacing(drawerWidthSpacing)}
          mobile={mobile}
        />
        <Header
          drawerWidth={theme.spacing(drawerWidthSpacing)}
          mobile={mobile}
        />
        <Main />
      </ButtonProvider>
    </div>
  );
};

export default Dashboard;
