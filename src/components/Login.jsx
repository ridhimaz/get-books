import {

  Button,
  Input,
  Box,
  Heading, Drawer, DrawerContent, DrawerOverlay, DrawerHeader, DrawerFooter, DrawerBody
} from '@chakra-ui/react'
import { Icon, CloseIcon } from '@chakra-ui/icons';

import React from 'react'
import "./loginStyles.css"

export default function Login({ isOpen, handleOnClick }) {

  return (
    <>
      <Drawer isOpen={isOpen} placement='left' size="xs"  >
        <DrawerOverlay />
        <DrawerContent bgColor="#ffefd5">
            <DrawerHeader display="flex" justifyContent="space-between" mt={20}>

              <Heading >Nerds planet</Heading>
              <CloseIcon  mr={20} onClick={handleOnClick} />

            </DrawerHeader>
            <DrawerBody>
              <Box display="flex">
                <p>Profile</p>
                <Button>Sign in</Button>
              </Box>
              <p>Home</p>
              <p>Books</p>
              <p>Saved</p>
              <p>Events</p>
              <p>Join Groups</p></DrawerBody>

            <p id="login-footer" mt={1000} ml={0} pl={0}>Contact us</p>


         
         
        </DrawerContent>
      </Drawer>

    </>
  )
}

