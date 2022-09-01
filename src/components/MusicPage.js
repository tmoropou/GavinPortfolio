import React from 'react'
import {
    Box,
    Divider,
    Heading,
    HStack,
    Center,
    Grid,
    GridItem,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,

} from '@chakra-ui/react'
import MusicObject from './MusicObject'
import LF_DoItAgain from '../Audio/LinguaFunqa_DoItAgain.wav'
import Z_Signs from '../Audio/Z_Signs.wav'

function MusicPage() {
    return (
        <div>
            <Box >
                <Heading pt={100} align={'center'}>
                    <Text className='montserrat' fontStyle={'italic'} color={'white'}>
                        SELECTED MUSIC
                    </Text>
                </Heading>

                <Center mt={10} pb={100}>
                    <Grid w={'-moz-fit-content'} templateColumns='repeat(2, 1fr)' gap={10}>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='pink.400' p={3}>
                            <MusicObject ArtistName={"Lingua Funqa"} SongName={"Do It Again"} SongFile={LF_DoItAgain}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='pink.400' p={3}>
                            <MusicObject ArtistName={"Zeno"} SongName={"Signs"} SongFile={Z_Signs}></MusicObject>
                        </GridItem>
                    </Grid>
                </Center>

            </Box>
        </div>
    )
}

export default MusicPage