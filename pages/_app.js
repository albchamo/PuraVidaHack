// pages/_app.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

// Create a custom theme.
const theme = createTheme({
  palette: {
    // Define your palette here
    primary: {
      main: '#43B96F',
    },
    secondary: {
      main: '#19857b',
    },
    // Add more colors as needed
  },
  // You can also customize typography, breakpoints, etc.
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your Site Title</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize CSS */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
