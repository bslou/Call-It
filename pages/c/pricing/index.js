import Image from "next/image";
import { Flex, Button, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Head from "next/head";

/**
 *
 * Pricing based on:
 * Recordings
 * Amount of calls
 * Different People
 *
 */

const Pricing = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Call-It - Pricing Page</title>
        <meta
          name="description"
          content="Unlock the power of AI for your marketing and user retention efforts with Call-It, the startup revolutionizing cold calling. Let our cutting-edge technology take the lead in reaching and engaging with your target audience, resulting in increased conversions and customer satisfaction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        overflowY={"scroll"}
        gap={5}
      >
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={5}
        >
          <Image
            src={"/assets/ringer.png"}
            alt={"Cold Call, Call-It ringer"}
            width={50}
            height={50}
          />
          <Button
            colorScheme={"transparent"}
            color={"#E8761C"}
            fontSize={"18pt"}
            fontWeight={900}
            onClick={() => router.push("/c/main")}
          >
            Call-It
          </Button>
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          gap={8}
          paddingLeft={5}
          paddingRight={5}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={6}
            boxShadow={"0 2px 8px rgba(0, 0, 0, 0.2)"}
            borderRadius={8}
            padding={5}
            marginBottom={2}
            marginTop={2}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                textAlign={"center"}
                color={"blue"}
                fontWeight={600}
                fontSize={"18pt"}
              >
                Pro
              </Text>
              <Text
                textAlign={"center"}
                color={"black"}
                fontWeight={700}
                fontSize={"23pt"}
              >
                $125/mo
              </Text>
            </Flex>
            <Text
              width={300}
              color={"black"}
              fontSize={"17pt"}
              textAlign={"center"}
            >
              Best to see if the service is effective for your business.
            </Text>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>500 Phone calls</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>250 Recordings</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>100 Different people</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>5 Projects</Text>
              <InfoIcon />
            </Flex>
            <Button
              backgroundColor={"#E8761C"}
              fontSize={"13pt"}
              color={"white"}
              fontWeight={600}
              colorScheme={"transparent"}
              width={"100%"}
              onClick={() => router.push("/app/main")}
            >
              Try It Free
            </Button>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={6}
            boxShadow={"0 2px 8px rgba(0, 0, 0, 0.2)"}
            borderRadius={8}
            padding={5}
            marginBottom={2}
            marginTop={2}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                textAlign={"center"}
                color={"blue"}
                fontWeight={600}
                fontSize={"18pt"}
              >
                Guru
              </Text>
              <Text
                textAlign={"center"}
                color={"black"}
                fontWeight={700}
                fontSize={"23pt"}
              >
                $150/mo
              </Text>
            </Flex>
            <Text
              width={300}
              color={"black"}
              fontSize={"17pt"}
              textAlign={"center"}
            >
              Best for businesses requiring some users for testing.
            </Text>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>1000 Phone calls</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>750 Recordings</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>400 Different people</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>10 Projects</Text>
              <InfoIcon />
            </Flex>
            <Button
              backgroundColor={"#E8761C"}
              fontSize={"13pt"}
              color={"white"}
              fontWeight={600}
              colorScheme={"transparent"}
              width={"100%"}
              onClick={() => router.push("/app/main")}
            >
              Try It Free
            </Button>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={6}
            boxShadow={"0 2px 8px rgba(0, 0, 0, 0.2)"}
            borderRadius={8}
            padding={5}
            marginBottom={2}
            marginTop={2}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                textAlign={"center"}
                color={"blue"}
                fontWeight={600}
                fontSize={"18pt"}
              >
                Business
              </Text>
              <Text
                textAlign={"center"}
                color={"black"}
                fontWeight={700}
                fontSize={"23pt"}
              >
                $200/mo
              </Text>
            </Flex>
            <Text
              width={300}
              color={"black"}
              fontSize={"17pt"}
              textAlign={"center"}
            >
              Best to drastically increase business userbase.
            </Text>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>2000 Phone calls</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>1500 Recordings</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>1500 Different people</Text>
              <InfoIcon />
            </Flex>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={3}
              borderTop={"1px solid #dfdfdf"}
              width={"75%"}
            >
              <Text>20 Projects</Text>
              <InfoIcon />
            </Flex>
            <Button
              backgroundColor={"#E8761C"}
              fontSize={"13pt"}
              color={"white"}
              fontWeight={600}
              colorScheme={"transparent"}
              width={"100%"}
              onClick={() => router.push("/app/main")}
            >
              Try It Free
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Pricing;
