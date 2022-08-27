import logo from './logo.svg';
import React from 'react'
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './components/MainPage'
import './App.css';

function App() {
  return (
    // <ReactAudioPlayer
    //   src="It's A Stiff!.wav"
    //   autoPlay
    //   controls
    // />
    <ChakraProvider>
      <MainPage>

      </MainPage>
    </ChakraProvider>
  );
}

export default App;
