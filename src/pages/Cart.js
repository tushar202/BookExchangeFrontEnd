import React, { useEffect, useState } from "react";
import { HStack, Stack, Box, Heading, StackDivider } from '@chakra-ui/react'
import CartCard from "../components/CartCard";
import PriceList from '../components/PriceList'
import axios from 'axios'
export default function Cart() {

  const [bookList, setBookList] = useState([{
    imageUrl: '',
    title: '',
    price: 0,
    seller: '',
    id: null
  }])
  const [cost, setCost] = useState([{
    orignal_cost: 0,
    saving: 0,
    selling_cost: 0
  }])
  const [addressList, setAddressList] = useState([''])
  useEffect(() => {
    async function fetchData() {
      const books = await axios.get('http://localhost:3001/cart')
      console.log(books.data);
      const bList = books.data.prods
      const orignal_cost = books.data.orignal_cost;
      const saving = books.data.saving;
      const selling_cost = books.data.selling_cost
      setCost({
        orignal_cost: orignal_cost,
        saving: saving,
        selling_cost: selling_cost
      })
      setBookList(bList.map((booki, idx) => {
        return ({
          title: booki.title,
          seller: booki.firstName,
          price: booki.selling_price,
          imageUrl: booki.imageUrl,
          bookId: booki.id
        })
      }))
      setAddressList(books.data.addresses.map((address) => {
        return (
          address.locality + ',' + address.city + ',' + address.city + ',' + address.state
        )
      }))
    }


    fetchData()
  }, [])
  return (

    <Box marginRight='30' mt='30'>
      <HStack>
        <Box overflowY="auto" scrollBehavior='smooth' h='400px' w='60%' css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '24px',
          },
        }}>
          <Stack alignContent='left' ml='10' mt='10' spacing='2' p='5' border='2px' divider={<StackDivider borderColor='gray.400' />}>
            <Box ><Heading>Items</Heading></Box>
        
              {bookList.map((book) => {
                return (
                  <CartCard author={book.author} seller={book.seller} price={book.price} imageUrl={book.imageUrl} title={book.title} bookId={book.bookId} setBookList={setBookList} bookList={bookList} />
                )
              })}

          </Stack>
        </Box>
        <PriceList selling_cost={cost.selling_cost} saving={cost.saving} orignal_cost={cost.orignal_cost} addressList={addressList} />
      </HStack>


    </Box>
  );
}
