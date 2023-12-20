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
  const  {isSort, sortClick, setSortClick, loading, setLoading} =useContext(AuthContext)
  const [curPage, setCurPage] = useState(0);
  const itemLimit = 12;
  const [pagesQuantity, setPagesQuantity] = useState(0);
  const [curItems, setCurItems] = useState([]);

  useEffect(() => {
    !sortClick&&getData();
    const notAllProducts=()=>{
      setSortClick(false)
    }
    return notAllProducts
  }, [ isSort]);
  const getData = async () => {
    setLoading(true)
    const res = await axios.get(`https://fakestoreapi.com/products`);
    setLoading(false);
    setProducts(res.data);    
  };
  useEffect(() => {
    const pagesTotal = Math.ceil(products.length / itemLimit);

    setPagesQuantity(pagesTotal);
    const offset = curPage * itemLimit;
    const getList = (curPage, itemLimit) => {
      setCurItems(products.slice(offset, offset + itemLimit));
    };

    getList(curPage, itemLimit);
  }, [curPage, itemLimit, products]);

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
            p={{"2xl":"1%",xl:"0.75%"}}
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
            {curItems.map((product) => (
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
          <Flex w="100%" m="auto" p="5%">
            <Text mr="30%">
              Page {curPage+1} of {pagesQuantity}
            </Text>
            {curPage+1 != 1 && (
              <Button
                bg="none"
                border="1px solid lightgray"
                _hover={{ backgroundColor: "none", border: "1px solid black" }}
                onClick={() => {
                  setCurPage(curPage - 1);
                }}
                _active={{ backgroundColor: "none" }}
              >
                <ChevronLeftIcon /> Previous
              </Button>
            )}
            <Flex mx="5%">
              {Array.from({length: pagesQuantity}, (_, i) => i + 1).map((element, index) => (
                <Button
                  key={index}
                  bg={index == curPage ? "black" : "none"}
                  onClick={() => {
                    setCurPage(index);
                  }}
                  color={index == curPage && "white"}
                  _hover={{
                    backgroundColor: "none",
                    border: index == curPage && "1px solid lightgray",
                  }}
                  _active={{ backgroundColor: "none" }}
                >
                  {element}
                </Button>
              ))}
            </Flex>
            {pagesQuantity != curPage+1 && (
              <Button
                bg="none"
                border="1px solid lightgray"
                onClick={() => {
                  setCurPage(curPage + 1);
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
