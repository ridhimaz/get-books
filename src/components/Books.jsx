import { Image } from '@chakra-ui/react'
import React from 'react'
import {
  Card, CardBody, CardFooter,Heading, Button,
  Stack, Text, Divider, ButtonGroup,Box
} from '@chakra-ui/react'


export default function Books({ book }) {

  const title = book.title || "Title Not Available";
  const description = book.description || "Description Not Available";
  const authors = book.authors || ["Author Not Available"];
  const url = book.imageLinks?.smallThumbnail || "Default Image URL";
  const truncatedDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;

  return (
    <>
      <Card maxW='sm' >
        <CardBody>
          <Image
            src={url}
            alt='Green double couch with wooden legs'
            borderRadius='sm'
          />
          <Stack mt='6' spacing='0'>
            <Heading size='md'>{title}</Heading>
            <Text>
              {truncatedDescription}
            </Text>
            <Text color='#ff4500' fontSize='1.5rem'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup className='btn-group' spacing={2} orientation="vertical">
            <Button className="full-width" variant='solid' bg='#ff7f00'  colorScheme='orange' >
              Buy now
            </Button>
            <Button className="full-width" variant='ghost' color='#ff4500' colorScheme='orange'>
              Add to cart
            </Button>
          </ButtonGroup>
          </CardFooter>
       
      </Card>
    </>
  )
}
