import React from 'react'
import {
    Box,
    Divider,
    Heading,
    HStack,
    Center,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    VStack,

} from '@chakra-ui/react'
import audio from '../Audio/ItAStiff.wav'
import ReactAudioPlayer from 'react-audio-player';

export default function MusicObject(props) {
    const { ArtistName, SongName, SongFile, ...rest } = props
    return (
        <div>
            <Box>
                <HStack w={'-moz-fit-content'} spacing={'10'}>
                    <VStack alignItems={'left'}>
                        <Text fontWeight={'bold'}>{ArtistName}</Text>
                        <Text fontWeight={'regular'}>{SongName}</Text>
                    </VStack>
                    <ReactAudioPlayer
                        src={audio}q
                        autoPlay={false}
                        controls
                    />
                </HStack>

            </Box>
        </div>
    )
}
