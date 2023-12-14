import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons';
function Hamburger() {
    return (
        <>
            <Box  style={{display:"block",backgroundColor:"yellow", width:"100%"}}>
                <HamburgerIcon id="hamburgerIcon" boxSize={10} color='white' ml="10%" mt="600px" onClick={handleOnClick} />
            </Box>
        </>
    )
}

export default Hamburger