import React from 'react'

// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import MenuItem from '@mui/material/MenuItem';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';
import { HStack, Box, Spacer, Text } from '@chakra-ui/react';

const pages = ['Home', 'Register', 'Login'];
const links = ['/', '/signup', '/login']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const iconsL = [<HomeIcon />, <PersonAddAltIcon />, <LoginIcon />]

const Navbar = ({ isLogin }) => {


    return (
        <HStack w="100%" bg='gray.700' h='50px' color='white' justifyContent='space-between'>
            <Box pl='4%'>
                <Text fontSize='2xl'>
                    LOGO
                </Text>

            </Box>
            <Spacer></Spacer>
            <HStack spacing='5%'>
                <Link to={links[0]}><Box display={isLogin ? undefined : 'none'}><Text fontSize='xl'>Home</Text></Box></Link>
                <Link to='/cart'><Box display={isLogin ? undefined : 'none'} ><Box><Text fontSize='xl'>Cart</Text></Box></Box></Link>
                <Box display={isLogin ? undefined : 'none'}><Text fontSize='xl'>WishList</Text></Box>
                <Link to='/addBook'><Box display={isLogin ? undefined : 'none'}><Text fontSize='xl'>Sell_Books</Text></Box></Link>
                <Box display={isLogin ? undefined : 'none'}><Text fontSize='xl'>My_Books</Text></Box>
                <Box display={isLogin ? undefined : 'none'}><Text fontSize='xl'>My_Orders</Text></Box>
            </HStack>
            {isLogin?null:<Spacer></Spacer>}
            <HStack pr="20%" spacing='20%' >         
                <Link to={links[1]} ><Box display={isLogin?'none':undefined}><Text fontSize='xl'>SignUp</Text></Box></Link>
                <Link to={links[2]} ><Box display={isLogin?'none':undefined}><Text fontSize='xl'>Login</Text></Box></Link>
            </HStack>
        </HStack>
    );
};



export default Navbar