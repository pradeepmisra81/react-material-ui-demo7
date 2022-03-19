import React from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme';


const App = () => {
  
  return (
      <ThemeProvider theme={theme}>
      <Header />
      </ThemeProvider>
  );
}

export default App;
