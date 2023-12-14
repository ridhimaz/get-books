import {

  Button,
  Input,
  Box,
  Heading, Drawer, DrawerContent, DrawerOverlay, DrawerHeader, DrawerFooter, DrawerBody
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { Icon, CloseIcon } from '@chakra-ui/icons';
import React from 'react'
import "./loginStyles.css"

export default function Login({ isOpen, handleOnClick }) {

  return (
    <>
      <Drawer isOpen={isOpen} placement='left' size="xs" >
        <DrawerOverlay />
        <DrawerContent bgColor="#ffefd5">
          <DrawerHeader display="flex" alignItems="center" justifyContent="space-between" mt={20}>
            <Heading >Nerds planet</Heading>
            <CloseIcon id="close-icon" onClick={handleOnClick} />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" gap="3%">
           
              <Box gap="5%" alignItems="center" display="flex">
                <i class="fa-solid fa-user"></i>
                <p> Profile</p>
              </Box>
             
           
            <Box gap="5%" alignItems="center" display="flex">
              <i class="fa-solid fa-house"></i>
              <Link to="/"><p>Home</p> </Link>
            </Box>
            <Box gap="5%" alignItems="center" display="flex">
              <i class="fa-solid fa-book"></i>
              <p>Books</p>
            </Box>
            <Box gap="5%" alignItems="center" display="flex">
              <i class="fa-solid fa-floppy-disk"></i>
              <p>Saved</p>
            </Box>
            <Box gap="5%" alignItems="center" display="flex">
              <i class="fa-solid fa-calendar-days"></i>
              <p>Events</p>
            </Box>
            <Box gap="5%" alignItems="center" display="flex">
              <i class="fa-solid fa-people-group"></i>
              <p>Join Groups</p>
            </Box>
          </DrawerBody>
          <Box display="flex" gap="5%" alignItems="center" mb="10%" ml="7%" >
            <i class="fa-solid fa-handshake"></i>
            <p  >Contact us</p>
          </Box>
        </DrawerContent>
      </Drawer>

    </>
  )
}

