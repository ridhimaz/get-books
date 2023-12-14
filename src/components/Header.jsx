import {
    Box, 
    Heading,
    Input,
    InputGroup,
    InputRightAddon,
    IconButton
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import books from '../assests/books-bg.png';
import {  Link} from "react-router-dom";

const Header = ({ text, searchClick, handleInputChange }) => {

    return (
        <>
            <Box id="header" h='40vh' p={4} style={{ backgroundImage: `url(${books})` }} bgSize="cover"
                bgPosition="center"
                bgRepeat="repeat"
                display="flex" flexDirection='column' alignItems="center" justifyContent="center" >
                <Heading className='fs main-heading' color='white'  fontSize='3rem' ml="10%" mt="7%"> 
                    EXPLORE THE VAST WORLD OF BOOKS
                </Heading>
                <InputGroup  id="search-input"  mt="3vh" borderRadius={5} size="md" justifyContent="center" >
                    <Input w="35vw" type="text" placeholder="Search..."  bgColor="white" value={text} onChange={handleInputChange} />
                    <InputRightAddon bgColor="#ff4500" borderColor="#ff4500">
                       <IconButton
                            bgColor="#ff4500"
                            id="search-btn"
                            onClick={searchClick}
                            colorScheme='white'
                            icon={<SearchIcon color='white' />}
                        />
                    </InputRightAddon>

                </InputGroup>
            </Box>
        </>
    )
}
export default Header;