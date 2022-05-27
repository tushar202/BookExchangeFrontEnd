// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { Container } from '@mui/material';
import React from 'react'
import BookCard from './BookCard'
import { SimpleGrid, GridItem, Container, Box } from '@chakra-ui/react'

function CardList({ BookList }) {
    return (
            <SimpleGrid columns={[1,1,2,3]} gap={10} mx='5%' my='5%'>
                    {BookList.map((BookList, key) => {
                        
                        return (
                            <Box w='100%' h='75%' >
                            <BookCard imgSrc={BookList.imageUrl} price={BookList.price} title={BookList.title} author={BookList.author} description={BookList.description} />
                            </Box>
                        )
                       
                    })}
            </SimpleGrid>
    )
}

export default CardList