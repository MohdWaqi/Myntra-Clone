import { Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbaritems({ item }) {
  const navigate = useNavigate();
  return (
    <Text
      _hover={{ fontWeight: "700" }}
      onClick={() => {
        navigate("/products");
      }}
      fontSize="sm"
      color="gray.600"
    >
      {item}
    </Text>
  );
}

export default Navbaritems;
