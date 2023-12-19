import React, { useContext } from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  Button,
  Divider,
} from "@chakra-ui/react";
import logo from "../assets/logo/logo.png";
import user from "../assets/icons/user.png";
import wishlist from "../assets/icons/wishlist.png";
import bag from "../assets/icons/bag.png";
import { SearchIcon } from "@chakra-ui/icons";
import ItemGroups from "./ItemGroups";
import MenuData from "./Menu";
import menData from "../men.json";
import womenData from "../women.json";
import kidsData from "../kids.json";
import homeAndLiving from "../homeAndLiving";
import beauty from "../beauty.json";
import sutdioLogo from "../assets/icons/studio-logo-new.svg";
import studioBanner from "../assets/banner/sudio-nav-banner.png";
import rightArrowHead from "../assets/icons/chevron-right.svg";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const {
    isOpen: menIsOpen,
    onOpen: menOnOpen,
    onClose: menOnClose,
  } = useDisclosure();
  const {
    isOpen: kidsIsOpen,
    onOpen: kidsOnOpen,
    onClose: kidsOnClose,
  } = useDisclosure();
  const {
    isOpen: homeAndLivingIsOpen,
    onOpen: homeAndLivingOnOpen,
    onClose: homeAndLivingOnClose,
  } = useDisclosure();
  const {
    isOpen: beautyIsOpen,
    onOpen: beautyOnOpen,
    onClose: beautyOnClose,
  } = useDisclosure();
  const {
    isOpen: womenIsOpen,
    onOpen: womenOnOpen,
    onClose: womenOnClose,
  } = useDisclosure();
  const {
    isOpen: studioIsOpen,
    onOpen: studioOnOpen,
    onClose: studioOnClose,
  } = useDisclosure();
  const {
    isOpen: logInIsOpen,
    onOpen: logInOnOpen,
    onClose: logInOnClose,
  } = useDisclosure();
  const { loginPage, isAuth, setIsAuth, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Stack
      h="81px"
      boxShadow="lg"
      as="header"
      position="fixed"
      w="100%"
      bg="white"
      top="0"
      zIndex={1}
    >
      <Flex alignItems="center" h="100%">
        <Image
          onClick={() => {
            navigate("/");
          }}
          w="3.5%"
          src={logo}
          alt="logo"
          ml="4%"
        />
        <Flex h="100%" w="65%" ml={{"2xl":"3.5%", xl:"2%"}}>
          <Box
            // px="19px"
            px="3%"
            fontSize="xs"
            fontWeight="700"
            mt="5.8%"
            onMouseEnter={menOnOpen}
          >
            MEN
          </Box>

          <MenuData
            data={menData}
            isOpen={menIsOpen}
            onOpen={menOnOpen}
            onClose={menOnClose}
            dataOf="men"
            hColor="#FA6262"
          />

          <Box
            px="3.5%"
            fontSize="xs"
            fontWeight="700"
            mt="5.8%"
            onMouseEnter={womenOnOpen}
          >
            WOMEN
          </Box>
          <MenuData
            data={womenData}
            isOpen={womenIsOpen}
            onOpen={womenOnOpen}
            onClose={womenOnClose}
            dataOf="women"
            hColor="#E16DCD"
          />
          <Box
            px="3.5%"
            fontSize="xs"
            fontWeight="700"
            mt="5.8%"
            onMouseEnter={kidsOnOpen}
          >
            KIDS
          </Box>
          <MenuData
            data={kidsData}
            isOpen={kidsIsOpen}
            onOpen={kidsOnOpen}
            onClose={kidsOnClose}
            dataOf="kids"
            hColor="#F08435"
          />
          <Box
            px="3.2%"
            fontSize="xs"
            fontWeight="700"
            mt="5.8%"
            onMouseEnter={homeAndLivingOnOpen}
            w={{"2xl":"max-content", xl:"300px"}}
          >
            HOME & LIVING
          </Box>
          <MenuData
            data={homeAndLiving}
            isOpen={homeAndLivingIsOpen}
            onOpen={homeAndLivingOnOpen}
            onClose={homeAndLivingOnClose}
            dataOf="homeAndLiving"
            hColor="#F0C535"
          />
          <Box
            px="3.55%"
            fontSize="xs"
            fontWeight="700"
            mt="5.8%"
            onMouseEnter={beautyOnOpen}
          >
            BEAUTY
          </Box>
          <MenuData
            data={beauty}
            isOpen={beautyIsOpen}
            onOpen={beautyOnOpen}
            onClose={beautyOnClose}
            dataOf="beauty"
            hColor="#38CA9F"
          />
          <Box
            px="3.5%"
            fontSize="xs"
            fontWeight="700"
            mt="5.8%"
            position="relative"
            onMouseEnter={studioOnOpen}
          >
            STUDIO
            <Text
              position="absolute"
              top="-1"
              color="hotpink"
              as="b"
              fontSize="xs"
            >
              NEW
            </Text>
          </Box>
          <Modal isOpen={studioIsOpen} preserveScrollBarGap>
            <ModalOverlay mt="11vh" />

            <ModalContent
              position="relative"
              mt="11vh"
              onMouseEnter={studioOnOpen}
              onMouseLeave={studioOnClose}
              ml="-17%"
              p="2%"
              maxW="35%"
              borderRadius="none"
            >
              <Box
                position="absolute"
                top="-80px"
                left="41.7%"
                w="83px"
                h="80px"
                borderBottom={studioIsOpen && `3px solid #F22E97`}
              ></Box>
              <Center>
                <Image w="20%" mb="2%" src={sutdioLogo} />
              </Center>
              <Center>
                <Text mb="6%">
                  Your daily inspiration for everything fashion
                </Text>
              </Center>
              <Image src={studioBanner} />
              <Center>
                <Button
                  mt="5%"
                  bg="transparent"
                  border="1px solid lightgray"
                  borderRadius="none"
                  fontSize="sm"
                  _hover={{ backgroundColor: "transparent" }}
                  _focus={{ boxShadow: "none" }}
                  w="40%"
                >
                  EXPLORE STUDIO <Image src={rightArrowHead} />
                </Button>
              </Center>
            </ModalContent>
          </Modal>
        </Flex>
        <InputGroup w="max-content" mr="2%" ml="4%">
          <InputLeftElement>
            <SearchIcon color="gray" />
          </InputLeftElement>
          <Input
            bg="gray.100"
            placeholder="Search for products, brands and more"
            fontSize="sm"
            pb="5px"
            pl="9%"
            w="520px"
          />
        </InputGroup>
        <Flex h="100%">
          <Menu isOpen={logInIsOpen}>
            {!loginPage && (
              <MenuButton
                h="76%"
                px="10px"
                mt="18px"
                mx="5px"
                onMouseEnter={logInOnOpen}
                onMouseLeave={logInOnClose}
              >
                <Center>
                  <Image w="25px" my="-6px" src={user} />
                </Center>
                <Text as="b" fontSize="xs">
                  Profile
                </Text>
              </MenuButton>
            )}
            <MenuList
              onMouseEnter={logInOnOpen}
              onMouseLeave={logInOnClose}
              mt="-2.9%"
              mr="-20%"
              position="relative"
              p="10%"
              maxW="400px"
              borderRadius="none"
            >
              <Box
                w="65px"
                h="75px"
                position="absolute"
                top="-18.6%"
                right="15%"
                borderBottom="3px solid #F22E97"
              ></Box>
              <Box>
                <Heading fontSize="sm">Welcome</Heading>
                <Text fontSize="sm">
                  {isAuth
                    ? "Mohd Waqi Pervez"
                    : "To access account and manage orders"}
                </Text>
                {!isAuth && (
                  <Button
                    fontSize="sm"
                    bg="transparent"
                    borderRadius="none"
                    border="1px solid lightgray"
                    _hover={{
                      backgroundColor: "transparent",
                      border: "1px solid #F22E97",
                    }}
                    color="#F22E97"
                    my="4%"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    LOGIN / SIGNUP
                  </Button>
                )}
                <Divider my="4%" />
                <ItemGroups
                  itemList={[
                    "Orders",
                    "Wishlist",
                    "Gift Cards",
                    "Contact Us",
                    "Myntra Insider",
                  ]}
                  loginStyle={true}
                />
                <ItemGroups
                  itemList={[
                    "Myntra Credit",
                    "Coupons",
                    "Saved Cards",
                    "Saved VPA",
                    "Saved Addresses",
                    "Developed by",
                    "Mohd Waqi Pervez",
                  ]}
                  loginStyle={true}
                />
                {isAuth && (
                  <Text
                    _hover={{ fontWeight: "700" }}
                    fontSize="sm"
                    onClick={() => {
                      setIsAuth(false);
                      setToken("");
                      navigate("/");
                    }}
                    color="gray.600"
                  >
                    Logout
                  </Text>
                )}
              </Box>
            </MenuList>
          </Menu>
          <Box
            px="10px"
            mt="18px"
            mx="5px"
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <Center>
              <Image w="20px" mt="4px" src={wishlist} />
            </Center>
            <Text as="b" fontSize="xs">
              Wishlist
            </Text>
          </Box>
          <Box
            px="10px"
            mt="18px"
            mx="5px"
            onClick={() => {
              navigate("/bag");
            }}
          >
            <Center>
              <Image w="20px" mt="4px" src={bag} />
            </Center>
            <Text as="b" fontSize="xs">
              Bag
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Navbar;
