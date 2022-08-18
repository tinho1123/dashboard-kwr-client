import { useTheme } from "@mui/system";
import { useState } from "react";
import { Main } from "../components";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ButtonProvider from "../context/ButtonContext";


const Dashboard = () => {
  const [component, setComponent] = useState('Home');
  const theme = useTheme();
  const drawerWidthSpacing = 30;
  const mobile = window.screen.width < 600;

  return (
    <div>
      <ButtonProvider>
        <Sidebar
          drawerWidth={theme.spacing(drawerWidthSpacing)}
          mobile={mobile}
          setComponent={setComponent}
        />
        <Header
          drawerWidth={theme.spacing(drawerWidthSpacing)}
          mobile={mobile}
        />
        <Main
          component={component}
          drawerWidth={theme.spacing(drawerWidthSpacing)}
          mobile={mobile}
        />
      </ButtonProvider>
    </div>
  );
};

export default Dashboard;
