import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index'
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(202,116,65)',
    },
    secondary: {
      main: '#09c',
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider autoHideDuration={3000} maxSnack={5}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
);

