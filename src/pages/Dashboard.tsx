import { Box } from "@mui/material";
import { useTheme } from "@mui/system";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ButtonProvider from "../context/ButtonContext";
interface Props {
  component: React.ReactNode
}

const Dashboard: React.FC<Props> = ({ component }) => {
  const theme = useTheme();
  const drawerWidthSpacing = 30;
  const mobile = window.screen.width < 600;

  return (
        <ButtonProvider>
          <Sidebar
            drawerWidth={theme.spacing(drawerWidthSpacing)}
            mobile={mobile}
          />
          <Header
            drawerWidth={theme.spacing(drawerWidthSpacing)}
            mobile={mobile}
          />
          {
          <Box
            sx={
              { width: `100% - ${mobile ? 0 : theme.spacing(drawerWidthSpacing)}`, mt: '4rem', ml: `${mobile ? 0 : theme.spacing(drawerWidthSpacing)}}` }
            }
          >
            {component}
          </Box>
          }
        </ButtonProvider>
  );
};

export default Dashboard;
