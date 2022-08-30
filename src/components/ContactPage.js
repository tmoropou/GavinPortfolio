import React, { useRef } from 'react'
import emailjs from "emailjs-com"
import {
    Button,
    Heading,
    Form,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Text,
    VStack,
} from '@chakra-ui/react'



function ContactPage() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("SEND");

        emailjs.sendForm('service_jb7djp9', 'template_2uotcnf', form.current, 'VbB5JCYAbJHzNWmZi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Heading mb={50} align={'center'}>
                <Text className='montserrat' fontSize={'6xl'} color={'white'}>
                    CONTACT ME
                </Text>
            </Heading>

            <div className='container'>
                <VStack w={800} align={'left'}>q
                    <form ref={form} onSubmit={sendEmail}>
                        <FormLabel color={'white'}>Name</FormLabel>
                        <Input variant={'unstyled'} pl={2} mb={5} height={45} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' type='name' name="name" />
                        <FormLabel color={'white'}>Email Address</FormLabel>
                        <Input variant={'unstyled'} pl={2} mb={5} height={45} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' type='phone' name='' />
                        <FormLabel color={'white'}>Details</FormLabel>
                        <Textarea variant={'unstyled'} pl={2} height={150} fontSize={24} bgColor={'white'} textColor={'black'} border='2px' borderColor='black' name="message" />
                        <Button w={100} mt={5} bgColor={'black'} rounded={'none'} type="submit" value={"Send"}>
                            <Text color={'white'}>
                                Submit
                            </Text>
                        </Button>
                    </form>
                </VStack>
            </div>

            {/* <div className='container'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div> */}

        </div>
    )
}

export default ContactPage