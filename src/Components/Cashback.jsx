import {
  Box,
  Button,
  Heading,
  Flex,
  Divider,
  Text,
  Image,
  useControllableState,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  RepeatClockIcon,
  RepeatIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import cashback400 from "../assets/coupons/400off.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Cashback() {
  const [clicked, setClicked] = useControllableState(false);
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  return (
    <Box
      h="300px"
      position="fixed"
      zIndex="1"
      ml="100px"
      backgroundImage="linear-gradient(270deg,#fef9e5,#fde3f3)"
      right="0"
      top="250"
      w={!clicked && "0px"}
    >
      <Button
        transform="rotate(-90deg)"
        top="55%"
        mt="-60px"
        ml="-172px"
        zIndex="1"
        w="300px"
        borderRadius="none"
        fontSize="2xl"
        fontWeight="700"
        textAlign="left"
        p="22px"
        bg="gray.600"
        color="white"
        _hover={{ backgroundColor: "none" }}
        _active={{ backgroundColor: "none" }}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        FLAT ₹400 OFF{" "}
        {!clicked ? (
          <TriangleUpIcon ml="40px" />
        ) : (
          <TriangleDownIcon ml="40px" />
        )}
      </Button>
      {clicked && (
        <Box>
          <Flex
            mt="-10px"
            onClick={() => {
              navigate("/products");
            }}
          >
            <Box m="50px 0px 20px 40px">
              <Heading fontSize="xs">Avail Flat</Heading>
              <Heading fontSize="5xl" w="260px">
                400 OFF
              </Heading>
            </Box>
            <Box w="260px">
              <Image w="150px" src={cashback400} mt="20px" />
            </Box>
          </Flex>
          <Flex>
            <Box
              w="320px"
              p="20px 0px 20px 30px"
              onClick={() => {
                navigate("/products");
              }}
            >
              <Flex>
                <Heading fontSize="sm" pt="5px" mr="10px">
                  Coupon Code:{" "}
                </Heading>
                <Heading fontSize="xl">MYNTRA400</Heading>
              </Flex>
              <Text fontSize={"xs"} mt="5px">
                Applicable on your first order
              </Text>
            </Box>
            {!isAuth && (
              <Button
                borderRadius="2px"
                m="20px 40px"
                fontWeight="700"
                color="white"
                p="25px 27px"
                bg="#F22E97"
                _hover={{
                  backgroundColor: "none",
                  boxShadow:
                    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
                }}
                _active={{ backgroundColor: "none" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                SIGN UP NOW {">"}
              </Button>
            )}
          </Flex>
          <Divider borderColor={"gray.400"} />
          <Flex>
            <Text p="10px 20px">
              <CheckCircleIcon /> Genuine Products
            </Text>
            <Text p="10px 20px">
              <RepeatClockIcon /> Try & Buy
            </Text>
            <Text p="10px 20px">
              <RepeatIcon /> Easy Exchanges & Returns
            </Text>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Cashback;
