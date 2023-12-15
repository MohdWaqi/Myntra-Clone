import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import Navbaritems from "./Navbaritems";

function ItemGroups({ itemList, heading, hColor, loginStyle }) {
  return (
    <>
      {!loginStyle && (
        <Heading size="xs" pt="10%" pb="5%" color={hColor}>
          {heading}
        </Heading>
      )}
      {itemList &&
        itemList.map((detail, index) => (
          <Navbaritems key={index} item={detail} />
        ))}
      {itemList && (
        <Divider
          borderColor="gray.300"
          w={!loginStyle && "70%"}
          my={loginStyle ? "5%" : "5px"}
        />
      )}
    </>
  );
}

export default ItemGroups;
