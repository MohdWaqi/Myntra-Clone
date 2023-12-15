import { Box, Button, Divider, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { StarIcon } from '@chakra-ui/icons'
import bag from "../assets/icons/bag.png"
import wishlist from "../assets/icons/wishlist.png"
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

const Product = () => {
    const [details, setDetails]= useState({})
    const {id} = useParams()
    const {loading, setLoading} = useContext(AuthContext)
    useEffect(()=>{
        getProduct()
    },[id])
    const getProduct = async()=>{
        setLoading(true)
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setLoading(false)
        setDetails(res.data)
    }
  return (
    <Flex my="10%" justifyContent="space-between" >
    {loading?<Flex h="70vh" alignItems="center" justifyContent="center" w="100vw"><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='hotpink'
    size='xl'
  /></Flex>:
    <>
    <Flex w="30%" p="2%" gap="20px" >
        <Image src={details.image} alt={details.title} />
        <Image src={details.image} alt={details.title} />
    </Flex>
    <Box w="42%" p="2%">
        <Heading fontSize="2xl">{details.title}</Heading>
        <Text fontSize="xl" color="gray" my="1%">Some Sub Heading</Text>
        <Button fontSize="sm" my="2%" bg="none" borderRadius="2px" border="1px solid lightgray" _hover={{backgroundColor:"none", border:"1px solid black"}} _active={{backgroundColor:"none"}}>{details?.rating?.rate} <StarIcon mx="5px" color="green" /><span style={{color:"gray"}}>|   {details?.rating?.count}</span></Button>
        <Divider borderColor="lightgray"/>
        <Heading my="2%"fontSize="2xl">₹ {Math.floor(details.price*83.27)}</Heading>
        <Heading my="2%" fontSize="sm">Inclusive of all taxes</Heading>
        <Flex gap="2%" my="3%">
        <Button bg="hotpink" fontWeight="700" borderRadius="4px" w="45%" p="5%" border="1px solid lightgray" _hover={{backgroundColor:"#F788B2"}} _active={{backgroundColor:"none"}}><Image w="20px" mr="4%" src={bag}/> ADD TO BAG</Button>
        <Button bg="none" fontWeight="700" borderRadius="4px" p="5%" border="1px solid lightgray" _hover={{backgroundColor:"none", border:"1px solid black"}} _active={{backgroundColor:"none"}}><Image w="20px" mr="4%" src={wishlist}/> WISHLIST</Button>
        </Flex>
        <Divider borderColor="lightgray"/>
        <Heading fontSize="lg" my="3%">PRODUCT DETAILS</Heading>
        <Text>{details.description}</Text>
    </Box>
    </>}
    </Flex>
  )
}

export default Product