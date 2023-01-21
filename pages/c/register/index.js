import { EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { Flex, Button, Text, Input, Link } from "@chakra-ui/react";
import Head from "next/head";

const Register = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Call-It - Registration Page</title>
        <meta
          name="description"
          content="Unlock the power of AI for your marketing and user retention efforts with Call-It, the startup revolutionizing cold calling. Let our cutting-edge technology take the lead in reaching and engaging with your target audience, resulting in increased conversions and customer satisfaction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100vw"}
        height={"100vh"}
      >
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          padding={10}
          gap={10}
          backgroundColor={"#548FF1"}
          width={"50vw"}
          height={"100vh"}
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
              color={"#fff"}
              fontSize={"18pt"}
              fontWeight={900}
              onClick={() => router.push("/c/main")}
            >
              Call-It
            </Button>
          </Flex>
          <Text color={"white"} fontWeight={600} fontSize={"27pt"}>
            Spend less time on marketing and get more traffic while retaining
            existing users.
          </Text>
          <Flex marginLeft={400} width={300} height={300}>
            <Image
              src={"/assets/call.png"}
              alt={"Call-It phone call cold call"}
              layout={"responsive"}
              width={300}
              height={300}
            />
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"#fff"}
          width={"50vw"}
          height={"100vh"}
          gap={3}
        >
          <Text fontWeight={600} fontSize={"33pt"} textAlign={"center"}>
            Sign Up for Call-It
          </Text>
          <Text color={"gray"} fontSize={"17pt"} textAlign={"center"}>
            Lets get you started.
          </Text>
          <form>
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"50vw"}
              gap={5}
            >
              <Flex
                direction={"row"}
                alignItems={"center"}
                border={"1px solid #d9d9d9"}
                borderRadius={15}
                backgroundColor={"#efefef"}
                paddingLeft={7}
                paddingRight={7}
                paddingTop={2}
                paddingBottom={2}
                width={"70%"}
              >
                <PhoneIcon boxSize={5} />
                <Input
                  type={"phone"}
                  required
                  placeholder="Phone..."
                  border={"none"}
                  outline={"none"}
                />
              </Flex>
              <Flex
                direction={"row"}
                alignItems={"center"}
                border={"1px solid #d9d9d9"}
                borderRadius={15}
                backgroundColor={"#efefef"}
                paddingLeft={7}
                paddingRight={7}
                paddingTop={2}
                paddingBottom={2}
                width={"70%"}
              >
                <EmailIcon boxSize={5} />
                <Input
                  type={"email"}
                  placeholder="Email..."
                  border={"none"}
                  outline={"none"}
                  required
                />
              </Flex>
              <Flex
                direction={"row"}
                alignItems={"center"}
                border={"1px solid #d9d9d9"}
                borderRadius={15}
                backgroundColor={"#efefef"}
                paddingLeft={7}
                paddingRight={7}
                paddingTop={2}
                paddingBottom={2}
                width={"70%"}
              >
                <LockIcon boxSize={5} />
                <Input
                  type={"password"}
                  placeholder="Password..."
                  border={"none"}
                  outline={"none"}
                  required
                />
              </Flex>
              <Button
                backgroundColor={"#548FF1"}
                borderRadius={10}
                width={"70%"}
                paddingTop={7}
                paddingBottom={7}
                color={"white"}
                type={"submit"}
              >
                Continue
              </Button>
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontWeight={400}>Already have an account?&nbsp;</Text>
                <Link
                  fontWeight={400}
                  color={"#548FF1"}
                  onClick={() => router.push("/c/login")}
                >
                  Log In
                </Link>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
