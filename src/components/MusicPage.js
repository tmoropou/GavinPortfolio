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
                            <MusicObject ArtistName={"Artist Name 1"} SongName={"Song Name 1"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='pink.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 2"} SongName={"Song Name 2"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='blue.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 3"} SongName={"Song Name 3"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='blue.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 4"} SongName={"Song Name 4"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='pink.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 5"} SongName={"Song Name 5"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='pink.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 6"} SongName={"Song Name 6"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='blue.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 7"} SongName={"Song Name 7"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                        <GridItem w='-moz-fit-content' h='100%' border='1px' borderColor='blue.400' p={3}>
                            <MusicObject ArtistName={"Artist Name 8"} SongName={"Song Name 8"} SongFile={"It's A Stiff!.wav"}></MusicObject>
                        </GridItem>
                    </Grid>
                </Center>

            </Box>
        </div>
    )
}

export default MusicPage