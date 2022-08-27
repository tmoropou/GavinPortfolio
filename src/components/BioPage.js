import React from 'react'
import {
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

function BioPage() {
    return (
        <div>
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
                    Bio Page
                </Heading>
            </HStack>

        </div>
    )
}

export default BioPage