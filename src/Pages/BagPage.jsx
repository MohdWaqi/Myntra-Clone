import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import bag from "../assets/icons/bagPage.png";
import { useNavigate } from "react-router-dom";

const BagPage = () => {
  const navigate = useNavigate();
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Image w="50%" src={bag} m="auto" my="5%" alt="Empty Bag" />
        <Heading fontSize="lg">Hey, it feels so light!</Heading>
        <Text fontSize="sm" color="gray" mb="10%">
          kuch khareedo humse, Hamari jeb moti karwao.
        </Text>
        <Button
          fontSize="sm"
          border="1px solid #FB2174"
          borderRadius="none"
          color="#FB2174"
          _hover={{ backgroundColor: "none" }}
          bg="none"
          _active={{ backgroundColor: "none" }}
          onClick={() => {
            navigate("/wishlist");
          }}
        >
          ADD ITEMS FROM WISHLIST
        </Button>
      </Box>
    </Flex>
  );
};

export default BagPage;
