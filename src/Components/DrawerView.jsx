import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Flex,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

const DrawerView = ({ btnRef, isOpen, onClose, data }) => {
  const [products, setProducts] = useState(data);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="lg"
      isFullHeight={true}
    >
      <DrawerOverlay />
      <DrawerContent p="2%">
        <DrawerCloseButton />
        <DrawerHeader w="fit-content" m="auto" mb="3%">
          SIMILAR PRODUCTS
        </DrawerHeader>

        <DrawerBody>
          <Flex flexWrap="wrap" justifyContent="space-evenly">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                photo={product.image}
                rating={product.rating.rate}
                ratingCount={product.rating.count}
                drawer={true}
              />
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerView;
