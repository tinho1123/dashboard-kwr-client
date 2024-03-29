import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import StyleThemeProvider from "./themes/StyleThemeProvider";
import { Debtor, Home, Products, Sales } from "./components";

function App() {
  return (
    <StyleThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard"
          element={
            <Dashboard 
              component={ 
                <Home />
              } 
            />
          }
        />
        <Route
          path="/dashboard/produtos"
          element={
            <Dashboard 
              component={
                <Products />
              }
            />
          }
        />

        <Route
          path="/dashboard/vendas"
          element={
            <Dashboard 
              component={
                <Sales />
              }
            />
          }
        />

        <Route
          path="/dashboard/fiados"
          element={
            <Dashboard 
              component={
                <Debtor />
              }
            />
          }
        />
      </Routes> 
    </StyleThemeProvider>
  );
}

export default App;
