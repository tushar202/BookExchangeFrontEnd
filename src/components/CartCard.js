import React from 'react'
import { Box, HStack, VStack, Image, Heading, Stack, Text, StackDivider, Icon, Button, Spacer, Select } from '@chakra-ui/react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'

const CartCard = ({imageUrl,price,seller,title,bookId,setBookList,bookList}) => {
    
    const handleRemoval=(id)=>{
        (async () => {
            const resp=await axios.post('http://localhost:3001/removeFromCart',{
                bookId:id
            })
            let bookListup=bookList
            bookListup.forEach((book,idx)=>{
                if(book.bookId===id){
                    console.log(1)
                    bookListup.splice(idx);
                    setBookList(bookListup)
                    // console.log(bookList)

                }
            })
            console.log(resp);
        })();

        console.log(id)
    }
    return (
        
            
                <Box>
                    <HStack spacing='8' divider={<StackDivider borderColor='gray.400' />}>
                        <Box>
                            <Image src={imageUrl}
                                boxSize='200px' />
                        </Box>
                        <Box spacing='3'>
                            <Heading size='xl'>{title}</Heading>
                            <Text fontSize='sm' color='gray.400'>seller : {seller}</Text>
                            <HStack spacing={-1} w='100%'>
                                <Text fontSize='lg' fontWeight='semibold' pr='2'>Price:</Text>
                                <Icon as={CurrencyRupeeIcon} viewBox="0 0 25 15" boxSize='0.75em' />
                                <Text fontSize='lg' fontWeight='semibold'>{price}</Text>

                            </HStack>
                            <Button  onClick={(event)=>handleRemoval(bookId)} leftIcon={<DeleteIcon />} colorScheme='teal' variant='solid'>
                                Remove From Cart
                            </Button>
                        </Box>
                    </HStack>

                </Box>

           
    )
}

export default CartCard