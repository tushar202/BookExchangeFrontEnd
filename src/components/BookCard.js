import React from 'react'
import {
    Box,
    Image,
    Badge,
    Stack,
    Text,
    ButtonGroup,
    Button,
    Icon,
    HStack,
    VStack,
    Center
} from '@chakra-ui/react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BookCard = ({ imgSrc, price, title, author, description }) => {
    return (
        <Box rounded='5%' overflow='hidden' boxShadow='sm' bg='gray.200' alignContent='center' >
            <VStack>
                <Box h='500px' overflow='hidden'>
                    <Image h='auto' m='auto' src={imgSrc} />
                </Box>

                <Box w='100%' py={2}>

                    <Badge variant='outline' colorScheme='green' rounded='full' px={2}>
                        Average
                    </Badge>
                    <Stack align='baseLine' direction='column'>

                        <Text fontSize='2xl'>{title}</Text>
                        <Text fontSize='sm' color='gray.400'>by {author}</Text>
                        <Text fontSize='md' letterSpacing='wide'>{description}</Text>

                        <HStack spacing={-1} w='100%'>

                            <Icon as={CurrencyRupeeIcon} viewBox="0 0 25 15" boxSize='0.75em' />
                            <Text fontSize='lg' fontWeight='semibold'>{price}</Text>


                        </HStack>




                    </Stack>
                    <Center>
                        <ButtonGroup variant='outline' spacing='6'>
                            <Button leftIcon={<AddShoppingCartIcon />} colorScheme='blue'>Cart</Button>
                            <Button leftIcon={<FavoriteIcon />} colorScheme='red'>Wishlist</Button>
                        </ButtonGroup>
                    </Center>

                </Box>
            </VStack>

        </Box>
    )
}

export default BookCard

