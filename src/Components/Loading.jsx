import { Progress, Box } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box marginX="20%">
      <Progress marginY="10%" size="xs" isIndeterminate />
    </Box>
  );
}
