import React from "react";
import { Modal, ModalContent, ModalOverlay, Box, Flex } from "@chakra-ui/react";
import ItemColumn from "./ItemColumn";

function MenuData({ data, dataOf, isOpen, onClose, onOpen, hColor }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay mt="12vh" />
      <ModalContent
        position="relative"
        mt="11.8vh"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        ml="-7%"
        px="2%"
        maxW="75%"
        borderRadius="none"
      >
        {dataOf === "men" && (
          <Box
            position="absolute"
            top="-80px"
            left="2.4%"
            w="64px"
            h="80px"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "women" && (
          <Box
            position="absolute"
            top="-80px"
            left="8.1%"
            w="85px"
            h="80px"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "kids" && (
          <Box
            position="absolute"
            top="-80px"
            left="15.5%"
            w="65px"
            h="80px"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "homeAndLiving" && (
          <Box
            position="absolute"
            top="-80px"
            left="21.2%"
            w="130px"
            h="80px"
            borderBottom={isOpen && `3px solid ${hColor}`}
          ></Box>
        )}
        {dataOf === "beauty" && (
          <Box
            position="absolute"
            top="-80px"
            left="32.6%"
            w="83px"
            h="80px"
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
