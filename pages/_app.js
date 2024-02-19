// pages/_app.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Stark black for brutalist contrast
    },
    background: {
      default: '#e0e0e0', // A light gray background
    },
    text: {
      primary: '#000000', // Black text for readability
      secondary: '#5f5f5f', // Dark gray for less important text
    },
  },
  typography: {
    fontFamily: '"IBM Plex Mono", monospace', // Monospaced font for brutalist design
    h1: {
      fontWeight: 700, // Bold weight for headings
    },
    button: {
      fontWeight: 700, // Bold weight for CTAs
    },
  },
  shape: {
    borderRadius: 0, // Square edges
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // No shadow for a flat design
        },
      },
    },
  },
  // ...other overrides
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
