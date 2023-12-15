import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import wishlist from "../assets/icons/wishlist.png";
import DrawerView from "./DrawerView";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  price,
  photo,
  rating,
  ratingCount,
  drawer,
  data
}) => {
  const [isHover, setHover] = useState(false);
  const [viewHover, setViewHover] = useState(false);
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Box
      w="250px"
      mb="5%"
      onMouseEnter={() => {
        setHover(true);
      }}
      boxShadow={isHover && "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      onMouseLeave={() => {
        setHover(false);
      }}
      position="relative"

    >
      <Box position="relative" h="400px" alignItems="center">
      <Link href={`/products/${id}`}>
        <Image src={photo} alt={name} objectFit="cover"  />
        </Link>
        {!isHover ? (
          <Text
            position="absolute"
            fontSize="xs"
            as="b"
            bg="rgba(0, 0, 0, 0.3)"
            p="3%"
            top="90%"
            color="white"
            left="5%"
          >
            {rating} <StarIcon color="green" /> | {ratingCount}
          </Text>
        ) : (
          <Box
            position="absolute"
            top="80%"
            p="3% 4%"
            borderRadius="50px"
            right="5%"
            onMouseEnter={() => {
              setViewHover(true);
            }}
            onMouseLeave={() => {
              setViewHover(false);
            }}
            fontSize="xs"
            bg="gray.100"
            fontWeight="700"
            color="hotpink"
            onClick={onOpen}
            ref={btnRef}
          >
            <ViewIcon fontSize="lg" mr={viewHover && "10px"} />
            {viewHover && "VIEW SIMILAR"}
          </Box>
        )}
        {!drawer && (
          <DrawerView btnRef={btnRef} isOpen={isOpen} onClose={onClose} data={data} />
        )}
      </Box>
      <Box p="5%">
        <Heading size="sm">{name.substring(0, 20)} ...</Heading>
        {isHover && (
          <Flex
            position="absolute"
            w="100%"
            left="-0.4%"
            top="73.8%"
            bg="white"
          >
            <Button
              w="80%"
              m="auto"
              my="5%"
              fontSize="sm"
              borderRadius="2px"
              bg="none"
              border="1px solid lightgray"
              _active={{ backgroundColor: "none" }}
              _hover={{ backgroundColor: "none", border: "1px solid black" }}
              onClick={() => {
                !isAuth && navigate("/wishlist");
              }}
            >
              <Image w="20px" mr="5%" src={wishlist} /> WISHLIST
            </Button>
          </Flex>
        )}
        <Text fontWeight="300">
          {isHover ? "Size: M" : name.substring(0, 25)} {!isHover && "..."}
        </Text>
        <Heading size="sm" mt="5%">
          Rs. {Math.floor(price * 83.2)}
        </Heading>
      </Box>
    </Box>
  );
};

export default ProductCard;
