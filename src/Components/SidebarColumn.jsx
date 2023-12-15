import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Checkbox,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

const SidebarColumn = ({ block }) => {
  const [categories, setCategories] = useState([]);
  const [isSearch, setSearch] = useState(false);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    setCategories(res.data);
  };
  return (
    <Flex
      flexDirection="column"
      p="10%"
      w="18vw"
      borderBottom="1px solid lightgray"
    >
      {block.heading === "CATEGORIES" ? (
        <>
          <Heading fontSize="sm" py="5%">
            CATEGORIES
          </Heading>
          {categories.map((category, index) => (
            <Checkbox
              colorScheme="pink"
              my="3px"
              size="sm"
              value={category}
              key={index}
              p="0 2px"
            >
              {category}
            </Checkbox>
          ))}{" "}
        </>
      ) : (
        <>
          {isSearch ? (
            <InputGroup mb="5%">
              <Input
                borderRadius="300px"
                fontSize="sm"
                bg="gray.100"
                _focus={{ boxShadow: "none" }}
                placeholder={`Search for ${block.heading}`}
                border="none"
              />
              <InputRightElement>
                <CloseIcon onClick={() => setSearch(!isSearch)} fontSize="sm" />
              </InputRightElement>
            </InputGroup>
          ) : (
            <Flex justifyContent="space-between">
              <Heading fontSize="sm" py="5%">
                {block.heading}
              </Heading>
              {(block.heading === "BRAND" || block.heading === "COLOR") && (
                <Button
                  borderRadius="50%"
                  _hover={{ backgroundColor: "none" }}
                  onClick={() => {
                    setSearch(!isSearch);
                  }}
                >
                  <SearchIcon fontSize="sm" />
                </Button>
              )}
            </Flex>
          )}
          {block.heading === "DISCOUNT RANGE" ? (
            <RadioGroup display="flex" flexDirection="column">
              {block.options.map((category, index) => (
                <Radio
                  colorScheme="pink"
                  my="3px"
                  size="sm"
                  key={index}
                  value={category}
                >
                  {category}
                </Radio>
              ))}
            </RadioGroup>
          ) : (
            block.options.map((category, index) => (
              <Checkbox
                colorScheme="pink"
                my="3px"
                size="sm"
                value={category}
                key={index}
                p="0 2px"
              >
                {category}
              </Checkbox>
            ))
          )}
        </>
      )}
    </Flex>
  );
};

export default SidebarColumn;
