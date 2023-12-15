import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import card from "../assets/icons/wishlistCard.png";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const navigate = useNavigate();
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Box h="50%" textAlign="center" mt="8%">
        <Heading fontSize="lg" textAlign="center" my="10%">
          PLEASE LOG IN
        </Heading>
        <Text color="gray.400" mb="10%">
          Login to view items in your wishlist.
        </Text>
        <Image w="45%" m="auto" my="10%" src={card} alt="wishlist" />
        <Button
          mt="15%"
          p="11%"
          w="60%"
          border="1px solid blue"
          color="blue"
          bg="none"
          _hover={{ backgroundColor: "none" }}
          _active={{ backgroundColor: "none" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          LOGIN
        </Button>
      </Box>
    </Flex>
  );
};

export default WishlistPage;
