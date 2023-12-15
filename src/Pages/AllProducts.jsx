import {
  Accordion,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import sidebarOptions from "../sideBar.json";
import DropDown from "../Components/DropDown";
import SortButton from "../Components/SortButton";
import ProductCard from "../Components/ProductCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Cashback from "../Components/Cashback";
import { AuthContext } from "../Context/AuthContextProvider";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const  {isSort, sortClick, setSortClick, loading, setLoading} =useContext(AuthContext)

  useEffect(() => {
    !sortClick&&getData();
    getPages();
    const notAllProducts=()=>{
      setSortClick(false)
    }
    return notAllProducts
  }, [page, isSort]);
  const getPages = () => {
    const dummyPages = [];
    for (let i = 1; i <= Math.ceil(20 / 8); i++) {
      dummyPages.push(i);
    }
    setPages(dummyPages);
  };
  const getData = async () => {
    setLoading(true)
    const res = await axios.get(`https://fakestoreapi.com/products`);
    setLoading(false);
    setProducts(res.data);    
  };
  
  

  return (
    <Box mt="7%" overflowX="hidden">
      <Cashback />
      <Text p="8px 30px">Home/products</Text>
      <Heading p="8px 30px" fontSize="md">
        Bohot saare items imagine karlo...
      </Heading>
      <Flex>
        <Box>
          <Heading fontSize="md" p="10%">
            FILTERS
          </Heading>
          <Box border="1px solid lightgray">
            <Sidebar data={sidebarOptions} />
          </Box>
        </Box>
        <Flex flexDirection="column">
          <Flex
            borderBottom="1px solid lightgray"
            justifyContent="space-between"
            w="82vw"
            h="max-content"
            p="12.4px"
          >
            <Accordion
              allowToggle
              fontSize="xs"
              display="flex"
              position="relative"
            >
              <DropDown title="Bundles" child={["Bundles", "Single Styles"]} />
              <DropDown
                title="Country of Origin"
                child={["All Countries", "India"]}
              />
              <DropDown
                title="Size"
                child={["Chota", "Bada", "Bohot Bada", "medium", "and so on.."]}
              />
            </Accordion>
            <SortButton setData={setProducts} data={products} />
          </Flex>
         {loading?<Flex h="70vh" alignItems="center" justifyContent="center"><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='hotpink'
    size='xl'
  /></Flex>:
          <Flex w="80vw" flexWrap="wrap" justifyContent="space-between" p="5%">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                photo={product.image}
                rating={product.rating.rate}
                ratingCount={product.rating.count}
                data= {products}
              />
            ))}
          </Flex>}
          <Divider border="1px solid lightgray" w="90%" m="auto" my="0px" />
          <Flex justifyContent="space-around" w="50vw" m="auto" p="5%">
            <Text>
              Page {page} of {pages.length}
            </Text>
            {page != 1 && (
              <Button
                bg="none"
                border="1px solid lightgray"
                _hover={{ backgroundColor: "none", border: "1px solid black" }}
                onClick={() => {
                  setPage(page - 1);
                }}
                _active={{ backgroundColor: "none" }}
              >
                <ChevronLeftIcon /> Previous
              </Button>
            )}
            <Flex>
              {pages.map((element, index) => (
                <Button
                  key={index}
                  bg={element == page ? "black" : "none"}
                  onClick={() => {
                    setPage(element);
                  }}
                  color={element == page && "white"}
                  _hover={{
                    backgroundColor: "none",
                    border: element == page && "1px solid lightgray",
                  }}
                  _active={{ backgroundColor: "none" }}
                >
                  {element}
                </Button>
              ))}
            </Flex>
            {pages.length != page && (
              <Button
                bg="none"
                border="1px solid lightgray"
                onClick={() => {
                  setPage(page + 1);
                }}
                _hover={{ backgroundColor: "none", border: "1px solid black" }}
                _active={{ backgroundColor: "none" }}
              >
                Next <ChevronRightIcon />
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AllProducts;
