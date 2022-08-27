import React from 'react'
import {
    Button,
    Divider,
    Heading,
    HStack,
    Center,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,

} from '@chakra-ui/react'
import HomePage from './HomePage'
import BioPage from './BioPage'
import MusicPage from './MusicPage'
import ContactPage from './ContactPage'

const movePage = (key) => {
    document.getElementById(key).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};

function MainPage() {
    return (
        <div>
            <HStack justify={'center'} 
            >
                <Button onClick={() => {
                    movePage("FirstPage");
                }}
                >
                    First Page
                </Button>
                <Button onClick={() => {
                    movePage("SecondPage");
                }}
                >
                    Second Page
                </Button>
                <Button onClick={() => {
                    movePage("ThirdPage");
                }}
                >
                    Third Page
                </Button>
                <Button onClick={() => {
                    movePage("FourthPage");
                }}
                >
                    Fourth Page
                </Button>
            </HStack>

            <HStack w="100%"
                justifyContent={'center'}
            >
                <Heading
                    ml="8"
                    fontSize={'8xl'}
                    size="md"
                    fontWeigth='semibold'
                    color="cyan.400"
                >
                    Gavin Swerdloff
                </Heading>
            </HStack>

            <div id={'FirstPage'}>
                <Heading pt={'1000'}>First Page</Heading>
            </div>
            <div id={'SecondPage'}>
                <Heading pt={'1000'}>Second Page</Heading>
            </div>
            <div id={'ThirdPage'}>
                <Heading pt={'1000'}>Third Page</Heading>
            </div>
            <div id={'FourthPage'}>
                <Heading pt={'1000'}>Fourth Page</Heading>
            </div>



        </div>
    )
}

export default MainPage