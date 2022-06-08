import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Header } from './components/Header';

function App() {
  const drawerWidth = 240
  const styles = createTheme({
    palette: {
      primary: {
        main: '#ff8c00',
      }
    } 
  })

  return (
    <div className="App">
      <ThemeProvider theme={styles}>
      <Sidebar drawerWidth={drawerWidth}/>
      <Header drawerWidth={drawerWidth} />
      </ThemeProvider>
    </div>
  );
}

export default App;
