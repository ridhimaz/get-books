import Login from './components/Login';
import Header from './components/Header';
import Info from './components/Info';
import Paragraph from './components/Paragraph';
import { useState } from 'react';
import { useToast,Box} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Route, Routes, useNavigate} from "react-router-dom";
import Searchpage from './components/Searchpage';

function App() {
 
  
const navigate=useNavigate();

  const [isOpen, setIsopen] = useState(false);
  const toast = useToast();
  const [text, setText] = useState("");
  
  function handleInputChange(e) {
    setText(e.target.value);
  }

  const searchClick = () => {
    if (text === "") {
      toast({
        title: 'Input field is empty',
        description: 'Please enter a book name',
        status: 'error',
        duration: '5000',
        isClosable: false
      })
    } else{ 
      navigate(`/search/${text}`);
      window.location.reload(true);
    }
  }
  function handleOnClick() {
    setIsopen(!isOpen);
    console.log("menu clicked"+ `${isOpen}`)
  }


  return (<>

      {!isOpen &&
        (
          <Box>
          <HamburgerIcon id="hamburgerIcon" boxSize={10} color='white' ml="10%" mt={20} onClick={handleOnClick} />
          </Box>
        )
      }
      {isOpen && <Login isOpen={isOpen} handleOnClick={handleOnClick} />}
      <Header text={text} searchClick={searchClick} handleInputChange={handleInputChange} />
     
      <Routes>
        <Route path="/" element={[<Info/>,<Paragraph/>]}/>
        <Route path="/search/:name" element={<Searchpage setText={setText} />} />
      </Routes>
  </>
  );
}

export default App;
