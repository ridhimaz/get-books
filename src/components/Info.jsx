import { Container, Heading ,Flex, Spacer,Text} from '@chakra-ui/react'
import React from 'react'

export default function Info() {
  return (
   <>
   <Flex pl={200} pr={200} bgColor='#ffefd5' pb={50} pt={50} >
       <Container>
       <Heading as='h1' mb={0}>90 K+ </Heading>
       <Text  mt={0} color="#ff4500">Books</Text>
       </Container>  <Spacer />
       <Container>
       <Heading as='h1' mb={0}>23 K+ </Heading>
       <Text   mt={0}  color="#ff4500">Groups</Text>
       </Container>
       <Spacer />
       <Container>
       <Heading as='h1' mb={0}>10 K+ </Heading>
       <Text    mt={0} color="#ff4500">Events</Text>
       </Container>
   </Flex>
   </>
  )
}
