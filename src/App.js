import logo from './logo.svg';
import React from 'react'
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import MainPage from './components/MainPage'
import './App.css';
import { ThemeProvider } from '@emotion/react';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#1d2542',
      },
      // styles for the `a`
    },
  },
})



function App() {
  return (
      <ChakraProvider theme={theme}>
        <MainPage>

        </MainPage>
      </ChakraProvider>
  );
}

export default App;
