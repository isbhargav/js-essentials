import { VStack, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
const options = [
  {
    title: "JavaScript Array Explorer",
    desc: "Explore all the methods and properties of Javascript array",
    val: "array",
  },
  {
    title: "JavaScript Object Explorer",
    desc: "Explore all the methods and properties of Javascript object",
    val: "object",
  },
  {
    title: "JavaScript Set Explorer",
    desc: "Explore all the methods and properties of Javascript Set",
    val: "object",
  },
  {
    title: "JavaScript Map Explorer",
    desc: "Explore all the methods and properties of Javascript Map",
    val: "object",
  },
];
export default function Home() {
  let history = useHistory();
  return (
    <>
      <VStack spacing={4} alignContent="center">
        {options.map((o) => (
          <Flex
            key={o.val}
            w="50%"
            bg="gray.100"
            p="20px"
            mt="30px"
            justifyContent="space-between"
            _hover={{ border: "1px solid rgb(5%, 85.1%, 86.2%)" }}
            onClick={() => history.push("/" + o.val)}
          >
            <Box>
              <Heading size="xl" fontFamily="monospace">
                {o.title}
              </Heading>
              <Text mt={4} fontFamily="monospace">
                {o.desc}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </>
  );
}

// if((i==0 || fb[i-1]==0 ) &&  (i==fb.size()-1 || fb[i+1]==0))

// if(i==0 and fb[i+1]==0 )
// else if(i==n-1 and fb[i-1]=0)
