import { VStack, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
const options = [
  { title: "Create", desc: "Create an object", val: "add" },
  { title: "Add", desc: "Add properties to object", val: "remove" },
  { title: "Iterate", desc: "Iterate over the array", val: "iterate" },
  { title: "Find", desc: "Find element inside the array", val: "find" },
  { title: "Sort", desc: "Sort the elements of array", val: "sort" },
  {
    title: "Others",
    desc: "Other usefull array methods and properties",
    val: "others",
  },
];
export default function ObjectComponent() {
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
            _hover={{ border: "1px solid black" }}
            onClick={() => history.push("/object/view/" + o.val)}
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
