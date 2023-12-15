import { Box } from "@chakra-ui/react";
import React from "react";
import ItemGroups from "./ItemGroups";

function ItemColumn({ itemBunch, hColor, index }) {
  return (
    <Box w="40%" px="10px" pb="2%" bg={index % 2 === 1 && "gray.50"}>
      {itemBunch.map((single, index) => (
        <ItemGroups
          key={index}
          heading={single.title}
          itemList={single.content}
          hColor={hColor}
        />
      ))}
    </Box>
  );
}

export default ItemColumn;
