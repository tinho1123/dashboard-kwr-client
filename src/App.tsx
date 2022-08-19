import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import StyleThemeProvider from "./themes/StyleThemeProvider";
import { Home, Products } from "./components";
import { useTheme } from "@mui/system";

function App() {
  const theme = useTheme();
  const drawerWidthSpacing = 30;
  const mobile = window.screen.width < 600;

  return (
    <StyleThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard"
          element={
            <Dashboard 
              component={ 
                <Home 
                  drawerWidth={theme.spacing(drawerWidthSpacing)}
                  mobile={mobile}
                />
              } 
            />
          }
        />
        <Route
          path="/dashboard/produtos"
          element={
            <Dashboard 
              component={
                <Products
                  drawerWidth={theme.spacing(drawerWidthSpacing)}
                  mobile={mobile}
                />
              }
            />
          }
        />
      </Routes> 
    </StyleThemeProvider>
  );
}

export default App;
