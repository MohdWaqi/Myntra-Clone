import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";

const DropDown = ({ title, child }) => {
  return (
    <AccordionItem border="none">
      <h2>
        <AccordionButton
          fontSize="xs"
          w="fit-content"
          borderRadius="30px"
          m="8px"
          zIndex="1"
        >
          <Box as="span" flex="1" textAlign="left" w="fit-content">
            {title}
          </Box>
          <AccordionIcon ml="10px" />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={4}
        position="absolute"
        w="80vw"
        left="-3"
        boxShadow={"rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"}
        bg="white"
      >
        {child.map((element, index) => (
          <Checkbox key={index} size="sm" m="10px" colorScheme="pink">
            {element}
          </Checkbox>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default DropDown;
