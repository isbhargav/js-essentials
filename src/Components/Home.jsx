import { VStack,Box,Text, Heading, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
const options = [{
    title:"JavaScript Array Explorer",
    desc:"Explore all the methods and properties of Javascript array",
    val:"array"
},
{
    title:"JavaScript Object Explorer",
    desc:"Explore all the methods and properties of Javascript object",
    val:"object"
}]
export default function Home(){
    let history = useHistory();
    return(
        <>
        <VStack
  spacing={4}
alignContent="center"
  
>
            {options.map(o=>(
                <Flex key={o.val} w="50%"  bg="gray.100" p="20px" mt="30px" justifyContent='space-between' _hover={{border: "1px solid black"}} onClick={()=>history.push('/'+o.val)}> 
                    <Box>

                <Heading size="xl" fontFamily="monospace">{o.title}</Heading>
                <Text mt={4} fontFamily="monospace">{o.desc}</Text>
                    </Box>
                    <Box>
                        <button>Next</button>
                    </Box>
              </Flex>
            ))
            }
        </VStack>
        </>
    )
}