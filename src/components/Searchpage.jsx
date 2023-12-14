import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Books from './Books';
import { Grid, GridItem } from '@chakra-ui/react';

const Searchpage = ({setText}) => {

  const [books,setBooks]=useState([]);
  const {name}=useParams();

  useEffect(()=>{
    console.log("reloading",name);
    setText(name);
    extractBooks(name);
    
  },[]);

  const extractBooks = async (text) => {
    console.log("api calling with....", text );
    const apiKey = 'AIzaSyB6zhD9TQ6AiCpGL3q5SG40eOo_HNiR9yg';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${text}%20potter&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.items.map((item) => item.volumeInfo);
      setBooks(items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
    
  return (
   <>
   <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}   gap={7} p={100}>
   {books.map((book, index) => (
           
            <Books key={index} book={book} />
          ))
          }
        </Grid>
   </>
  )
}

export default Searchpage;