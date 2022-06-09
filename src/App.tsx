import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const styles = createTheme({
    palette: {
      primary: {
        main: '#ff8c00',
      }
    } 
  })

  return (
      <ThemeProvider theme={styles}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
