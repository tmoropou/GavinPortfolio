import React from 'react'
import {
    Button,
    Divider,
    Heading,
    HStack,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    VStack,

} from '@chakra-ui/react'

function ContactPage() {
    return (
        <div>
            <Heading mb={75} align={'center'}>
                <Text className='montserrat' fontSize={'6xl'} color={'white'}>
                    CONTACT ME
                </Text>
            </Heading>

            <VStack w={800} align={'left'}>
                <FormControl>
                    <FormLabel color={'white'}>Name</FormLabel>
                    <Input variant={'unstyled'} pl={2} height={45} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' type='name' />
                </FormControl>
                <FormControl>
                    <FormLabel color={'white'}>Email Address</FormLabel>
                    <Input variant={'unstyled'} pl={2} height={45} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' type='email' />
                </FormControl>
                <FormControl>
                    <FormLabel color={'white'}>Phone Number</FormLabel>
                    <Input variant={'unstyled'} pl={2} height={45} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' type='phone' />
                </FormControl>
                <FormControl>
                    <FormLabel color={'white'}>Details</FormLabel>
                    <Textarea variant={'unstyled'} pl={2} height={150} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' />
                </FormControl>
                <Button w={100} bgColor={'black'} rounded={'none'}>
                    <Text color={'white'}>
                        Submit
                    </Text>
                </Button>
            </VStack>

        </div>
    )
}

export default ContactPage