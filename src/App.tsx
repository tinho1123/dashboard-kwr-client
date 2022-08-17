import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import StyleThemeProvider from "./themes/StyleThemeProvider";

function App() {
  return (
    <StyleThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </StyleThemeProvider>
  );
}

export default App;
