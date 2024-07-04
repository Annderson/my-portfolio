import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Routers from '@/routes';
import GlobalStyles from '@/styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Routers />
    </ThemeProvider>
  </React.StrictMode>
);
