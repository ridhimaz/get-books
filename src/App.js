import Login from './components/Login';
import Header from './components/Header';
import Info from './components/Info';
import Paragraph from './components/Paragraph';
import Books from './components/Books';
import { useEffect, useState } from 'react';
import { useToast} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Grid } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate} from "react-router-dom";
import Searchpage from './components/Searchpage';

function App() {
 
  
const navigate=useNavigate();

  const [isOpen, setIsopen] = useState(false);
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const toast = useToast();
  // console.log("new: " + text);


  console.log("xx",text)



  function handleInputChange(e) {
    console.log("change!" + e.target.value);
    setText(e.target.value);
  }

  const searchClick = () => {
   
    console.log("search" + text)

    // if (text === "") {
    //   console.log("empty")
    //   navigate(-1);
    //   toast({
    //     title: 'Text field is empty',
    //     description: 'Please enter some text to extract keywords',
    //     status: 'error',
    //     duration: '5000',
    //     isClosable: false
    //   })
    // }

    navigate(`/search/${text}`)
   

  }
  function handleOnClick() {
    setIsopen(!isOpen);
    console.log(`"menu clicked"+ ${isOpen}`)
  }


  return (<>
   


      {!isOpen &&
        (
          <HamburgerIcon id="hamburgerIcon" boxSize={10} color='white' ml={20} mt={20} onClick={handleOnClick} />

        )}
      {isOpen && <Login isOpen={isOpen} handleOnClick={handleOnClick} />}
      <Header text={text} searchClick={searchClick} handleInputChange={handleInputChange} />
     
      <Routes>

      <Route path="/" element={[<Info/>,<Paragraph/>]}/>

        {/* <Route path="/search/:name" exact element= /> */}
        <Route path="/search/:name" element= {<Searchpage/>} />
       
      </Routes>
  
  </>
  );
}

export default App;
