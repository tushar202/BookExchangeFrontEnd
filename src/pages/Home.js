import React, { useEffect,useState } from 'react'
// import BookCard from '../components/BookCard'
import { Box } from '@chakra-ui/react'
import CardList from '../components/CardList'
import axios from 'axios'


const Home = () => {

const [bookList,setBookList]=useState([{
    title:'',
    author:'',
    price:0,
    imageUrl:'',
    description:''
}])
useEffect(() => {
    async function fetchData(){
        const books=await axios.get('http://localhost:3001/')
        const bList=books.data.prods
       setBookList(bList.map((booki,idx)=>{
            return({
                title:booki.title,
                author:booki.name,
                description:booki.description,
                price:booki.orignal_price,
                imageUrl:booki.imageUrl
            })
        }))
         
    }
    fetchData()
}, [])
    return (
        <Box>
            <h1>All The Books:</h1>
            <CardList BookList={bookList} />
        </Box>

    )
}


export default Home