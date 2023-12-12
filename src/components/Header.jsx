import {
    Box, Heading, Button,
    Input,
    InputGroup,
    useToast,
    InputRightAddon,
    IconButton
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import books from '../assests/books-bg.png';
import { useState } from 'react';
import {  Link} from "react-router-dom";

const Header = ({ text, searchClick, handleInputChange }) => {
    

    return (
        <>
            <Box h='40vh' p={4} style={{ backgroundImage: `url(${books})` }} bgSize="cover"
                bgPosition="center"
                bgRepeat="repeat"
                display="flex" flexDirection='column' alignItems="center" justifyContent="center" >
                <Heading color='white' fontSize='3rem'>
                    EXPLORE THE VAST WORLD OF BOOKS
                </Heading>
                <InputGroup mt="3vh" borderRadius={5} size="md" justifyContent="center" >

                    <Input w="35vw" type="text" placeholder="Search..." bgColor="white" value={text} onChange={handleInputChange} />
                    <InputRightAddon bgColor="#ff4500" borderColor="#ff4500">
                       <Link to={`/search/${text}`}> <IconButton
                            bgColor="#ff4500"
                            size="sm"
                            onClick={searchClick}
                            colorScheme='white'
                            icon={<SearchIcon color='white' />}
                        />
                        </Link>

                    </InputRightAddon>

                </InputGroup>
            </Box>
        </>
    )
}
export default Header;