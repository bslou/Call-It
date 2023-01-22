import { Button, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Main = () => {
  const router = useRouter();
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Call-It - AI Powered Calling</title>
        <meta
          name="description"
          content="Unlock the power of AI for your marketing and user retention efforts with Call-It, the startup revolutionizing cold calling. Let our cutting-edge technology take the lead in reaching and engaging with your target audience, resulting in increased conversions and customer satisfaction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"} alignItems={"center"}>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          backgroundColor={"white"}
          zIndex={isFixed ? 1 : 0}
          width={"100%"}
          position={isFixed ? "fixed" : "relative"}
          paddingLeft={100}
          paddingRight={100}
          paddingTop={isFixed ? 6 : 8}
          paddingBottom={isFixed ? 6 : 8}
          transition="top 0.3s ease-in-out"
          boxShadow={isFixed ? "0 2px 5px rgba(0, 0, 0, 0.5)" : null}
        >
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
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
          <Button
            backgroundColor={"#E8761C"}
            fontSize={"12pt"}
            color={"white"}
            fontWeight={600}
            borderRadius={50}
            colorScheme={"transparent"}
            _hover={{
              opacity: 0.8,
            }}
            onClick={() => router.push("/c/register")}
          >
            Try It Free
          </Button>
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100vw"}
          bgGradient="linear(to-r, #6019CD, #548FF1)"
          gap={"5%"}
          paddingTop={20}
          paddingBottom={20}
        >
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            gap={3}
            width={"35%"}
          >
            <Text fontSize={"40pt"} color={"white"} fontWeight={700}>
              Crush Business with Cold Calls
            </Text>
            <Text color={"white"} fontSize={"22pt"}>
              Get more traffic to your business and maintain great customer
              service. Take on any challenge with Call-It.
            </Text>
            <Button
              backgroundColor={"#E8761C"}
              fontSize={"18pt"}
              color={"white"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              Try It Free
            </Button>
          </Flex>
          <Flex width={"30%"}></Flex>
          <Flex position={"absolute"} width={"32%"} right={"15%"}>
            <img src={"/assets/one.png"} alt={"Cold Call Call-It"} />
          </Flex>
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          paddingTop={20}
          paddingBottom={20}
          gap={10}
        >
          <Flex
            direction={"column"}
            gap={2}
            width={"40%"}
            alignItems={"flex-start"}
          >
            <Text fontSize={"30pt"} fontWeight={700}>
              Create a Winning Business
            </Text>
            <Text fontWeight={300} fontSize={"15pt"}>
              Make our AI call thousands of people daily. This will greatly
              improve every aspect of your business.
            </Text>
            <UnorderedList>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Get users rapidly to try out your product/service
              </ListItem>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Grow the startup branding and get feedback readily on your
                business
              </ListItem>
            </UnorderedList>
            <Button
              backgroundColor={"#fff"}
              border={"2px solid #E8761C"}
              fontSize={"18pt"}
              color={"#000"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              AI Cold Call
            </Button>
          </Flex>
          <img
            src={"/assets/two.jpeg"}
            alt={"Cold call call-it higher statistics"}
            width={"40%"}
            style={{
              borderRadius: 15,
              boxShadow: "0 2px 15px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Flex>

        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          paddingTop={20}
          paddingBottom={20}
          gap={10}
        >
          <img
            src={"/assets/three.jpeg"}
            alt={"Cold call call-it higher statistics"}
            width={"40%"}
            style={{
              borderRadius: 15,
              boxShadow: "0 2px 15px rgba(0, 0, 0, 0.5)",
            }}
          />
          <Flex
            direction={"column"}
            gap={2}
            width={"40%"}
            alignItems={"flex-start"}
          >
            <Text fontSize={"30pt"} fontWeight={700}>
              Have great company reputation
            </Text>
            <Text fontWeight={300} fontSize={"15pt"}>
              Make our AI call thousands of people daily. This will greatly
              improve every aspect of your business.
            </Text>
            <UnorderedList>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Retain users and create a great environment through constant
                check-ins with calls
              </ListItem>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Let the AI manage business decisions
              </ListItem>
            </UnorderedList>
            <Button
              backgroundColor={"#fff"}
              border={"2px solid #E8761C"}
              fontSize={"18pt"}
              color={"#000"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              Increase Reputation
            </Button>
          </Flex>
        </Flex>

        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          paddingTop={20}
          paddingBottom={20}
          gap={10}
        >
          <Flex
            direction={"column"}
            gap={2}
            width={"40%"}
            alignItems={"flex-start"}
          >
            <Text fontSize={"30pt"} fontWeight={700}>
              Utilize Analytics
            </Text>
            <Text fontWeight={300} fontSize={"15pt"}>
              Call analytics are provided for testing purposes related to
              business.
            </Text>
            <UnorderedList>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Analyze phone call retentions and statistics which show idea
                influence
              </ListItem>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Analyze whether people are interested in the idea or not based
                on the conversations
              </ListItem>
            </UnorderedList>
            <Button
              backgroundColor={"#fff"}
              border={"2px solid #E8761C"}
              fontSize={"18pt"}
              color={"#000"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              Use Analytics
            </Button>
          </Flex>
          <img
            src={"/assets/four.webp"}
            alt={"Cold call call-it higher statistics, graphs, and analytics"}
            width={"40%"}
            style={{
              borderRadius: 15,
              boxShadow: "0 2px 15px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          paddingTop={20}
          paddingBottom={20}
          gap={10}
        >
          <img
            src={"/assets/five.webp"}
            alt={"Cold call call-it higher statistics, graphs, and analytics"}
            width={"40%"}
            style={{
              borderRadius: 15,
              boxShadow: "0 2px 15px rgba(0, 0, 0, 0.5)",
            }}
          />
          <Flex
            direction={"column"}
            gap={2}
            width={"40%"}
            alignItems={"flex-start"}
          >
            <Text fontSize={"30pt"} fontWeight={700}>
              Custom Messages
            </Text>
            <Text fontWeight={300} fontSize={"15pt"}>
              Let AI create custom messages to converse and talk to the person
              about.
            </Text>
            <UnorderedList>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Influence what the AI will say initially, and dictate whether
                the conversation will start before the call
              </ListItem>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                Call numerous people daily with various messages intents
              </ListItem>
            </UnorderedList>
            <Button
              backgroundColor={"#fff"}
              border={"2px solid #E8761C"}
              fontSize={"18pt"}
              color={"#000"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              Generate Custom Messages
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          paddingTop={20}
          paddingBottom={20}
          gap={10}
        >
          <Flex
            direction={"column"}
            gap={2}
            width={"40%"}
            alignItems={"flex-start"}
          >
            <Text fontSize={"30pt"} fontWeight={700}>
              Our Story
            </Text>
            <Text fontWeight={300} fontSize={"15pt"}>
              We have utilized cold calling over the years to market our
              products, but the process is consuming and takes too much time.
            </Text>
            <UnorderedList>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                We created the AI robot cold caller to save time, and further
                promote the product to potential users
              </ListItem>
              <ListItem fontWeight={300} fontSize={"15pt"}>
                We also created the AI robot as it has the potential to word
                itself and promote the product better than a human
              </ListItem>
            </UnorderedList>
            <Button
              backgroundColor={"#fff"}
              border={"2px solid #E8761C"}
              fontSize={"18pt"}
              color={"#000"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              Call-It Effect
            </Button>
          </Flex>
          <img
            src={"/assets/six.webp"}
            alt={"Cold call call-it higher statistics, graphs, and analytics"}
            width={"40%"}
            style={{
              borderRadius: 15,
              boxShadow: "0 2px 15px rgba(0, 0, 0, 0.5)",
            }}
          />
        </Flex>
        <Flex
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={20}
          marginBottom={20}
        >
          <Flex
            width={300}
            height={300}
            borderTopLeftRadius={20}
            borderBottomLeftRadius={20}
            backgroundImage={'url("/assets/down.png")'}
            backgroundSize={"100% 100%"}
          ></Flex>
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            height={300}
            width={600}
            paddingLeft={50}
            borderTopRightRadius={20}
            borderBottomRightRadius={20}
            gap={7}
            bgGradient="linear(to-r, #6019CD, #548FF1)"
          >
            <Flex direction={"column"}>
              <Text fontSize={"35pt"} color={"#68EA5D"}>
                Start crushing the{" "}
              </Text>
              <Text fontSize={"35pt"} color={"white"}>
                market today
              </Text>
            </Flex>
            <Button
              backgroundColor={"#E8761C"}
              fontSize={"18pt"}
              color={"white"}
              fontWeight={400}
              borderRadius={50}
              colorScheme={"transparent"}
              paddingLeft={10}
              paddingRight={10}
              paddingTop={6}
              paddingBottom={6}
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/register")}
            >
              Try It Free
            </Button>
          </Flex>
        </Flex>
        <Flex
          direction={"row"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          marginBottom={50}
        >
          <Image
            src={"/assets/stars.png"}
            alt={"Call-It Cold Call stars rating review"}
            width={160}
            height={160}
          />
          <Text color={"black"} fontSize={"13pt"} fontWeight={600}>
            100+ Reviews
          </Text>
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100vw"}
          paddingLeft={50}
          paddingRight={50}
          paddingTop={25}
          paddingBottom={25}
          borderTop={"1px solid #cdcdcd"}
        >
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
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
              _hover={{
                opacity: 0.8,
              }}
              onClick={() => router.push("/c/main")}
            >
              Call-It
            </Button>
          </Flex>
          <Text color={"#cdcdcd"}>© 2023 Call-It. All rights reserved</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
