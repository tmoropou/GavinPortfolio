import React from 'react'
import {
    Box,
    Divider,
    Heading,
    HStack,
    Center,
    Image,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    VStack,

} from '@chakra-ui/react'

function BioPage() {
    return (
        <div>
            <Heading pt={100} pb={50} align={'center'}>
                <Text className='montserrat' fontSize={'5xl'}>
                    About Me
                </Text>
            </Heading>
            <Text pb={50} pl={400} pr={400} fontSize={'large'} lineHeight={'9'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ridiculus mus mauris vitae ultricies leo integer. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Quis enim lobortis scelerisque fermentum. Morbi tincidunt ornare massa eget egestas purus viverra.</Text>
            <HStack w={"100%"} pl={400} pr={400} pb={150}>
                <VStack>
                    <Text pb={50} fontSize={'large'} lineHeight={'9'}>Dapibus ultrices in iaculis nunc. Adipiscing enim eu turpis egestas pretium. Bibendum ut tristique et egestas. Eu mi bibendum neque egestas congue quisque egestas diam in. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mus mauris vitae ultricies leo integer malesuada nunc vel. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Tellus at urna condimentum mattis. Congue quisque egestas diam in arcu cursus euismod quis viverra. Orci a scelerisque purus semper eget duis at.</Text>
                    <Text pb={50} fontSize={'large'} lineHeight={'9'}>Felis bibendum ut tristique et egestas quis ipsum suspendisse. Arcu odio ut sem nulla pharetra diam sit. Accumsan tortor posuere ac ut consequat semper viverra nam. Quis viverra nibh cras pulvinar mattis nunc sed.</Text>
                    <Text pb={50} fontSize={'large'} lineHeight={'9'}>Neque egestas congue quisque egestas diam. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Massa massa ultricies mi quis hendrerit dolor. Eu facilisis sed odio morbi. Justo eget magna fermentum iaculis eu non. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Laoreet id donec ultrices tincidunt. Non diam phasellus vestibulum lorem sed risus. Dui ut ornare lectus sit amet est. Semper viverra nam libero justo laoreet sit. Tortor dignissim convallis aenean et tortor at risus viverra. </Text>
                </VStack>
                <Center>
                    <Box pl={100} w={400} h={350}>
                        <Image src='https://i.postimg.cc/HL9Rz8Rj/GavChair.jpg' alt='Gavin Profile' />
                    </Box>
                </Center>
            </HStack>

        </div>
    )
}

export default BioPage