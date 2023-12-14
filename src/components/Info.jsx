import { Container, Heading ,Flex, Spacer,Text} from '@chakra-ui/react'
import React from 'react'
import "../components/infoStyles.css";
export default function Info() {
  return (
   <>
   <Flex pl="5%" pr="5%"  bgColor='#ffefd5' pb={50} pt={50} textAlign="center">
       <Container>
       <Heading className="fs" fontSize="2rem" mb={0}>90 K+ </Heading>
       <Text  mt={0} color="#ff4500">Books</Text>
       </Container>  <Spacer />
       <Container>
       <Heading className="fs" fontSize="2rem" mb={0}>23 K+ </Heading>
       <Text   mt={0}  color="#ff4500">Groups</Text>
       </Container>
       <Spacer />
       <Container>
       <Heading className="fs" fontSize="2rem" mb={0}>10 K+ </Heading>
       <Text    mt={0} color="#ff4500">Events</Text>
       </Container>
   </Flex>
   </>
  )
}
