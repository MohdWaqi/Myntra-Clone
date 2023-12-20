import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import cashback from "../assets/coupons/loginCashback.jpg";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setLogin, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    setLogin(true);
    const notLoginPage = () => {
      setLogin(false);
    };
    return notLoginPage;
  }, []);
  const handleLogin = async () => {
    const user = { email, password };
    if (email === "eve.holt@reqres.in" && password != "") {
      const res = await axios.post("https://reqres.in/api/login", user);
      if (res.data.token) {
        setEmail("");
        setPassword("");
        setIsAuth(true);
        setToken(res.data.token);
        toast({
          title: "Logged in Successfully",
          position: "top",
          status: "success",
          duration: 3000,
        });
        navigate("/");
      }
    } else {
      toast({
        title: "Invalid Login",
        description: "Please enter correct email and password ",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex h="100vh" bg="#FFEBF2">
      <Box h="80vh" w={{"2xl":"25.5%", xl:"32%"}} m="auto" bg="white" mt="110px">
        <Image src={cashback} alt="cashback" />
        <Box>
          <Heading fontSize="lg" w="fit-content" m="auto" my="5%">
            Login
          </Heading>
          <Box w="80%" m="auto">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <Input
                type="email"
                borderRadius="none"
                value={email}
                my="5%"
                fontSize="sm"
                placeholder="Type your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                borderRadius="none"
                value={password}
                placeholder="Type your Password"
                my="5%"
                fontSize="sm"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Text fontSize="xs">
                Hint: Use reqres.in login email & password.
              </Text>
              <Button
                type="submit"
                w="100%"
                mt="5%"
                fontSize="sm"
                fontWeight="700"
                bg="#FB2174"
                color="white"
                borderRadius="none"
                _hover={{ backgroundColor: "none" }}
                _active={{ backgroundColor: "none" }}
                onClick={handleLogin}
              >
                LOG IN
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
