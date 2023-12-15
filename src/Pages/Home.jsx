import { Box, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import bannerFemale from "../assets/banner/kiara.jpg";
import bannerMale from "../assets/banner/siddharth.jpg";
import cashback from "../assets/coupons/cashback400.jpg";
import libas from "../assets/headings/libas.jpg";
import couponHeading from "../assets/headings/coupon.jpg";
import cashback100 from "../assets/coupons/cashback100.jpg";
import cashback200 from "../assets/coupons/cashback200.jpg";
import festival from "../assets/headings/festival.jpg";
import offer1 from "../assets/offer/1.png";
import offer2 from "../assets/offer/2.png";
import offer3 from "../assets/offer/3.png";
import offer4 from "../assets/offer/4.png";
import offer5 from "../assets/offer/5.png";
import offer6 from "../assets/offer/6.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import categoryHeading from "../assets/headings/category.jpg";
import Categories from "../Components/Categories";
import additional1 from "../assets/bags/1.jpg";
import additional2 from "../assets/bags/2.jpg";
import additional3 from "../assets/bags/3.jpg";
import myntraApp from "../assets/headings/app.jpg";
import Cashback from "../Components/Cashback";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Box overflow="hidden" mt="7%" position="relative">
      <Cashback />
      <Center>
        <Image w="96vw" src={cashback} />
      </Center>
      <Flex
        w="50vw"
        onClick={() => {
          navigate("/products");
        }}
      >
        <Image src={bannerFemale} />
        <Image src={bannerMale} />
      </Flex>
      <Image src={libas} />
      <Image src={couponHeading} />
      <Flex w="50vw">
        <Image src={cashback100} />
        <Image src={cashback200} />
      </Flex>
      <Image src={festival} mb="1%" />
      <Carousel
        autoPlay={true}
        interval={4000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        stopOnHover={true}
      >
        <Box w="16.70%" display="flex">
          <Image src={offer1} />
          <Image src={offer2} />
          <Image src={offer3} />
          <Image src={offer4} />
          <Image src={offer5} />
          <Image src={offer6} />
        </Box>
        <Box w="16.70%" display="flex">
          <Image src={offer1} />
          <Image src={offer2} />
          <Image src={offer3} />
          <Image src={offer4} />
          <Image src={offer5} />
          <Image src={offer6} />
        </Box>
      </Carousel>
      <Image src={categoryHeading} />
      <Categories/>
      
      <Flex>
        <Image w="40%" src={additional1} />
        <Image w="40%" src={additional2} />
        <Image w="40%" src={additional3} />
      </Flex>
      <Image src={myntraApp} />
    </Box>
  );
}

export default Home;
