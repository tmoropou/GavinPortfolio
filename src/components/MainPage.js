import React from 'react'
import {
    Button,
    Box,
    Divider,
    Heading,
    HStack,
    Image,
    Center,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    VStack,
} from '@chakra-ui/react'
import HomePage from './HomePage'
import BioPage from './BioPage'
import MusicPage from './MusicPage'
import ContactPage from './ContactPage'

const movePage = (key) => {
    document.getElementById(key).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

function MainPage() {
    return (
        <div>
            <Box id="Home" w={'100%'}>
                <Image
                    zIndex={-1}
                    opacity={0.5}
                    htmlWidth={'100%'}
                    height={'850'}
                    maxH={850}
                    align={'top'}
                    position={'absolute'}
                    fit={'cover'}
                    src="https://i.ibb.co/GRbNvYh/Feel-Better-EP1-final.png"
                    alt="Feel-Better-EP1-final"
                />
            </Box>
            <Box sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}>
                <HStack justify={'center'}
                >
                    <Button variant={'ghost'} color={'white'} _hover={{ variant: "ghost", color: 'whiteAlpha.700' }} onClick={() => {
                        movePage("Home");
                    }}
                    >
                        <Text className={"montserrat"} fontWeight={'normal'}>HOME</Text>
                    </Button>
                    <Button variant={'ghost'} color={'white'} _hover={{ variant: "ghost", color: 'whiteAlpha.700' }} onClick={() => {
                        movePage("Music");
                    }}
                    >
                        <Text className={"montserrat"} fontWeight={'normal'}>MUSIC</Text>
                    </Button>
                    <Button variant={'ghost'} color={'white'} _hover={{ variant: "ghost", color: 'whiteAlpha.700' }} onClick={() => {
                        movePage("Bio");
                    }}
                    >
                        <Text className={"montserrat"} fontWeight={'normal'}>BIO</Text>
                    </Button>
                    <Button variant={'ghost'} color={'white'} _hover={{ variant: "ghost", color: 'whiteAlpha.700' }} onClick={() => {
                        movePage("Contact");
                    }}
                    >
                        <Text className={"montserrat"} fontWeight={'normal'}>CONTACT</Text>
                    </Button>
                </HStack>
            </Box>

            <Center h={'80%'} mt={'250'}>
                <HStack w="100%" verticalAlign={'center'}
                    justifyContent={'center'}
                >
                    <Heading
                        ml="8"

                        fontSize={'8xl'}
                        size="md"
                        fontWeigth='semibold'
                        color="white"
                    >
                        <Text className={"montserrat"} letterSpacing={20}>GAVIN SWERDLOFF</Text>
                    </Heading>
                </HStack>
            </Center>

            <div id={'Music'}>
                <Box mt={'445'} pb={'200'}>
                    <MusicPage />
                </Box>
            </div>
            <Box w={'100%'}>
                <Image
                    zIndex={-1}
                    opacity={0.5}
                    htmlWidth={'100%'}
                    height={'500'}
                    maxH={500}
                    align={'bottom'}
                    position={'absolute'}
                    fit={'cover'}
                    src="https://i.ibb.co/GRbNvYh/Feel-Better-EP1-final.png"
                    alt="Feel-Better-EP1-final"
                />
            </Box>
            <div>
                <Heading pb={'200'}>
                    <Text className={"montserrat"} fontSize={'9xl'} fontWeight={'thin'} opacity={'.5'}>BIO</Text>
                </Heading>
                <Box h={146}></Box>
                <div id={'Bio'}>
                    <BioPage />
                </div>
            </div>
            <div id={'Contact'}>
                <Box w={'100%'}>
                    <Image
                        zIndex={-1}
                        opacity={0.1}
                        htmlWidth={'100%'}
                        height={'1000'}
                        maxH={1000}
                        align={'top'}
                        position={'absolute'}
                        fit={'cover'}
                        src="https://i.postimg.cc/tCgqxp1h/GavRake.jpg"
                        alt="Feel-Better-EP1-final"
                    />
                </Box>
                <VStack>
                    <Heading pb={'100'}></Heading>
                    <ContactPage />
                </VStack>
            </div>



        </div>
    )
}

export default MainPage