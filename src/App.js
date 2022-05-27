import './App.css';
import {React,useState} from 'react'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart';
import {Box} from '@chakra-ui/react'
import AddBook from './pages/AddBook'

function App() {
  const [isLogin,setIsLogin]=useState(false)
  return (
    <Box className="App" h='100%'>
      <Router>
      <Navbar isLogin={isLogin}/>
        <Routes>
        <Route path="/" exact element={<Home  isLogin={isLogin}/>}/>
        <Route path="/login" element={<Login  setIsLogin={setIsLogin}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
