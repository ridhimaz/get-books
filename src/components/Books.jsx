import { Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {
  Card, CardHeader, CardBody, CardFooter, Box, Heading, Button,
  Stack, Text, Divider, ButtonGroup
} from '@chakra-ui/react'
import "../components/booksStyle.css";
import { useParams } from 'react-router-dom';

export default function Books({ key, book}) {

  const title = book.title || "Title Not Available";
  const description = book.description || "Description Not Available";
  const authors = book.authors || ["Author Not Available"];
  const url = book.imageLinks?.smallThumbnail || "Default Image URL";

  //console.log(title + " " + description + " " + authors + " " + url);
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
            <Text color='#ff4500' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' bg='#ff7f00 ' colorScheme='orange'>
              Buy now
            </Button>
            <Button variant='ghost' color='#ff4500' colorScheme='orange'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}
