import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import playStore from "../assets/icons/androidapp.png";
import appleStore from "../assets/icons/iphoneapp.png";
import fb from "../assets/icons/facebook.png";
import insta from "../assets/icons/insta.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import original from "../assets/icons/original.png";
import returnPolicy from "../assets/icons/return.png";

function Footer() {
  return (
    <Box bg="gray.100">
      <Center>
        <Box w="71%" m="2%">
          <Flex fontSize="sm" color="gray">
            <Flex flexDirection="column" lineHeight="28px" w="16%" mr="2%">
              <Text as="b" fontSize="xs" color="black" my="10%">
                ONLINE SHOPPING
              </Text>
              <Text>Men</Text>
              <Text>Women</Text>
              <Text>Kids</Text>
              <Text>Home & Living</Text>
              <Text>Beauty</Text>
              <Text>Gift Cards</Text>
              <Text>Myntra Insider</Text>
              <Text as="b" fontSize="xs" color="black" my="10%">
                USEFUL LINKS
              </Text>
              <Text>Blogs</Text>
              <Text>Careers</Text>
              <Text>Site Map</Text>
              <Text>Corporate Information</Text>
              <Text>Whitehat</Text>
              <Text>ClearTrip</Text>
            </Flex>
            <Flex flexDirection="column" lineHeight="28px" w="16%">
              <Text as="b" fontSize="xs" color="black" my="10%">
                CUSTOMER POLICIES
              </Text>
              <Text>Contact Us</Text>
              <Text>FAQ</Text>
              <Text>T&C</Text>
              <Text>Terms Of Use</Text>
              <Text>Track Orders</Text>
              <Text>Shipping</Text>
              <Text>Cancellation</Text>
              <Text>Returns</Text>
              <Text>Privacy policy</Text>
              <Text>Grievance Officer</Text>
            </Flex>
            <Flex flexDirection="column" lineHeight="28px" w="40%">
              <Text as="b" fontSize="xs" color="black" my="8%">
                EXPERIENCE MYNTRA APP ON MOBILE
              </Text>
              <Flex>
                <Image w="40%" src={playStore} />
                <Image w="40%" mx="3%" src={appleStore} />
              </Flex>
              <Text as="b" fontSize="xs" color="black" mt="8%" mb="3%">
                KEEP IN TOUCH
              </Text>
              <Flex>
                <Image w="6%" h="78%" src={fb} />
                <Image w="6%" h="78%" ml="3%" src={twitter} />
                <Image w="6%" h="78%" ml="3%" src={youtube} />
                <Image w="6%" h="78%" ml="3%" src={insta} />
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Flex w="60%" my="7.5%">
                <Image w="20%" h="95%" mr="5%" src={original} />
                <Text>
                  <Text color="black" as="b" mr="2%">
                    100% ORIGINAL
                  </Text>
                  guarantee for all products at myntra.com
                </Text>
              </Flex>
              <Flex w="60%">
                <Image w="20%" h="95%" mr="5%" src={returnPolicy} />
                <Text>
                  <Text color="black" as="b" mr="2%">
                    Return within 14days
                  </Text>
                  of receiving your order
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box position="relative" padding="10" fontSize="xs">
            <Divider borderColor="gray.300" />
            <Text
              position="absolute"
              top="40%"
              left="0"
              pr="10px"
              bg="gray.100"
              as="b"
            >
              POPULAR SEARCHES
            </Text>
          </Box>
          <Box>
            <Text fontSize="sm" color="gray">
              Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
              Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
              Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops
              | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches |
              Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes |
              Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini |
              Myntra Fashion Show | Lipstick | Saree | Watches | Dresses |
              Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
              Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
            </Text>
          </Box>
          <Flex justifyContent="space-between" color="gray" my="4%">
            <Box>
              <Text>
                In case of any concern,
                <Link
                  ml="5px"
                  _hover={{ textDecoration: "none" }}
                  color="blue"
                  as="b"
                >
                  Contact Us
                </Link>
              </Text>
            </Box>
            <Text>© 2023 All rights reserved.</Text>
            <Text>Developed by: MOHD WAQI PERVEZ</Text>
          </Flex>
          <Divider borderColor="gray.300" />
        </Box>
      </Center>
    </Box>
  );
}

export default Footer;
