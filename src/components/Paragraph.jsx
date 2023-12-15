import { Heading ,Box ,Divider, HStack, Flex,Text, Button} from '@chakra-ui/react'
import React from 'react'
import "../components/paragraphStyles.css"
export default function Paragraph() {
  return (
   <>
   <Box pl="10%" pr="10%" mt={10}>
   <Heading id="paragraph-heading" color="#ff4500" mb={0}>
    Discover New Realms:
   </Heading>
   <HStack spacing={0}  >
   <Heading id="sub-paragraph-heading" color="#ff4500" flexShrink={0} mr={5} mt={0}>
    Immerse Yourself
   </Heading>
   <Divider orientation='horizontal' bg="#e5e4e2" h="2px" borderWidth="1px" mt={0}/>
   </HStack>
   </Box>
   <Flex justifyContent="space-between" pl="10%" pr="10%" mb="100px">
    <Text id="paragraph"  fontSize={15} mr="10%">Lose Yourself in the joy of reading with our seamless and elegant interface. Customize your reading experience, from font size to background color, for the ultimate literary escape. Browse through our extensive collection of books, meticulously curated for every taste. From timeless classics to contemporary gems, your next favourite read awaits.</Text>
    <Button id="see-books" alignItems='center' size={5}
    justifyContent='center' height="10px"  border='2px'
    bg='#fd5800' colorScheme='orange' p={6}>See Books</Button>
   </Flex>
   </>
  )
}
