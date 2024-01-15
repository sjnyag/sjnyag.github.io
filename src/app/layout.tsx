"use client"
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import Drawer from './components/drawer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01579b',
      contrastText: "#fff"
    },
    secondary: {
      main: '#FFAB40',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      '"M PLUS Rounded 1c"',
      'Century Gothic',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none'
    }
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <title>Shinya Kawakami&apos;s ポートフォリオ</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Drawer>
            {children}
          </Drawer>
        </ThemeProvider>
      </body>
    </html >
  )
}
