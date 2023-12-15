import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const SortButton = ({setData, data}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedValue, setSelectedValue] = useState("Recommended");
  const recommendedBtn = useRef(null);
  const {setSort, isSort, setSortClick} = useContext(AuthContext)
  const sortData= (products, path)=>{
    let sortedProducts
    if(path == "low" || path == "recommended"){
      sortedProducts = products.sort((a,b)=>{
        let first = a
        let second = b
        if(path =="low"){
          first = a.price
          second = b.price
        }else if(path =="recommended"){
          first = a.id
          second = b.id
        }
          if(first < second){
            return -1
          }else if(first > second){
            return 1
          }else{
            return 0 
          }
      })
    }else{
      sortedProducts = products.sort((a,b)=>{
        let first = a
        let second = b
        if(path == "high"){
          first = a.price
          second = b.price
        }else if(path == "rating"){
          first = a.rating.rate
          second = b.rating.rate
        }else if(path =="popular"){
          first = a.rating.count
          second = b.rating.count
        }
          if(first < second){
            return 1
          }else if(first > second){
            return -1
          }else{
            return 0 
          }
      })
    }
    setSort(!isSort)
    setSortClick(true)
    setData(sortedProducts)
  }
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        border="1px solid lightgray"
        w="300px"
        mr="5%"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <Flex justifyContent="space-between" px="5%">
          <Box fontSize="sm">
            Sort by : <span style={{ fontWeight: "700" }}>{selectedValue}</span>
          </Box>
          <ChevronDownIcon fontSize="lg" />
        </Flex>
      </MenuButton>
      <MenuList
        fontSize="sm"
        w={"299px"}
        borderRadius="none"
        border="1px solid lightgray"
        borderTop="none"
        mt="-10px"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <MenuItem
          ref={recommendedBtn}
          value="Recommended"
          minH="48px"
          onClick={(e) => {setSelectedValue(e.target.value); sortData(data, "recommended")}}
        >
          Recommended
        </MenuItem>
        <MenuItem
          value="Price: High To Low"
          minH="48px"
          onClick={(e) => {setSelectedValue(e.target.value); sortData(data, "high")}}
        >
          Price: High To Low
        </MenuItem>
        <MenuItem
          value="Price: Low To High"
          minH="48px"
          onClick={(e) => {setSelectedValue(e.target.value); sortData(data,"low")}}
        >
          Price: Low To High
        </MenuItem>
        <MenuItem
          value="Customer Rating"
          minH="48px"
          onClick={(e) => {setSelectedValue(e.target.value); sortData(data, "rating")}}
        >
          Customer Rating
        </MenuItem>
        <MenuItem
          value="Popularity"
          minH="48px"
          onClick={(e) => {setSelectedValue(e.target.value); sortData(data, "popular")}}
        >
          Popularity
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortButton;
