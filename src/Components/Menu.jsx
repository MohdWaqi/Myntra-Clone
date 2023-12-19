import React from "react";
import { extendTheme } from "@chakra-ui/react";
import { Modal, ModalContent, ModalOverlay, Box, Flex } from "@chakra-ui/react";
import ItemColumn from "./ItemColumn";

function MenuData({ data, dataOf, isOpen, onClose, onOpen, hColor }) {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  const theme = extendTheme({ breakpoints });
  return (
    <Modal isOpen={isOpen} preserveScrollBarGap>
      <ModalOverlay mt={{"2xl":"5.2%", xl: "6.3%"}} />
      <ModalContent
        position="relative"
        mt={{"2xl":"11vh", xl:"10.2vh"}}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        ml={{"2xl":"-7%", xl:"-9.8%"}}
        px="2%"
        maxW="75%"
        borderRadius="none"
      >
        {dataOf === "men" && (
          <Box
            position="absolute"
            top="-80px"
            left="2.4%"
            w={{"2xl":"5.4%", xl:"6%"}}
            h="18%"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "women" && (
          <Box
            position="absolute"
            top="-80px"
            left="7.8%"
            w="7.5%"
            h="18%"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "kids" && (
          <Box
            position="absolute"
            top="-80px"
            left="15.3%"
            w="65px"
            h="18.5%"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "homeAndLiving" && (
          <Box
            position="absolute"
            top="-80px"
            left="20.9%"
            w="130px"
            h="16%"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "beauty" && (
          <Box
            position="absolute"
            top="-80px"
            left="32%"
            w="83px"
            h="17.5%"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        <Flex>
          {data.map((singleColumn, index) => (
            <ItemColumn
              key={index}
              itemBunch={singleColumn}
              hColor={hColor}
              index={index}
            />
          ))}
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default MenuData;
